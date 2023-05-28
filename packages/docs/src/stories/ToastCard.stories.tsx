import { ToastCard, ToastCardProps } from '@luiz504-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Data Display/Toast Card',
  component: ToastCard,
  tags: ['autodocs'],
  decorators: [
    (_, context) => {
      const { title, description, onRequestToClose } = context.args

      const [open, setOpen] = useState(false)
      const handleToggleToast = () => {
        setOpen(!open)
      }

      return (
        <main style={{ height: 200, width: 800 }}>
          <button type="button" onClick={handleToggleToast}>
            Toogle Toast
          </button>

          {open && (
            <ToastCard
              title={title}
              description={description}
              onRequestToClose={(e) => {
                handleToggleToast()
                onRequestToClose(e)
              }}
            />
          )}
        </main>
      )
    },
  ],

  argTypes: {
    onRequestToClose: {
      action: 'onRequestToClose',
    },
    title: {
      description: 'Heading text',
    },
    description: {
      description: 'Paragraph text',
    },
  },
} as Meta<ToastCardProps>

export const Primary: StoryObj<ToastCardProps> = {
  args: {
    title: 'Agendamento Realizado 2',
    description: 'Quarta-feira, 23 de outubro as 16h',
  },
}
