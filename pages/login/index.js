import React from "react";
import Spacer from "components/UI/spacer/spacer";
import SignIn from "components/SignInForm/signInForm";

export default function index() {
    return (
        <>
            <div
                style={{
                    height: "100vh",
                }}
            >
                <Spacer size={"xl"} />
                <div
                    className="main__wrapper"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <SignIn />
                </div>
            </div>
        </>
    );
}
