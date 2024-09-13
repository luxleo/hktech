'use client';
import clsx from "clsx";
import {useState} from "react";
import {useMotionValueEvent, useScroll} from "framer-motion";

export default function IndexBgImageRenderer() {
    const [imageIdx, setImageIdx] = useState<number>(0);``
    const pageHeight = window.innerHeight;
    const {scrollY} =useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest)
        if (latest < pageHeight * 3) {
            if(imageIdx === 1) setImageIdx(0);
            else {
                if(imageIdx === 0) setImageIdx(1);
            }
        }
    });
    return (
        <>
            <div className={clsx('fixed top-0 w-full md:h-[100vh] bg-red-700', {
                'opacity-100': imageIdx === 0,
                'opacity-0': imageIdx === 1
            })}>

            </div>
            <div className={clsx('fixed top-0 w-full md:h-[100vh] bg-emerald-500', {
                'opacity-100': imageIdx === 1,
                'opacity-0': imageIdx === 0
            })}>
            </div>
        </>
    )
};