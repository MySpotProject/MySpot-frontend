"use client";
import DefaultButton from "../app/components/UI/defaultButton/defaultButton";
import Spacer from "../app/components/UI/spacer/spacer";
import { useRouter } from "next/router";
import Image from "next/image";
export default function HomePage() {
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        router.push("/signup");
    };

    return (
        <>
            <div className="main__wrapper">
                <Spacer size={"xl"} />
                <DefaultButton handleClick={handleClick} type={"default"}>
                    THE LUPPA
                </DefaultButton>
            </div>
        </>
    );
}

// export async function getServerSideProps() {
//     const res = axios.get(process.env.NEXT_PUBLIC_API + "/auth/sign_in");
//     const data = await res.data;
//     console.log(data);

//     return { props: { data } };
// }
