'use client';
//TODO : z-index 정리 필요하다. 24.09.10
// TODO: 3. 모바일, 데스크탑 따로 나누기
import {motion,AnimatePresence} from "framer-motion";
import {createContext, useCallback, useContext, useRef, useState} from "react";
import {useMotionValueEvent, useScroll} from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

type Menu = {
    id: number;
    name: string;
    link: string;
};

type RootMenu = Menu & { sub_menu: Menu[]; };

const menus: RootMenu[] = [
    {
        id: 1, name: "회사소개", link: "/about-us/greeting", sub_menu: [
            {id: 11, name: "인사말", link: "/about-us/greeting"},
            {id: 12, name: "경영이념", link: "/about-us/greeting"},
            {id: 13, name: "조직구조", link: "/about-us/greeting"},
            {id: 14, name: "연혁", link: "/about-us/greeting"},
        ]
    },
    {
        id: 2, name: "사업소개", link: "/businesses/domains", sub_menu: [
            {id: 21, name: "사업소개", link: "/businesses/domains"},
            {id: 22, name: "프로젝트", link: "/businesses/projects"},
        ]
    },
    {
        id: 3, name: "기술개발", link: "/rnd/licences", sub_menu: [
            {id: 31, name: "업·면허등록 현황", link: "/rnd/licences"},
            {id: 32, name: "지적재산권", link: "/rnd/pr_list"},
            {id: 33, name: "연구개발", link: "/rnd/rnds"},
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

    const logoImages = ['/hktech_logo.png', '/hktech_logo_black.png'];

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
        setIsFocused(value);
        }
        ,[])

    const NavBarContextValue: NavBarContext = {
        isFocused: isFocused,
        changeIsFocused: changeIsFocused,
    };
    return (
        <NavBarContext.Provider value={NavBarContextValue}>
            <div
                onMouseEnter={() => changeIsFocused(true)}
                onMouseLeave={() => changeIsFocused(false)}>
                <motion.div
                    className={'fixed top-0 h-[95px] w-full'}
                    initial={{background: 'white', height: '0px', opacity: 0}}
                    animate={isScrolled ? "bg-visible" : "bg-transparent"}
                    variants={{
                        "bg-visible": {
                            opacity: 0.8,
                            height: '95px'
                        },
                        "bg-transparent": {

                        }
                    }}
                >

                </motion.div>
                <motion.nav
                    className={'w-full z-20 fixed top-0 left-0'}
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
                    <AnimatePresence>
                        <motion.div
                            className={'fixed top-[18px] left-[3%] w-[200px] h-[66px] z-40 hover:cursor-pointer'}
                            key={isScrolled || isFocused? 0 : 1}
                            variants={{
                                enter: {
                                        y: -20,
                                        opacity: 0
                                    },
                                center: {
                                    zIndex: 50,
                                    y: 0,
                                    opacity: 1
                                },
                                exit:  {

                                        y: 20,
                                        opacity: 0
                                    }
                            }}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                y: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                        >
                            <LogoImageSwitcher imageURL={logoImages[isScrolled || isFocused? 0 : 1]}/>
                        </motion.div>
                    </AnimatePresence>
                    <motion.div
                        className={'absolute w-full h-full z-20'}
                        animate={isFocused ? "nav-visible" : "transparent"}
                        variants={{
                            "nav-visible": {
                                opacity: 1,
                                background: 'white',
                            },
                            "transparent": {
                                opacity: 0,
                                background: 'white',
                            }
                        }}
                    >
                    </motion.div>
                    <MenuContainer/>
                </motion.nav>
            </div>
        </NavBarContext.Provider>
    );
};

function MenuContainer() {
    const navbarContext = useContext(NavBarContext);
    const [currentMenu, setCurrentMenu] = useState<string>("");

    const onMenuChangeHandler = useCallback((value: string)=>{
        setCurrentMenu(value);
    },[])
    return (
        <ul className={'flex justify-center z-40 relative'}>
            {navbarContext.isFocused && <div className={'absolute top-[95px] h-[1px] w-full bg-slate-300'}>
            </div>}
            {menus.map((el) => (
                <li key={`rootMenu-${el.id}`}
                           className={'relative px-[15px]'}
                           onMouseEnter={() => onMenuChangeHandler(el.name)}
                           onMouseLeave={()=> onMenuChangeHandler("")}
                >
                    <Link href={el.link}>
                        <motion.div
                            animate={navbarContext.isFocused ? 'focused' : "unfocused"}
                            variants={{
                                "focused": {
                                    padding: "0 30px 1px",
                                },
                                "unFocused": {
                                    padding: "0 15px"
                                }
                            }}
                            className={clsx('h-[95px] text-[18px] flex items-center transition ease-in-out duration-400',{
                                'border-b-[2px] border-b-blue-700' : currentMenu === el.name
                            })}
                        >
                            {el.name}
                        </motion.div>
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

function LogoImageSwitcher({imageURL}:{ imageURL: string;}) {
    return (
        <Link href={'/'} className={'absolute top-0 left-0 z-40 w-[200px] h-[66px] '}>
            <Image
                src={imageURL}
                fill
                alt={'logo'}
                sizes={'200px'}
                style={{
                    objectFit: "cover"
                }}
                priority={true}
            />
        </Link>
    )
}

// function MenuList({menu}: { menu: RootMenu }) {
//     return (
//         <li>
//             <Link href={menu.link}>{menu.name}</Link>
//         </li>
//     );
// }