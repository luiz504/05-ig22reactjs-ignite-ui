import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@luiz504-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    size: 'md',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, error nostrum non natus et, sint veritatis dolores debitis, hic vero necessitatibus tenetur ipsam voluptas eos doloremque adipisci. Saepe, alias recusandae!',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: 'inline-radio',
      defaultValue: 'md',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
    size: '2xl',
  },
}
