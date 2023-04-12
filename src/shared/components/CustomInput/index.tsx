import { Input } from "antd";
import React from "react";

import styles from "./input.module.scss";

interface ICustomInput {
  label?: string;
  field: any;
  errors: any;
  type: "text" | "password";
}

const CustomInput: React.FC<ICustomInput> = ({
  label,
  field,
  type,
  errors,
}) => (
  <div className={styles.inputContainer}>
    {label && <p className={styles.label}>{label}</p>}
    <Input className={styles.input} type={type} {...field} />
    {errors && <p className={styles.errors}>* {errors?.message}</p>}
  </div>
);

export default CustomInput;
