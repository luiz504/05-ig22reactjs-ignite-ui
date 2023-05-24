import React, { ComponentProps } from 'react'

import { TextInputContainer, Prefix, Input } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}
export const TextInput = ({ prefix, ...rest }: TextInputProps) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...rest} />
    </TextInputContainer>
  )
}
