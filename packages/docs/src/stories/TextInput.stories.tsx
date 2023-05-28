import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@luiz504-ignite-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  args: {
    prefix: '',
    placeholder: '',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text>Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
  argTypes: {
    prefix: {
      description: 'Prefix text input',
    },
    placeholder: {
      description: 'Input text cue',
    },
    size: {
      options: ['sm', 'md'],
      control: 'inline-radio',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'email',
    size: 'sm',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
