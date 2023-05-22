import { styled } from '../styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$lg',
})

export function App() {
  return (
    <>
      <Button>Hello word</Button>
    </>
  )
}
