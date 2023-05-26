import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@luiz504-ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Amazing Headings',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: 'inline-radio',
      defaultValue: 'md',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Default heading is `h2`, but you can change that with the prop `as`',
      },
    },
  },
}
