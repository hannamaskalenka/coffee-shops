import CustomInput from "@/shared/components/CustomInput";
import { Button, Form, Input } from "antd";
import Head from "next/head";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";

const schema = yup
  .object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

const Login = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { username: string; password: string }) =>
    router.push("/stores");

  return (
    <div className={styles.loginPageContainer}>
      <Head>
        <title>Login Page</title>
      </Head>

      <h1 className={styles.title}>Log in</h1>
      <form
        className={styles.form}
        autoComplete="false"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="username"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <CustomInput
              type="text"
              label="Username"
              field={field}
              errors={errors.username}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <CustomInput
              errors={errors.password}
              type="password"
              label={"Password"}
              field={field}
            />
          )}
        />

        <Button
          className={styles.submitButton}
          type="primary"
          htmlType="submit"
        >
          Confirm
        </Button>
      </form>
    </div>
  );
};

export default Login;
