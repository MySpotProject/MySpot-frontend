import React from "react";
import SignIn from "../../app/components/auth/signInForm/signInForm";
import Spacer from "../../app/components/UI/spacer/spacer";

export default function index() {
    return (
        <>
            <div style={{ height: "100vh" }}>
                <Spacer size={"xl"} />
                <div className="main__wrapper">
                    <SignIn />
                </div>
            </div>
        </>
    );
}
