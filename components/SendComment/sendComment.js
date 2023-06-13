import styles from "./sendComment.module.scss";
import React, { useState } from "react";
import instance from "../../instanceAxios";
import { getCookie } from "cookies-next";
import { toast } from "react-toastify";

export default function SendComment({ id }) {
    const [content, setContent] = useState("");

    const handeSendMessage = async () => {
        await instance
            .post(
                `/api/spot/${id}/post_comment`,
                { content },
                {
                    headers: {
                        Authorization: getCookie("myspot_jwt2222"),
                    },
                }
            )
            .then(function (response) {
                console.log(response);

                if (response === undefined) {
                    toast.error(`Вы уже оствили комментарий`);
                }
            })
            .catch(function (error) {
                console.log(error);
                toast.error(`Ошибка АНДЕФАЙН)))`);
            });
    };
    return (
        <div className={styles.write_message}>
            <input
                name="text"
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button
                onClick={() => {
                    handeSendMessage();
                }}
            >
                <p>{">"}</p>
            </button>
        </div>
    );
}
