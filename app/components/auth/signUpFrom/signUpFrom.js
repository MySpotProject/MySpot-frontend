import axios from "axios";
import { Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import DefaultButton from "../../UI/defaultButton/defaultButton";
import Input from "../../UI/input/input";
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
                toast.success(`успешно!`);

                setTimeout(() => {
                    router.push(`/login`);
                }, 300);
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
                        nickname: "sinshluhi",
                        email: "",
                        password: "",
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = "Required";
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
                            />
                            {errors.email && touched.email && errors.email}
                            <Input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                placeholder="password"
                            />
                            {errors.password &&
                                touched.password &&
                                errors.password}
                            <DefaultButton
                                handleClick={handleFormSubmit(values)}
                                type="default"
                                disabled={isSubmitting}
                            >
                                SIGN UP
                            </DefaultButton>
                            <div className={styles.link}>
                                <Link href={"/signin"}>
                                    you already have account?
                                </Link>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    );
}
