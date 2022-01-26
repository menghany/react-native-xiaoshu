/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React from 'react'
import { Text } from 'react-native'

import { NavBar, CellGroup } from '@fruits-chain/react-native-xiaoshu'

const BasicNavBar: React.FC = () => {
  return (
    <>
      <CellGroup title="一般使用">
        <NavBar
          title="一般使用"
          onPressBackArrow={() => {
            console.log('点击返回')
          }}
        />
      </CellGroup>

      <CellGroup title="隐藏返回按钮">
        <NavBar title="隐藏返回按钮" showBackArrow={false} />
      </CellGroup>

      <CellGroup title="左侧内容区域">
        <NavBar title="标题" leftExtra={<Text>左侧内容区域</Text>} />
      </CellGroup>

      <CellGroup title="右侧内容区域">
        <NavBar
          title="标题"
          leftExtra={<Text>左侧内容区域</Text>}
          rightExtra={<Text>右侧内容区域</Text>}
        />
      </CellGroup>
    </>
  )
}

export default BasicNavBar
