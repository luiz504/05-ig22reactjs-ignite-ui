import { ReactNode } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import {
  TolltipRoot,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipArrow,
} from './styles'
import { ComponentProps } from '@stitches/react'

export interface TooltipProps extends ComponentProps<typeof TolltipRoot> {
  children: ReactNode
  text: string
  side?: ComponentProps<typeof TooltipContent>['side']
}

export function Tooltip({
  children,
  text,
  side = 'top',
  ...rest
}: TooltipProps) {
  return (
    <TolltipRoot {...rest}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>

      <TooltipPortal>
        <TooltipContent side={side}>
          <span>{text}</span>
          <TooltipArrow />
        </TooltipContent>
      </TooltipPortal>
    </TolltipRoot>
  )
}

export const TolltipProvider = TooltipPrimitive.Provider
