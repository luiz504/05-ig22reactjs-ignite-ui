import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@luiz504-ignite-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],

  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text>Accept terms of use</Text>
        </Box>
      )
    },
  ],

  argTypes: {
    defaultChecked: {
      control: null,
      description:
        'The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state.',
      defaultValue: undefined,
    },
    checked: {
      control: null,
      description:
        'The controlled checked state of the checkbox. Must be used in conjunction with onCheckedChange.',
      defaultValue: undefined,
    },
    onCheckedChange: {
      action: 'onCheckedChange',
      description:
        'The controlled checked state of the checkbox. Must be used in conjunction with onCheckedChange.',
      defaultValue: undefined,
      table: {
        defaultValue: {
          summary: undefined,
        },
      },
    },
    disabled: {
      description:
        'When true, prevents the user from interacting with the checkbox.',
      control: 'boolean',
      defaultValue: undefined,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This component was built using radix-ui/react-checkbox primitives.',
      },
    },
  },
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}
