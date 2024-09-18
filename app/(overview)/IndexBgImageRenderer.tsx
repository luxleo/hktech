'use client';
import clsx from "clsx";
import Image from 'next/image';
import {useState} from "react";
import {useMotionValueEvent, useScroll} from "framer-motion";

/**
 * index 페이지에서 배경 고정 배경이미지 섹션을 만들기 위함.
 * 현재 전략: 배경 z-index를 -20으로 주고 컨텐츠를 -10으로 통일 해주기.
 * @constructor
 */
export default function IndexBgImageRenderer() {
    const [imageIdx, setImageIdx] = useState<number>(0);``
    const pageHeight = window.innerHeight;
    const {scrollY} =useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest)
        if (latest < pageHeight * 3) {
            if(imageIdx !== 0) setImageIdx(0);
        }else {
            if(imageIdx !== 1) setImageIdx(1);
        }
    });
    return (
        <>
            <div className={clsx('fixed top-0 w-full md:h-[100vh] bg-red-700 -z-10', {
                'block': imageIdx === 0,
                'hidden': imageIdx === 1
            })}>
                <Image src={'/landing_1.jpg'} alt={'landing page'}
                       sizes={'80vw'}
                       fill={true}
                >

                </Image>
            </div>
            <div className={clsx('fixed top-0 w-full md:h-[100vh] bg-emerald-500 -z-10', {
                'block': imageIdx === 1,
                'hidden': imageIdx === 0
            })}>

            </div>
        </>
    )
};