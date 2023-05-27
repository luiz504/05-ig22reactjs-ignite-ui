import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@luiz504-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/luiz504.png',
    alt: 'Luiz504',
  },
  argTypes: {
    src: {
      description: 'Image URL',
      control: {
        type: 'text',
      },
    },
    alt: {
      description: 'Alternative text',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This component was built using radix-ui/react-avatar primitives.',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
  parameters: {
    docs: {
      description: {
        story:
          'If a `src` is not provided or the url provided is invalid or get some error, a fallback `svg` icon will apper with a delay of 600ms',
      },
    },
  },
}
