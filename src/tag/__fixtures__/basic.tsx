import React from 'react'
import { ScrollView } from 'react-native'
import { Icon } from '@fruits-chain/react-native-xiaoshu'
import { Tag, Cell, CellGroup } from '@fruits-chain/react-native-xiaoshu'

const BasicTag: React.FC = () => {
  return (
    <ScrollView>
      <CellGroup title="基础用法" bordered={false}>
        <Cell title="default 类型" value={<Tag>标签</Tag>} />
        <Cell title="primary 类型" value={<Tag type="primary">标签</Tag>} />
        <Cell title="hazy 类型" value={<Tag type="hazy">标签</Tag>} />
        <Cell title="ghost 类型" value={<Tag type="ghost">标签</Tag>} />
      </CellGroup>
      <CellGroup title="size" bordered={false}>
        <Cell title="大" value={<Tag size="l">标签</Tag>} />
        <Cell title="中" value={<Tag size="m">标签</Tag>} />
        <Cell title="小" value={<Tag size="s">标签</Tag>} />
      </CellGroup>
      <CellGroup title="操作相关" bordered={false}>
        <Cell
          title="closable"
          value={
            <Tag
              closable
              onClose={() => {
                console.log('点击了关闭')
              }}>
              标签
            </Tag>
          }
        />
        <Cell
          title="closeIcon"
          value={
            <Tag
              closable
              onClose={() => {
                console.log('点击了关闭')
              }}
              closeIcon={<Icon.CheckedFill />}>
              标签
            </Tag>
          }
        />
      </CellGroup>
      <CellGroup title="颜色" bordered={false}>
        <Cell title="#FFA238" value={<Tag color="#FFA238">标签</Tag>} />
        <Cell title="#FA541C" value={<Tag color="#FA541C">标签</Tag>} />
        <Cell title="#34B545" value={<Tag color="#34B545">标签</Tag>} />
        <Cell title="#AD101A" value={<Tag color="#AD101A">标签</Tag>} />
        <Cell title="#1BA2FC" value={<Tag color="#1BA2FC">标签</Tag>} />
        <Cell title="#7D45E6" value={<Tag color="#7D45E6">标签</Tag>} />
        <Cell title="#0065FE" value={<Tag color="#0065FE">标签</Tag>} />
        <Cell
          title="#FFA238"
          value={
            <Tag color="#FFA238" type="hazy">
              标签
            </Tag>
          }
        />
        <Cell
          title="#FA541C"
          value={
            <Tag color="#FA541C" type="hazy">
              标签
            </Tag>
          }
        />
        <Cell
          title="#34B545"
          value={
            <Tag color="#34B545" type="hazy">
              标签
            </Tag>
          }
        />
        <Cell
          title="#AD101A"
          value={
            <Tag color="#AD101A" type="hazy">
              标签
            </Tag>
          }
        />
        <Cell
          title="#1BA2FC"
          value={
            <Tag color="#1BA2FC" type="hazy">
              标签
            </Tag>
          }
        />
        <Cell
          title="#7D45E6"
          value={
            <Tag color="#7D45E6" type="hazy">
              标签
            </Tag>
          }
        />
        <Cell
          title="#0065FE"
          value={
            <Tag color="#0065FE" type="hazy">
              标签
            </Tag>
          }
        />
      </CellGroup>
    </ScrollView>
  )
}

export default BasicTag
