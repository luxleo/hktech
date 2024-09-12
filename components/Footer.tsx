'use client';
import Image from "next/image";
import {locationData} from "@/data/location";
import Link from "next/link";
import {useState} from "react";
import clsx from "clsx";


export default function Footer() {
    return (
        <div className={'w-full flex flex-col md:flex-row h-[25vh] md:h-[20vh] bg-neutral-800 items-center md:px-[5%] md:text-sm'}>
            <div
                className={'grow order-2 md:order-1 md:basis-0 flex text-xs md:text-sm flex-col text-neutral-300 md:items-start md:justify-start'}>
                <div className={'flex gap-x-4'}>
                    <div className={'w-5'}>Adr</div>
                    <div>{`${locationData[1].streetAddress} ${locationData[1].buildingInfo}`}</div>
                </div>
                <div className={'flex gap-x-4'}>
                    <div className={'w-5'}>Tel</div>
                    <div>051-583-3317</div>
                </div>
                <div className={'flex gap-x-4'}>
                    <div className={'w-5'}>Fax</div>
                    <div>0504-846-3333</div>
                </div>
            </div>
            <div className={'grow order-1 md:order-2 md:basis-0 flex md:flex-col items-center'}>
                <div className={'md:w-[250px] xl:w-[300px] w-[50vw] flex items-center'}>
                    <Image className={'w-full'} src={"/hktech_logo.png"} alt={"company logo"} width={300}
                           height={300}
                           priority={true}/>
                </div>
            </div>
            <div className={'grow order-3 md:basis-0 flex flex-col items-end gap-y-2'}>
                {/*<div></div>*/}
                <FamilyPageSelector/>
                <div className={'text-xs md:text-md text-neutral-300'}>copyright ⓒ HK E&C. All right Reserved.</div>
            </div>
        </div>
    )
};

function FamilyPageSelector() {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    return (
        <div
            className={'relative w-[250px] py-3 px-4 bg-black text-white flex justify-center items-center text-[1.1rem] font-semibold hover:cursor-pointer select-none hover:shadow-inner hover:shadow-slate-300'}
            onMouseEnter={() => setIsFocused(true)}
            onMouseLeave={()=> setIsFocused(false)}
            onClick={()=> setIsFocused(prev => !prev)}
        >
            Family site
            <div className={clsx('absolute bottom-full', {
                'hidden': !isFocused,
                'block w-full': isFocused
            })}>
                <div className={'flex justify-center items-center w-full bg-white text-slate-500 hover:text-black text-[1.1rem] py-3 hover:cursor-pointer select-none'}>
                    <Link href={'https://www.hkencdev.co.kr'} target={'_blank'}>
                        주) 에이치케이이앤씨
                    </Link>
                </div>
            </div>
            <div className={clsx('absolute right-[10px] bottom-[calc(50%-5px)] rounded-full w-[10px] h-[6px]',{
                'animate-pulse bg-emerald-300' : !isFocused,
                'bg-emerald-400' : isFocused
            })}>

            </div>
        </div>
    );
}