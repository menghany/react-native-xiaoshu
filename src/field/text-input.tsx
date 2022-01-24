import React, { memo } from 'react'

import Cell from '../cell'
import TextInput from '../text-input'
import { useTheme } from '../theme'
import type { FieldTextInputProps, FieldTextCellPropsUsed } from './interface'

/**
 * Field 输入框
 * @description 表单中的输入框组件。
 * @description TODO 自定义输入项
 * @description TODO 解决多行输入高度没对齐的问题
 */
const FieldTextInput: React.FC<FieldTextInputProps> = ({
  value,
  // TODO 优化属性传递
  innerStyle,
  title,
  titleStyle,
  titleTextStyle,
  titleExtra,
  valueStyle,
  valueExtra,
  contentStyle,
  bordered = true,
  isLink = false,
  onPressLink,
  center = false,
  arrowDirection = 'right',
  required = false,
  vertical = false,

  // TextInput 属性
  textAlign = 'right',
  placeholder,
  type,
  textInputStyle,
  textInputBordered,
  ...restProps
}) => {
  if (vertical) {
    textAlign = 'left'
    type = 'textarea'
  }

  if (type === 'textarea') {
    textAlign = 'left'
    textInputBordered = true
    vertical = true
  }

  const THEME_VAR = useTheme()

  const cellProps: FieldTextCellPropsUsed = {
    innerStyle,
    title,
    titleStyle,
    titleTextStyle,
    titleExtra,
    valueStyle,
    valueExtra,
    contentStyle,
    bordered,
    isLink,
    onPressLink,
    center,
    arrowDirection,
    required,
    vertical,
  }

  return (
    <Cell
      {...cellProps}
      valueStyle={
        vertical
          ? {
              marginTop: THEME_VAR.space_2,
            }
          : null
      }
      value={
        <TextInput
          {...restProps}
          style={textInputStyle}
          type={type}
          bordered={textInputBordered}
          value={value}
          placeholder={placeholder}
          textAlign={textAlign}
        />
      }
    />
  )
}

export default memo(FieldTextInput)
