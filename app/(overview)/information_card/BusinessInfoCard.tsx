'use client';
import InfoCardRoot from "@/app/(overview)/information_card/InfoCardRoot";
import {m} from "framer-motion";
import {useState} from "react";
import Link from "next/link";

export type BusinessLink = {
    departmentName: string;
    link: string;
}
export default function BusinessInfoCard ({title,description,businessLinks}:{
    title: string;
    description: string;
    businessLinks: BusinessLink[];
}) {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    return (
        <div className={'w-full h-full'}
             onMouseEnter={() => setIsFocused(true)}
             onMouseLeave={() => setIsFocused(false)}
        >
            <InfoCardRoot title={title}>
                <div className={'flex flex-col w-full mt-[5%]'}>
                    <div
                        className={'w-full mt-6 text-slate-500 group-hover:text-inherit text-[16px] flex justify-center items-start z-[2]'}>
                        {description}
                    </div>
                    <m.div className={'flex flex-col w-full'}
                           initial={{opacity: 0}}
                           animate={isFocused ? "focused" : 'not_focused'}
                           variants={{
                               'not_focused': {
                                   opacity: 0
                               },
                               'focused': {
                                   opacity: 1
                               }
                           }}
                    >
                        <div className={'w-full mt-[.5vw] flex justify-center hover:bg-emerald-500'}>
                        </div>
                        <m.div className={'w-full grid grid-cols-2 mt-[1vw]'}
                               animate={isFocused ? "focused" : 'not_focused'}
                               variants={{
                                   'not_focused': {
                                       scaleY: 0
                                   },
                                   'focused': {
                                       scaleY: 1
                                   }
                               }}
                        >
                            {businessLinks.map(el => (
                                <div key={`departments_link_${el.departmentName}`}
                                     className={'text-[.8rem] z-[2] flex justify-center items-center'}>
                                    <div
                                        className={'flex justify-center items-center py-2 w-full shadow-black hover:bg-[#111114]/[.8]'}>
                                        <Link href={el.link}>
                                            {el.departmentName}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </m.div>
                    </m.div>
                </div>
            </InfoCardRoot>
        </div>

    );
};