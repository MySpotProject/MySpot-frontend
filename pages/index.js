import DefaultButton from "../app/components/UI/defaultButton/defaultButton";
import Spacer from "../app/components/UI/spacer/spacer";
import { useRouter } from "next/router";

function HomePage() {
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

export default HomePage;
