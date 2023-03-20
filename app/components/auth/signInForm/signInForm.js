import React from "react";
import axios from "axios";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import DefaultButton from "../../UI/defaultButton/defaultButton";
import Input from "../../UI/input/input";
import styles from "./signinform.module.scss";
import { serialize } from "cookie";

export default function SignIn(req, res) {
    const router = useRouter();
    const [spinner, setSpinner] = React.useState(false);

    const handleFormSubmit = (values) => async (event) => {
        event.preventDefault();
        setSpinner(true);
        await axios
            .post("/api/auth/login", values)
            // .post(process.env.NEXT_PUBLIC_API + "/auth/sign_in", values)
            .then(function (response) {
                console.log(response);
                setSpinner(false);
                // router.push("/");
                // const serialised = serialize("JWT", token, {
                //     httpOnly: true,
                //     secure: process.env.NODE_ENV !== "production",
                //     sameSite: "strict",
                //     maxAge: 60 * 60 * 24 * 30, //30 days
                //     path: "/",
                // });

                // res.setHeader("Set-Cookie", serialised);

                // const token = response.headers.authorization;
            })
            .catch(function (error) {
                setSpinner(false);
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
                                placeholder="Email address"
                                errors={errors?.email?.length > 0 && "error"}
                            />
                            <Input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                placeholder="Password"
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
                                <p>LOGIN</p>
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
