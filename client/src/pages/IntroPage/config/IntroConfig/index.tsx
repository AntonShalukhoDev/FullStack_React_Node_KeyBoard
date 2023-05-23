import React from 'react'
import { LOG_IN, REGISTRATION, MESSAGE } from '../../consts'
import { useParams } from 'react-router-dom'
import { RegistrationForm } from '../../../../components/RegistrationForm'
import { LoginForm } from '../../../../components/LoginForm'
import { IntroContent } from '../../components/Intro/IntroContent'
import { Message } from '../../../../components/Message'

export const IntroConfig = () => {
  const { step, isSuccess } = useParams<string>() 
  switch(step) {
    case REGISTRATION: return <RegistrationForm /> ;
    case LOG_IN: return <LoginForm /> ;
    case MESSAGE: return (
      <Message timer={2500}  >
        {isSuccess === ':true' 
          ? 'You have been successfully registered'
          : 'Some thing is wrong'
        }
      </Message>) ;
    default: return <IntroContent/>
  }
}
