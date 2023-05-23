import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Formik, Form} from "formik";
import { initialValues } from './consts';
import { InitialValuesType } from './types';
import styles from "./RegistrationForm.module.css"
import { BackButton } from '../../UI/BackButton';
import { Input } from '../../UI/Input';
import { validationSchema } from './helpers/validationSchema';
import { Button } from '../../UI/Button/index';
import { sendSignUpRequest } from '../../service/api/sendSignUpRequest';
import { MESSAGE } from '../../pages/IntroPage/consts';
import { setTokenToLocStor } from '../../assets/helpers';



export const RegistrationForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [passErrors, setPassErrors] = useState<string[]>([])
    const navigate = useNavigate()

    const handelLoading = () => setIsLoading(!isLoading)

    const handleSubmit = (values: InitialValuesType) => {
        if(values.password !== values.repeatPassword) {
            setPassErrors(prev => {
                prev.push("Email or Password is wrong")
                return prev
            })
            return
        }
        const requestBody = {
            name: values.name, 
            email: values.email, 
            password: values.password
        }
        setIsLoading(true)
        sendSignUpRequest(requestBody)
            .then(data => {
                setTokenToLocStor(data.data.accessToken)
                navigate(`intro/${MESSAGE}/:true`);
            })
            .catch(err => {
                setPassErrors(prev => {
                    prev.push(err.response.message)
                    return prev
                })
                navigate(`intro/${MESSAGE}/:false`)
                throw new Error(err.response.message)
            })
            .finally(() => {setIsLoading(false)})
    }

  return (
    <div className={styles.wrapper}>
        <div>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <Form className={styles.entranceWrapperReg}>
              <BackButton/>
              <div className={styles.entranceName}>
                <div className={styles.nameTitle}>Registration:</div>
                <Input
                  name='name'
                  type='text'
                  placeholder='Name'
                  title='The name should contain 1-15 letters either Latin or Cyrillic language'
                />
                <Input
                  name='email'
                  type='text'
                  placeholder='Email'
                  title='Invalid Email'
                />
                <Input
                  name='password'
                  placeholder='Password' 
                  title='The password should be min six sings. Min one number, one uppercase and lowercase letter'
                  isPasswordType={true}
                  errors={passErrors.length
                    ? passErrors
                    : undefined
                  }
                />
                <Input
                  name='repeatPassword'
                  placeholder='Repeat password'
                  title='Repeat password'
                  isPasswordType={true}
                  errors={passErrors.length
                    ? passErrors
                    : undefined
                  }
                />
                <Button type='submit' onClick={handelLoading} variant='default' isLoading={isLoading} >Sign up</Button>
              </div>
            </Form>
          </Formik>
        </div>
    </div>
  )
}
