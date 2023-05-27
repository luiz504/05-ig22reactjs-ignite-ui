import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@luiz504-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: <Text> View Element Box</Text>,
    as: 'div',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
      description: 'Receives any ReactNode',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A simple `div` with padding, border-radius, border and background preseted',
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

export const CustomTag: StoryObj<BoxProps> = {
  parameters: {
    docs: {
      description: {
        story:
          'Default heading is `div`, but you can change that with the prop `as`',
      },
    },
  },
}
