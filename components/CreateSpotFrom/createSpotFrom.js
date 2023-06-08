import React, { useState } from "react";
import styles from "./createSpotFrom.module.scss";
import Input from "../UI/input/input";
import DefaultButton from "../UI/defaultButton/defaultButton";
import Image from "next/image";
import cn from "classnames";
import { Field, Formik } from "formik";
import axios from "axios";

export default function CreateSpotFrom({ latlnd }) {
    const [imageFiles, setImageFiles] = useState([]);

    const handleFormSubmit = (values) => async (event) => {
        event.preventDefault();

        const getFigureValue = (figures, i) => {
            const figure = figures[i];
            const value = Object.values(figure)[0];
            return value;
        };

        let formData = new FormData();
        formData.append("spot[title]", values.title);
        formData.append("spot[address]", "asdasdasd");
        formData.append("spot[description]", values.description);
        formData.append("spot[pools]", getFigureValue(values.figures, 0));
        formData.append("spot[ramps]", getFigureValue(values.figures, 1));
        formData.append("spot[rail]", getFigureValue(values.figures, 2));
        formData.append("spot[ladder]", getFigureValue(values.figures, 3));
        formData.append("spot[slide]", getFigureValue(values.figures, 4));
        formData.append("spot[lat]", latlnd[0]);
        formData.append("spot[lng]", latlnd[1]);
        let inputFiles = document.getElementById("files");
        let ins = document.getElementById("files").files.length;
        for (let x = 0; x < ins; x++) {
            formData.append("spot[images][]", inputFiles.files[x]);
        }
        // /api/axiosMiddleware/createSpot
        await axios
            .post("/api/axiosMiddleware/createSpot", formData)
            .then(function (response) {
                console.log(response);
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
