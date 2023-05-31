import React from "react";
import axios from "axios";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import DefaultButton from "../UI/defaultButton/defaultButton";
import Input from "../UI/Input/input";
import styles from "./signinform.module.scss";
import { getCookie, setCookie } from "cookies-next";

export default function SignIn() {
    const router = useRouter();
    const [spinner, setSpinner] = React.useState(false);
    const handleFormSubmit = (values) => async (event) => {
        event.preventDefault();
        setSpinner(true);

        await axios
            .post(process.env.NEXT_PUBLIC_API + "/auth/sign_in", values)
            .then(function (response) {
                setSpinner(false);
                console.log(response);
                setCookie(
                    "222222222myspot_jwt",
                    response?.headers?.authorization
                );
                // router.push("/");
            })
            .catch(function (error) {
                console.log("err", error);
                setSpinner(false);
                toast.error(`${error?.response?.data?.errors?.full_messages}`);
            });

        // await axios
        //     .post("/api/auth/login", values)
        //     .then(function (response) {
        //         setSpinner(false);
        //         console.log(response);
        //         if (response.data?.error?.message) {
        //             toast.error(`Неверная почта или пароль`);
        //             return;
        //         } else {
        //             router.push("/");
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log("err", error);
        //         setSpinner(false);
        //     });
    };
    return (
        <>
            <div className={styles.wrapper}>
                <Formik
                    initialValues={{
                        email: "O.liGo.Rr@ya.ru",
                        password: "O.liGo.Rr@ya.ru",
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
                                spinner={spinner}
                                disabled={
                                    errors.email ||
                                    errors.email === "" ||
                                    values.password === ""
                                        ? true
                                        : false
                                }
                            >
                                <p>ВОЙТИ</p>
                            </DefaultButton>
                            <div className={styles.link}>
                                <Link href={"/signup"}>нет аккаунта?</Link>
                                <Link href={"/signup"}>забыли пароль?</Link>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    );
}
