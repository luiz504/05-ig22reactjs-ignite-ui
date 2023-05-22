import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Send',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: { size: 'big' },
}
