/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Divider, Button, Flex } from '@fruits-chain/react-native-xiaoshu'

const Circle = (props: { size?: number }) => {
  const size = props.size || 20
  const style = {
    borderRadius: size / 2,
    backgroundColor: '#527fe4',
    width: size,
    height: size,
    margin: 1,
  }
  return <View style={style} />
}

const BasicFlex: React.FC = () => {
  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <Text>项目的排列方向</Text>
      <Text>direction="row":主轴为水平方向，起点在左端</Text>
      <Flex>
        <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
          <Button size="xs">按钮1</Button>
        </Flex.Item>
        <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
          <Button size="xs">按钮2</Button>
        </Flex.Item>
        <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
          <Button size="xs">按钮3</Button>
        </Flex.Item>
      </Flex>

      <Divider />

      <View style={{ height: 20 }} />
      <Text>direction="column":主轴为垂直方向，起点在上沿</Text>
      <Flex direction="column">
        <Flex.Item style={{ paddingBottom: 4 }}>
          <Button size="xs">按钮1</Button>
        </Flex.Item>
        <Flex.Item style={{ paddingBottom: 4 }}>
          <Button size="xs">按钮2</Button>
        </Flex.Item>
        <Flex.Item style={{ paddingBottom: 4 }}>
          <Button size="xs">按钮3</Button>
        </Flex.Item>
      </Flex>

      <Divider />

      <View style={{ height: 20 }} />
      <Text style={{ marginTop: 20, marginBottom: 20 }}>
        项目在主轴上的对齐方式
      </Text>
      <Text>justify="start":左对齐</Text>
      <Flex justify="start">
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </Flex>

      <Divider />

      <View style={{ height: 20 }} />
      <Text>justify="center":居中</Text>
      <Flex justify="center">
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </Flex>

      <Divider />

      <View style={{ height: 20 }} />
      <Text>justify="end":右对齐</Text>
      <Flex justify="end">
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </Flex>
      <Divider />
    </ScrollView>
  )
}

export default BasicFlex
