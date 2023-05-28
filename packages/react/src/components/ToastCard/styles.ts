import { styled } from '~/styles'
import { Box } from '../Box'
import { keyframes } from '@stitches/react'

const slideIn = keyframes({
  from: {
    transform: 'translateX(100%)',
    opacity: 0,
  },
  to: {
    transform: 'translateX(0)',
    opacity: 1,
  },
})

export const ToastCardContainer = styled(Box, {
  position: 'fixed',
  zIndex: 1000,
  width: 360,
  bottom: '1rem',
  right: '1rem',

  animation: `${slideIn} 150ms ease`,

  p: {
    color: '$gray200',
  },
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$2',
  marginBottom: '$1',

  h2: {
    lineHeight: '$base',
  },

  button: {
    margin: '-0.5rem -0.5rem 0 auto',
    minWidth: 'auto',
    outline: 0,
    padding: '$2',
    height: 'auto',

    svg: {
      color: '$gray200',
    },
  },
})
