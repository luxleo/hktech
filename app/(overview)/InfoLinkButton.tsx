'use client';
import {IconContext} from "react-icons";
import { FaLink } from "react-icons/fa";
import styles from './infoLinkButton.module.css';

export default function InfoLinkButton() {
    return (
        <div className={'rounded-full bg-white p-[calc(10px+0.4vw)] bg-opacity-75 mt-[calc(20px+0.3vw)] hover:bg-opacity-90 hover:cursor-pointer'}>
            <IconContext.Provider value={{
                color: 'green',
                className: `${styles.link_button}`
            }}>
                <div>
                    <FaLink/>
                </div>
            </IconContext.Provider>
        </div>
    )
};