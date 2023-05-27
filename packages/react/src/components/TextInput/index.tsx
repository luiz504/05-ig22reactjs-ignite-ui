import { ComponentProps, forwardRef, ElementRef } from 'react'

import { TextInputContainer, Prefix, Input } from './styles'

export interface TextInputProps
  extends Omit<ComponentProps<typeof Input>, 'size'> {
  prefix?: string
  size?: 'sm' | 'md'
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, size, ...rest }, ref) => {
    return (
      <TextInputContainer size={size}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...rest} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
