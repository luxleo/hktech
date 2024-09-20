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
    const [imageIdx, setImageIdx] = useState<number>(0);
    const {scrollYProgress} =useScroll();
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest < 0.5) {
            if(imageIdx !== 0) setImageIdx(0);
        }else {
            if(imageIdx !== 1) setImageIdx(1);
        }
    });
    return (
        <>
            <div className={clsx('fixed top-0 w-full h-[100vh] bg-red-700 -z-10', {
                'block': imageIdx === 0,
                'hidden': imageIdx === 1
            })}>
                <Image src={'/landing_1.jpg'} alt={'landing page'}
                       sizes={'(max-width: 768px) 1500px, (max-width: 1200px) 2000px, 80vw'}
                       style={{
                           objectFit: "cover",
                       }}
                       fill={true}
                       className={'brightness-90'}
                >

                </Image>
            </div>
            <div className={clsx('fixed top-0 w-full h-[100vh] -z-10', {
                'block': imageIdx === 1,
                'hidden': imageIdx === 0
            })}>
                <Image src={'/landing_2.jpg'} alt={'landing page'}
                       sizes={'(max-width: 768px) 2000px, (max-width: 1200px) 2000px, 80vw'}
                       style={{
                           objectFit: "cover",
                       }}
                       fill={true}
                       className={'brightness-90'}
                >

                </Image>
            </div>
        </>
    );
};