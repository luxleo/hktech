'use client';
//TODO : z-index 정리 필요하다. 24.09.10
// TODO: 3. 모바일, 데스크탑 따로 나누기
import {m} from "framer-motion";
import {createContext, useCallback, useContext, useRef, useState} from "react";
import {useMotionValueEvent, useScroll} from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import {PhoneNavBar} from "@/components/navbar/mobile_navbar";

export type Menu = {
    id: number;
    name: string;
    eng_name: string;
    link: string;
};

export type RootMenu = Menu & { sub_menu: Menu[]; };

export const menus: RootMenu[] = [
    {
        id: 1, name: "회사소개", link: "/about-us/greeting",eng_name: "about-us", sub_menu: [
            {id: 11, name: "인사말",eng_name: "greeting", link: "/about-us/greeting"},
            {id: 12, name: "경영이념",eng_name: "core_value", link: "/about-us/core_value"},
            {id: 13, name: "조직구조",eng_name: "organization", link: "/about-us/organization"},
            {id: 14, name: "연혁",eng_name: "history", link: "/about-us/history"},
        ]
    },
    {
        id: 2, name: "사업소개",eng_name: "businesses", link: "/businesses/domains", sub_menu: [
            {id: 21, name: "사업소개", eng_name: "domains",link: "/businesses/domains"},
            {id: 22, name: "프로젝트", eng_name: "projects",link: "/businesses/projects"},
        ]
    },
    {
        id: 3, name: "기술개발",eng_name: "rnd", link: "/rnd/licences", sub_menu: [
            {id: 31, name: "업·면허등록 현황",eng_name: "licences", link: "/rnd/licences"},
            {id: 32, name: "지적재산권",eng_name: "ipr_list", link: "/rnd/ipr_list"},
            {id: 33, name: "연구개발",eng_name: "rnds", link: "/rnd/rnds"},
        ]
    },
    {
        id: 4, name: "홍보센터", eng_name: "pr_center",link: "/pr_center/cis", sub_menu: [
            {id: 31, name: "CI소개",eng_name: "cis", link: "/pr_center/cis"},
        ]
    },
    {
        id: 5, name: "오시는길",eng_name: "location", link: "/location", sub_menu: [
            {id: 31, name: "오시는길",eng_name: "location", link: "/location"},
        ]
    },
];

interface NavBarContext {
    isFocused: boolean;
    changeIsFocused: (val: boolean) => void;
}

