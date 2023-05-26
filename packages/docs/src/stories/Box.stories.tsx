import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@luiz504-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: <Text> View Element Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
      description: 'Receives any Node',
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
