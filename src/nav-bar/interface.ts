import type React from 'react'
import type { ViewStyle, TextStyle, StyleProp } from 'react-native'

export interface NavBarProps {
  /**
   * 最外层的样式
   */
  style?: StyleProp<ViewStyle>

  /**
   * 左侧布局的样式
   */
  leftStyle?: StyleProp<ViewStyle>

  /**
   * 左侧自定义内容
   */
  leftExtra?: React.ReactNode

  /**
   * 右侧布局的样式
   */
  rightStyle?: StyleProp<ViewStyle>

  /**
   * 右侧自定义内容
   */
  rightExtra?: React.ReactNode

  /**
   * 标题文案样式
   */
  titleTextStyle?: StyleProp<TextStyle>

  /**
   * 标题文字或自定义 JSX
   */
  title?: React.ReactNode

  /**
   * 显示返回箭头
   * @default true
   */
  showBackArrow?: boolean

  /**
   * 自定义返回按钮颜色
   */
  backArrowColor?: string

  /**
   * 自定义返回按钮尺寸
   */
  backArrowSize?: number

  /**
   * 是否显示下边框
   * @default true
   */
  bordered?: boolean

  /**
   * 细边框
   * @default false
   */
  hairline?: boolean

  /**
   * 点击返回按钮的回调
   */
  onPressBackArrow?: () => void
}
