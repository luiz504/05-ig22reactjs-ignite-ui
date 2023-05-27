import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@luiz504-ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
    onClick: () => {},
  },
  argTypes: {
    onClick: {
      action: 'click',
      description: 'default onclick event',
    },
    children: {
      description: 'ReactNode',
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: 'inline-radio',
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    size: {
      options: ['sm', 'md'],
      control: 'inline-radio',
      table: {
        defaultValue: {
          summary: 'md',
        },
      },
    },
    disabled: {
      controls: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Create New',
    variant: 'secondary',
  },
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'Cancel',
    variant: 'tertiary',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'sm',
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Send',
    variant: 'primary',
    disabled: true,
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next <ArrowRight weight="bold" />
      </>
    ),
  },
}