const initialNavBarContext : NavBarContext = {
    isFocused: false,
    changeIsFocused: () => {
    }
}
export const NavBarContext = createContext<NavBarContext>(initialNavBarContext);

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const {scrollY} = useScroll();
    const lastYRef = useRef(0);
    const myWindow = useRef(window);


    useMotionValueEvent(scrollY, "change", (y) => {
        const diff = y - lastYRef.current;
        if (diff > 10) {
            setIsScrolled(diff > 0);
            lastYRef.current = y;
        } else if (diff < 0 && y === 0) {
            setIsScrolled(false);
            lastYRef.current = y;
        }
    });

    const changeIsFocused = useCallback((value:boolean)=>{
        if(myWindow.current.innerWidth < 768) {
            return;
        };
        setIsFocused(value);
        }
        ,[])

    const logoImages = ['/hktech_logo.png', '/hktech_logo_black.png'];

    const NavBarContextValue: NavBarContext = {
        isFocused: isFocused,
        changeIsFocused: changeIsFocused,
    };
    return (
        <NavBarContext.Provider value={NavBarContextValue}>
            <div
                onMouseEnter={() => changeIsFocused(true)}
                onMouseLeave={() => changeIsFocused(false)}
            >
                <m.div
                    className={'fixed top-0 h-[95px] w-full z-50'}
                    initial={{background: 'white', height: '0px', opacity: 0}}
                    animate={isScrolled ? "bg-visible" : "bg-transparent"}
                    variants={{
                        "bg-visible": {
                            opacity: myWindow.current.innerWidth > 768 ? 0.8 : 0.95,
                            height: '95px'
                        },
                        "bg-transparent": {

                        }
                    }}
                >
                </m.div>
                <m.nav
                    className={'w-full fixed top-0 left-0 z-50'}
                    initial={{background: isScrolled? 'white' : 'none', height: '95px'}}
                    animate={isFocused ? "nav-visible" : "transparent"}
                    variants={{
                        "nav-visible": {
                            opacity: 1,
                            color: "black",
                            height: "300px"
                        },
                        "transparent": {
                            color: isScrolled ? "black" : "white",
                        height: "95px",
                    }
                    }}
                >
                        <div
                            className={'fixed top-[18px] left-[3%] w-[200px] h-[66px] z-50 hover:cursor-pointer'}
                        >
                            <div className={clsx('absolute top-0 left-0 w-[150px] xl:w-[200px] h-[66px]', {
                                'block': isScrolled || isFocused,
                                'hidden': !(isScrolled || isFocused)
                            })}>
                                <Link href={'/'} className={'w-full h-full'}>
                                    <Image
                                        src={logoImages[0]}
                                        fill
                                        alt={'logo'}
                                        sizes={'200px'}
                                        style={{
                                            objectFit: "contain"
                                        }}
                                        priority={true}
                                    />
                                </Link>
                            </div>
                            <div className={clsx('absolute top-0 left-0 w-[150px] xl:w-[200px] h-[66px]', {
                                'hidden': isScrolled || isFocused,
                                'block': !(isScrolled || isFocused)
                            })}>
                                <Link href={'/'} className={'w-full h-full'}>
                                    <Image
                                        src={logoImages[1]}
                                        fill
                                        alt={'logo'}
                                        sizes={'200px'}
                                        style={{
                                            objectFit: "contain"
                                        }}
                                        priority={true}
                                    />
                                </Link>
                            </div>
                        </div>
                    <m.div
                        className={'absolute w-full h-full z-20 bg-white'}
                        animate={isFocused ? "nav-visible" : "transparent"}
                        variants={{
                            "nav-visible": {
                                opacity: 0.9,
                            },
                            "transparent": {
                                opacity: 0,
                            }
                        }}
                    >
                    </m.div>
                    <MenuLargeContainer/>
                    <PhoneNavBar responsiveStlye={isScrolled? 'scroll-downed' : 'default'}/>
                </m.nav>
            </div>
        </NavBarContext.Provider>
    );
};


function MenuLargeContainer() {
    const navbarContext = useContext(NavBarContext);
    const [currentMenu, setCurrentMenu] = useState<string>("");

    const onMenuChangeHandler = useCallback((value: string) => {
        setCurrentMenu(value);
    },[])
    return (
        <ul className={'hidden md:flex justify-center z-40 relative'}>
            {navbarContext.isFocused && <div className={'absolute top-[95px] h-[1px] w-full bg-slate-300'}>
            </div>}
            {menus.map((el) => (
                <li key={`rootMenu-${el.id}`}
                           className={'relative px-[15px]'}
                           onMouseEnter={() => onMenuChangeHandler(el.name)}
                           onMouseLeave={()=> onMenuChangeHandler("")}
                >
                    <Link href={el.link}>
                        <m.div
                            // initial={{padding: "0 10px"}}
                            animate={navbarContext.isFocused ? 'focused' : "unfocused"}
                            variants={{
                                "focused": {
                                    padding: "0 30px 1px",
                                },
                                "unfocused": {
                                    padding: "0 10px 0px"
                                }
                            }}
                            className={clsx('h-[95px] text-[18px] flex items-center transition ease-in-out duration-400',{
                                'border-b-[2px] border-b-blue-700' : currentMenu === el.name
                            })}
                        >
                            {el.name}
                        </m.div>
                    </Link>
                    <ul className={clsx('absolute top-[95px] left-0 w-full pt-[1rem]', {
                        'hidden': !navbarContext.isFocused,
                        'block': navbarContext.isFocused
                    })}>
                        {el.sub_menu?.map((sub) => (
                            <li key={`sub-${sub.id}`}
                                className={clsx('w-full flex justify-center py-[.1rem] hover:text-blue-600 hover:font-bold', {
                                    'text-black': currentMenu === el.name,
                                    'text-slate-400': currentMenu !== el.name,
                                })}>
                                <Link href={sub.link}>
                                    {sub.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}



// function MenuList({menu}: { menu: RootMenu }) {
//     return (
//         <li>
//             <Link href={menu.link}>{menu.name}</Link>
//         </li>
//     );
// }