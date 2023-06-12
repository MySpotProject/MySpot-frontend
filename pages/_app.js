import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../scss/index.scss";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
    const router = useRouter();
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const handleRouteChangeStart = () => {
            setIsAnimating(true);
        };

        const handleRouteChangeComplete = () => {
            setIsAnimating(false);
        };

        router.events.on("routeChangeStart", handleRouteChangeStart);
        router.events.on("routeChangeComplete", handleRouteChangeComplete);

        return () => {
            router.events.off("routeChangeStart", handleRouteChangeStart);
            router.events.off("routeChangeComplete", handleRouteChangeComplete);
        };
    }, [router]);

    const onAnimationComplete = () => {
        if (!isAnimating) {
            router.push(router.route);
        }
    };

    return (
        <>
            <Head>
                <script
                    src="https://api-maps.yandex.ru/3.0/?apikey=7066165f-a263-468f-9123-b4a3a32bdfb3&lang=ru_RU"
                    type="text/javascript"
                ></script>
            </Head>
            <Header />
            <AnimatePresence>
                <motion.div
                    key={router.route}
                    initial={{
                        zIndex: 10,
                        background: "white",
                        clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                    }}
                    animate={{
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    }}
                    exit={{
                        clipPath:
                            "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                    }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                    }}
                    onAnimationComplete={onAnimationComplete}
                >
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
            <ToastContainer
                position="bottom-left"
                autoClose={10000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Footer />
        </>
    );
}
