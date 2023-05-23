import React from "react";

import styles from "./Error.module.css";

type ErrorProps = {
  errorMessage: string;
};

export const Error = ({ errorMessage }: ErrorProps) => {

  return (
    <p className={styles.input_error_text}>
      {errorMessage}
    </p>
  );
};

type ErrorsListTypeProps = {
  errors: string[];
};

export const ErrorsList = ({ errors }: ErrorsListTypeProps) => (
  <>
    {errors.map((error) => (
      <Error key={error} errorMessage={error} />
    ))}
  </>
);
