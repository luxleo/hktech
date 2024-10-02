"use client";
import React, { useEffect, useState } from "react";
import styles from './typingeffect.module.css';

type TypingEffectProps = {
    texts: string[];
};

export default function TypingEffect({ texts }: TypingEffectProps) {
    const [displayText, setDisplayText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const typingDelay = 30;
    const deletingDelay = 15;
    const endDelay = 1900;

    useEffect(() => {
        const currentText = texts[textIndex];
        let timer: NodeJS.Timeout;

        const typeChar = () => {
            setDisplayText(currentText.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
        };

        const deleteChar = () => {
            setDisplayText(currentText.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
        };

        if (!isDeleting && charIndex < currentText.length) {
            timer = setTimeout(typeChar, typingDelay);
        } else if (isDeleting && charIndex > 0) {
            timer = setTimeout(deleteChar, deletingDelay);
        } else if (isDeleting) {
            setIsDeleting(false);
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        } else {
            timer = setTimeout(() => setIsDeleting(true), endDelay);
        }
        return () => clearTimeout(timer);
    }, [texts, textIndex, charIndex, isDeleting]);

    return (
        <div className={'h-[2rem] text-slate-300 text-[1.1rem] md:text-[1.5rem] flex items-center'}>
            {displayText} <div className={`${styles.anim_typewriter} w-[2px] h-[1.5rem] bg-gray-400`}></div>
        </div>
    );
}