import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../scss/index.scss";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";

export default function App({ Component, pageProps }) {
    const router = useRouter();

    return (
        <>
            <Head>
                <script
                    src="https://api-maps.yandex.ru/3.0/?apikey=7066165f-a263-468f-9123-b4a3a32bdfb3&lang=ru_RU"
                    type="text/javascript"
                ></script>
            </Head>
            <Header />
            <AnimatePresence mode="wait">
                <motion.div
                    key={router.route}
                    initial="initialState"
                    animate="animateState"
                    exit="exitState"
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                    }}
                    variants={{
                        initialState: {
                            zIndex: 10,
                            background: "white",
                            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                        },
                        animateState: {
                            clipPath:
                                "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                        },
                        exitState: {
                            clipPath:
                                "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                        },
                    }}
                >
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
            <ToastContainer
                position="bottom-left"
                autoClose={2000}
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
