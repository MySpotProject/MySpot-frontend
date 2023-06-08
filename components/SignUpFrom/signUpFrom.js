import axios from "axios";
import { Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import DefaultButton from "../UI/defaultButton/defaultButton";
import Input from "../UI/input/input";
import { toast } from "react-toastify";

import styles from "./signupform.module.scss";
import Link from "next/link";

export default function SignUpFrom() {
    const router = useRouter();

    const handleFormSubmit = (values) => async (event) => {
        event.preventDefault();
        await axios
            .post(process.env.NEXT_PUBLIC_API + "/auth", values)
            .then(function (response) {
                console.log(response);
                toast.success(`Проверьте почту для верификации аккаунта`);
                router.push(`/login`);
            })
            .catch(function (error) {
                console.log(error);
                toast.error(`${error?.response?.data?.errors?.full_messages}`);
            });
    };

    return (
        <>
            <div className={styles.wrapper}>
                <Formik
                    initialValues={{
                        name: "kostamen",
                        nickname: "kostamen2",
                        email: "",
                        password: "",
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
                                placeholder="Почтовый адресс"
                                errors={errors?.email?.length > 0 && "error"}
                            />
                            <Input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                placeholder="Пароль"
                            />
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
                                <p>зарегистрироваться</p>
                            </DefaultButton>
                            <div className={styles.link}>
                                <Link href={"/login"}>Уже есть аккаунт?</Link>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    );
}
