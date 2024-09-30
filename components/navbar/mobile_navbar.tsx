'use client';

import {Dispatch, SetStateAction, useState} from "react";
import Link from "next/link";

import {RxHamburgerMenu} from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import clsx from "clsx";

import './navbar_style.css';


import {IconContext} from "react-icons";
import {menus as links, Menu, RootMenu} from "@/components/navbar/NavBar";

export function PhoneNavBar({responsiveStlye}:{
    responsiveStlye: string
}) {
    const [isPopup, setIsPopUp] = useState<boolean>(false);

    return (
        <div className={clsx("relative flex justify-end md:hidden w-full max-h-[96px] h-[10vh] pr-[5%] py-2 text-sm shadow-sm",
            {
                'bg-none': responsiveStlye == 'scroll-downed',
                'text-white': responsiveStlye == 'default',
            })}>
            <section className={"grow-[0.2] flex items-center justify-end gap-8"}>
                <div className={clsx(
                    'block shadow-md rounded-md p-1 z-[60]',
                    {
                        'shadow-xl' : !isPopup
                    }
                ) }
                     onClick={() => {
                         setIsPopUp(!isPopup);
                     }}>
                    {isPopup? <IconContext.Provider value={{color: 'white'}}>
                            <GrClose fill={'white'} className={'min-h-[20px] min-w-[20px] aspect-[1/1]'}/>
                        </IconContext.Provider>:
                        <IconContext.Provider value={{color: responsiveStlye == 'default'? 'white' : 'black'}}>
                            <RxHamburgerMenu className={'min-h-[20px] min-w-[20px] aspect-[1/1]'}/>
                        </IconContext.Provider>
                    }

                </div>
            </section>

            {/*    side nav pop up*/}
            {isPopup && <PopUpRootLayout setIsPopUp={setIsPopUp}/>}
        </div>
    );
}

function PopUpRootLayout({setIsPopUp}:{
    setIsPopUp: Dispatch<SetStateAction<boolean>>;
}){
    return (
        <section className={'absolute right-0 top-0 z-50 w-full min-h-screen backdrop-blur flex justify-end'}>
            <div className={`PopUpWrapper flex flex-col w-[80%] rounded-l-xl bg-gradient-to-tr from-neutral-700 to-neutral-800`}>
                <div className={'h-[10vh] max-h-[80px]'}>

                </div>
                <div className={'max-h-[80vh] flex flex-col grow overflow-y-scroll'} >
                    {links.map((mainLink) => (
                        <MainNavLink key={`${mainLink.id}-${mainLink.name}`} mainLink={mainLink} setIsPopUp={setIsPopUp}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

function MainNavLink({mainLink,setIsPopUp}:{
    mainLink: RootMenu;
    setIsPopUp: Dispatch<SetStateAction<boolean>>;
}){
    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
        <div
            className={"flex flex-col items-start justify-center pl-4 pb-3 text-neutral-50 text-[1.3rem] font-semibold"}
            onClick={() => {
                setIsFocused(prev => !prev);
            }}>
            <div className={`relative`}>
                    <span className={clsx('link_hover_mobile', {
                        'active_link_hover': isFocused
                    })}>
                        {mainLink.name}
                    </span>
            </div>
            <ul className={'pl-6 mt-3 overflow-x-hidden'}>
                {isFocused && mainLink.sub_menu?.map((subLink) => (
                    <SubNavLink key={subLink.name} subLink={subLink} mainLink={mainLink}
                                setIsPopUp={setIsPopUp}/>
                ))}
            </ul>
        </div>
    );
}

function SubNavLink({subLink, mainLink, setIsPopUp}: {
    subLink: Menu;
    mainLink: RootMenu;
    setIsPopUp: Dispatch<SetStateAction<boolean>>
}) {

    return (
        <li className={'text-[1rem] text-neutral-50 py-[.43rem] font-light sub_nav'}
            onClick={() => {
                setIsPopUp(false);
            }}>
            <Link href={{
                pathname: subLink.link,
                query: {
                    mainLinkName: mainLink.name,
                    subLinkName: subLink.name
                }
            }}
            >
                {subLink.name}
            </Link>
        </li>
    );
}