import React, { useEffect } from "react";
import axios from "axios";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import DefaultButton from "../../UI/defaultButton/defaultButton";
import Input from "../../UI/input/input";
import styles from "./signinform.module.scss";

export default function SignIn() {
    const router = useRouter();

    const handleFormSubmit = (values) => async (event) => {
        event.preventDefault();

        await axios
            .post(process.env.NEXT_PUBLIC_API + "/auth/sign_in", values)
            .then(function (response) {
                console.log(response);
                localStorage.setItem("token", response.headers.authorization);
                router.push(`/`);
            })
            .catch(function (error) {
                toast.error(`${error?.response?.data?.errors}`);
            });
    };
    return (
        <>
            <div className={styles.wrapper}>
                <Formik
                    initialValues={{
                        email: "O.liGo.Rr@ya.ru",
                        password: "123morgen123",
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = "";
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email
                            )
                        ) {
                            errors.email = "Invalid email address";
                        }

                        return errors;
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onClick={handleSubmit} className={styles.form}>
                            <Input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder="email address"
                                errors={errors?.email?.length > 0 && "error"}
                            />
                            <Input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                placeholder="password"
                            />
                            {console.log(errors?.password)}
                            <DefaultButton
                                handleClick={handleFormSubmit(values)}
                                type="default"
                                disabled={
                                    errors.email ||
                                    errors.email === "" ||
                                    values.password === ""
                                        ? true
                                        : false
                                }
                            >
                                LOGIN
                            </DefaultButton>
                            <div className={styles.link}>
                                <Link href={"/signup"}>
                                    you dont have a account?
                                </Link>
                                <Link href={"/signup"}>forgott pass?</Link>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    );
}
