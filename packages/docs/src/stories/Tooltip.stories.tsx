import { Meta, StoryObj } from '@storybook/react'
import {
  AvatarProps,
  Box,
  Button,
  TolltipProvider,
  Tooltip,
  TooltipProps,
} from '@luiz504-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            padding: '$12',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem 10rem',
          }}
        >
          <TolltipProvider>
            <Story />
            <Story />
            <Story />
            <Story />
          </TolltipProvider>
        </Box>
      )
    },
  ],

  args: {
    children: <Button>Hover me</Button>,
    text: 'Button Tooltip',
    side: 'top',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
      description: 'Receives any ReactNode',
    },
    text: {
      description: 'Text to be displayed inside the Tooltip',
    },
    side: {
      control: 'inline-radio',
      options: ['top', 'right', 'bottom', 'left'],
      defaultValue: 'top',
      description:
        'The preferred side of the trigger to render against when open',
      table: {
        defaultValue: {
          summary: 'top',
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This component was built using radix-ui/react-tooltip primitives.',
      },
    },
  },
} as Meta<TooltipProps>

export const Primaty: StoryObj<AvatarProps> = {}
