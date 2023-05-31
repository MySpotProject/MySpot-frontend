import React, { useState } from "react";
import styles from "./createSpotFrom.module.scss";
import Input from "../UI/Input/input";
import DefaultButton from "../UI/defaultButton/defaultButton";
import Image from "next/image";
import axios from "axios";
import { getCookie, setCookie } from "cookies-next";
import { Field, Formik } from "formik";
import cn from "classnames";

export default function CreateSpotFrom({ latlnd }) {
    // localhost:3001/api/spots/register_new
    const [imageFiles, setImageFiles] = useState([]);
    const headers = {
        Authorization: getCookie("222222222myspot_jwt"),
    };

    // axios.interceptors.request.use((request) => {
    //     console.log("Headers:", request.headers);
    //     return request;
    // });
    const handleFormSubmit = (values) => async (event) => {
        event.preventDefault();

        let inputFiles = document.getElementById("files");
        console.log("inputFiles inputFiles", inputFiles);
        console.log(
            "inputFiles inputFilesinputFilesinputFiles",
            inputFiles.files
        );

        var formData = new FormData();
        console.log(imageFiles);
        const updatedValues = {
            ...values,
            lat: latlnd[0],
            lng: latlnd[1],
            address: "asdsadsad",
            pools: true,
            ramps: false,
            rail: false,
            ladder: true,
            slide: false,
        };
        // formData.append("image", $("input[type=file]")[0].files[0]);

        var ins = document.getElementById("files").files.length;
        for (var x = 0; x < ins; x++) {
            formData.append("spot[images][]", inputFiles.files[x]);
        }

        // inputFiles.files.forEach((item, i) => {
        //     formData.append("spot[images][]", inputFiles.file.lentgh);
        // });
        formData.append("spot[address]", "asdasdasd");
        formData.append("spot[description]", values.description);
        formData.append("spot[pools]", true);
        formData.append("spot[ramps]", false);
        formData.append("spot[rail]", false);
        formData.append("spot[ladder]", false);
        formData.append("spot[slide]", true);
        formData.append("spot[lat]", latlnd[0]);
        formData.append("spot[lng]", latlnd[1]);

        await axios
            .post(
                process.env.NEXT_PUBLIC_API + "/api/spots/register_new",
                formData,
                {
                    headers,
                }
            )
            .then(function (response) {
                console.log(response);
                setCookie(
                    "222222222myspot_jwt",
                    response?.headers?.authorization
                );
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className={styles.aside}>
            <Formik
                initialValues={{
                    title: "СПОТ",
                    description: "",
                    // lat: latlnd[0],
                    // lng: latlnd[1],
                    figures: [
                        { pool: false },
                        { ramp: false },
                        { rail: false },
                        { ladder: false },
                        { slide_elements: false },
                    ],
                    images: [],
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
                    setFieldValue,
                }) => (
                    <form className={styles.form}>
                        <h1>Название</h1>
                        <Input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={values.title}
                            onChange={handleChange}
                        />
                        {/* <Input
                            style={{ display: "none" }}
                            type={"text"}
                            value={latlnd}
                        /> */}
                        <h2>
                            Добавить фотографии
                            <span style={{ fontSize: "24px", opacity: "0.5" }}>
                                max 3
                            </span>
                        </h2>
                        <label className={styles.addPhotos}>
                            <input
                                id="files"
                                type="file"
                                name="images"
                                accept="image/png, image/gif, image/jpeg"
                                multiple="multiple"
                                onChange={(event) => {
                                    const fileList = event.target.files;
                                    Promise.all(
                                        Array.from(fileList)
                                            .slice(0, 3)
                                            .map((file) => {
                                                return new Promise(
                                                    (resolve) => {
                                                        const reader =
                                                            new FileReader();
                                                        reader.readAsDataURL(
                                                            file
                                                        );
                                                        reader.onload = () =>
                                                            resolve(
                                                                reader.result
                                                            );
                                                    }
                                                );
                                            })
                                    ).then((images) => {
                                        setFieldValue("images", images);
                                        setImageFiles(images);
                                    });
                                }}
                            />
                            <div className={styles.addPhotos_btn}>
                                <p>выберите файлы</p>
                            </div>
                        </label>
                        {imageFiles.map((image, index) => (
                            <div className={styles.spotImage}>
                                <Image
                                    fill="layout"
                                    key={index}
                                    src={image}
                                    alt={index}
                                />
                            </div>
                        ))}
                        <h2>Фигуры</h2>
                        <div className={styles.checkBoxes}>
                            {values.figures.map((item, index) => (
                                <>
                                    {Object.entries(item).map(
                                        ([key, value]) => (
                                            <>
                                                <label
                                                    key={key}
                                                    htmlFor={`${index}_${key}_${value}`}
                                                    className={cn(
                                                        styles.checkBoxes_item,
                                                        styles[
                                                            value && "active"
                                                        ]
                                                    )}
                                                >
                                                    <Field
                                                        type="checkbox"
                                                        name="figures"
                                                        checked={value}
                                                        onChange={(event) => {
                                                            const newValue =
                                                                event.target
                                                                    .checked;
                                                            setFieldValue(
                                                                `figures[${index}][${key}]`,
                                                                newValue
                                                            );
                                                        }}
                                                    />
                                                    <p>{key}</p>
                                                </label>
                                            </>
                                        )
                                    )}
                                </>
                            ))}
                        </div>
                        <h2>Описание</h2>
                        <Input
                            type="text"
                            name="description"
                            placeholder="Описание"
                            value={values.description}
                            onChange={handleChange}
                        />
                        <br />
                        <DefaultButton
                            handleClick={handleFormSubmit(values)}
                            type={"default"}
                        >
                            <p>ДОБАВИТЬ СПОТ</p>
                        </DefaultButton>
                    </form>
                )}
            </Formik>
        </div>
    );
}
