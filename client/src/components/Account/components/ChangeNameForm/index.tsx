import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleChangeNameComponent } from '../../../../store/slices/ChangeNameSlice'
import { changeUserName } from '../../../../store/slices/UserNameSlice'
import { ChangeNameType } from '../../types'
import { Form, Formik } from 'formik'
import { CROSS } from '../../../../assets/iconsUrls'
import { ChangeNameFormInitialValues } from '../../consts'
import { validationSchema } from '../../helpers/validationSchema'
import { Input } from '../../../../UI/Input'
import { Button } from '../../../../UI/Button/index'
import { sendChangeName } from '../../../../service/api/changeName'
import styles from "./ChangeNameForm.module.css"
import classNames from 'classnames'



export const ChangeNameForm: FC = () => {
  const [newNameErrors, setNewNameError] = useState<string[]>([]) 
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(toggleChangeNameComponent())
  }

  const handleSubmit = (values: ChangeNameType) => {
    setNewNameError([])
    const requestBody = {
      newName: values.newName
    }
    setIsLoading(true)
    sendChangeName(requestBody)
      .then(() => {
        dispatch(changeUserName(values.newName))
        dispatch(toggleChangeNameComponent())
      })
      .catch(err => setNewNameError(prev => {
        prev.push(err.response.message)
        return prev
      }))
      .finally(() => setIsLoading(false))
  }

  return (
    <Formik
      initialValues={ChangeNameFormInitialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <img src={CROSS} className={styles.nameImgClose} onClick={handleClose} />
        <Input 
          name='name'
          placeholder='Your name'
          className={classNames(styles.links ,styles.nameCases)}
        />
        <Input 
          name='newName'
          placeholder='New name'
          className={classNames(styles.links ,styles.nameCases)}
          errors={newNameErrors.length 
            ? newNameErrors
            : undefined 
          }
        />
        <Button 
          variant='default'
          type="submit"
          className={classNames(styles.links ,styles.caseButt)}
          isLoading={isLoading}
        >Change
        </Button>
      </Form>
    </Formik>
  )
}
