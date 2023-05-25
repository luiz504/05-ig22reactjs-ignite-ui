import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  /** number of steps */
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Step {currentStep} of {size}
      </Label>
      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => ({ id: i + 1 })).map((step) => (
          <Step key={step.id} active={currentStep >= step.id} />
        ))}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
