import React, { InputHTMLAttributes, RefAttributes, useRef, useState } from 'react';
import { Field, useField } from 'formik';
import { Error, ErrorsList } from '../Error';
import classNames from 'classnames';
import styles from "./Input.module.css";
import { EYE_DISABLE, EYE_ENABLE } from '../../assets/iconsUrls';

type InputType = {
  name: string;
  isPasswordType?: boolean;
  errors?: string[]
}

export const Input: React.FC<
  InputType &
  InputHTMLAttributes<HTMLInputElement> &
  RefAttributes<unknown>
> = ({
  name,
  isPasswordType,
  errors,
  ...props
}) => {
  const [field, meta, helper] = useField(name);
  const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(true)
  const inputType = useRef<string>('password')

  const handleEyeIcon = () => {
    setIsHiddenPassword(!isHiddenPassword)
    if(inputType.current === 'password') {
      inputType.current = 'text'
    } else {
      inputType.current = 'password'
    }
  }

  return (
    <div className={styles.wrapper}>
      <Field 
        name={name}
        type={isPasswordType && inputType.current}
        className={classNames(styles.formFactor)} 
        {...props}
      />
      {isPasswordType && (
        <img 
          src={
            isHiddenPassword
            ?   EYE_DISABLE
            :   EYE_ENABLE
          } 
          alt="show password" 
          className={styles.icon}
          onClick={handleEyeIcon} 
        />
      )}
      <div className="below-input-block">
        {meta.error && meta.touched && Array.isArray(meta.error) && (
          <ErrorsList errors={meta.error} />
        )}
        {meta.error && meta.touched && typeof meta.error === "string" && (
          <Error errorMessage={meta.error} />
        )}
        {errors ? <ErrorsList errors={errors} /> : null}
      </div>
    </div>
  )
}
