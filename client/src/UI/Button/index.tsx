import React, { DOMAttributes, MutableRefObject, forwardRef } from "react";

import classNames from "classnames";

import { Spinner } from "../Spinner";

import styles from "./Button.module.css";

export type ButtonType = "button" | "submit" | "reset";

export type VariantType = 
  | "default"
  | "exit";

export type ButtonProps = {
  variant: VariantType;
  className?: string;
  disabled?: boolean;
  type?: ButtonType;
  isLoading?: boolean;
  name?: string;
  id?: string;
};
const variants = {
  default: 'default',
  exit: "exit"
};

export const Button = forwardRef(
  (
    {
      variant,
      children,
      disabled,
      className = "",
      type,
      isLoading,
      name,
      ...props
    }: ButtonProps & DOMAttributes<HTMLButtonElement>,
    ref
  ) => {
    const buttonClass = variant
      ? `${styles[variants[variant]]} ${className}`
      : className;
    /* eslint-disable react/button-has-type */
    return (
      <button
        ref={ref as MutableRefObject<HTMLButtonElement>}
        name={name}
        className={buttonClass}
        disabled={disabled}
        type={type || "button"}
        {...props}
      >
        {isLoading ? <Spinner /> : children}
      </button>
    );
  }
);
