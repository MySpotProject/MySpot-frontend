import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Footer from "../app/layout/footer/footer";
import Header from "../app/layout/header/header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../styles/index.css";

export default function App({ Component, pageProps }) {
    const router = useRouter();
    return (
        <>
            <Header />
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    key={router.route}
                    initial="initialState"
                    animate="animateState"
                    exit="exitState"
                    transition={{
                        duration: 1,
                    }}
                    variants={{
                        initialState: {
                            backgroundColor: "white",
                            zIndex: 123,
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
