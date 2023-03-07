import React from "react";
import SignUpFrom from "../../app/components/auth/signUpFrom/signUpFrom";
import Spacer from "../../app/components/UI/spacer/spacer";

export default function SignIn() {
    return (
        <div style={{ height: "100vh" }}>
            <Spacer size={"xl"} />
            <div
                className="main__wrapper"
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <SignUpFrom />
            </div>
        </div>
    );
}
