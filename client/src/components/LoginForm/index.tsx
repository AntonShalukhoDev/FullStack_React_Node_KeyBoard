import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { initialValues } from './consts'
import { InitialValuesType } from './types'
import { BackButton } from '../../UI/BackButton'
import { Input } from '../../UI/Input'
import { Button } from '../../UI/Button/index'
import { sendLogin } from '../../service/api/sendLogin'
import { setTokenToLocStor } from '../../assets/helpers'
import { changeUserName } from '../../store/slices/UserNameSlice'
import { useDispatch } from 'react-redux'
import styles from "./LoginForm.module.css"
import classNames from 'classnames'

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [loginErrors, setLoginErrors] = useState<string[]>([])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleSubmit = (values: InitialValuesType) => {
    setIsLoading(true)
    const requestBody = {
      email: values.email, 
      password: values.password
    };
    sendLogin(requestBody)
      .then(data => {
        setTokenToLocStor(data.data.accessToken)
        dispatch(changeUserName(data.data.user.name))
        navigate('/piano')
      })
      .catch(err => {
        setLoginErrors(prev => {
          prev.push(err.response.message)
          return prev
        })
        throw new Error(err.response.message)
      })

  }

  return (
    <div className={styles.root3}>
        <div className={classNames(styles.entranceWrapperReg, styles.entranceWrapper)} >
          <BackButton/>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            <Form className={styles.entranceForm} >
              <Input
                name='email'
                placeholder='Email'
                errors={loginErrors.length
                  ? loginErrors 
                  : undefined
                }
              />
              <Input
                name='password'
                placeholder='Password'
                isPasswordType={true}
                errors={loginErrors.length
                  ? loginErrors 
                  : undefined
                }
              />
              <Button 
                variant='default'
                isLoading={isLoading}
                type='submit'
              >Log in</Button>
            </Form>
          </Formik>
        </div>
    </div>
  )
}