"use client";

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/navbar";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {

    const pathName = usePathname();

    return (
        <AnimatePresence mode='wait'>
            <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
                <motion.div className="w-screen h-screen fixed bg-black rounded-b-[100px] z-40"
                    animate={{ height: '0vh' }}
                    exit={{ height: '140vh' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                />
                <motion.div
                    className="fixed m-auto right-0 bottom-0 left-0 top-0 text-white 
                    text-8xl z-50 w-fit h-fit"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    {pathName.substring(1)}
                </motion.div>
                <motion.div className="w-screen h-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
                    initial={{ height: "140vh" }}
                    animate={{ height: '0vh', transition: { delay: 0.5 } }}
                />
                <div className="h-24">
                    <Navbar />
                </div>
                <div className="h-[calc(100vh-6rem)]">{children}</div>
            </div>
        </AnimatePresence>
    );
};

export default TransitionProvider;
