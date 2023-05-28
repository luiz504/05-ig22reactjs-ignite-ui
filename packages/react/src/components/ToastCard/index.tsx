import React from 'react'
import { X } from 'phosphor-react'

import { Heading } from '../Heading'
import { Text } from '../Text'
import { Button } from '../Button'

import { ToastCardContainer, Header } from './styles'

export interface ToastCardProps {
  title: string
  description: string
  onRequestToClose: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void
}

export function ToastCard({
  title,
  description,
  onRequestToClose,
}: ToastCardProps) {
  return (
    <ToastCardContainer>
      <Header>
        <Heading size="sm"> {title} </Heading>

        <Button variant={'tertiary'} size={'sm'} onClick={onRequestToClose}>
          <X size={12} weight="bold" />
        </Button>
      </Header>

      <Text> {description} </Text>
    </ToastCardContainer>
  )
}
