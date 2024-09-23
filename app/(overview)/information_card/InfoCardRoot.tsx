import styles from './businessInfoCard.module.scss';
export default function InfoCardRoot({title,children}:{
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className={`${styles.card_container}`}>
            <div className={`${styles.card} w-[240px] group`}>
                {/*<h4>Products</h4>*/}
                <div className={'text-white group-hover:text-emerald-400 text-[1.4rem] relative z-[2]'}>
                    {title}
                </div>
                {children}
                <div className={`${styles.shine}`}></div>
                <div className={`${styles.background}`}>
                    <div className={`${styles.tiles}`}>
                        <div className={`${styles.tile} ${styles.tile_1}`}></div>
                        <div className={`${styles.tile} ${styles.tile_2}`}></div>
                        <div className={`${styles.tile} ${styles.tile_3}`}></div>
                        <div className={`${styles.tile} ${styles.tile_4}`}></div>

                        <div className={`${styles.tile} ${styles.tile_5}`}></div>
                        <div className={`${styles.tile} ${styles.tile_6}`}></div>
                        <div className={`${styles.tile} ${styles.tile_7}`}></div>
                        <div className={`${styles.tile} ${styles.tile_8}`}></div>

                        <div className={`${styles.tile} ${styles.tile_9}`}></div>
                        <div className={`${styles.tile} ${styles.tile_10}`}></div>
                    </div>

                    <div className={`${styles.line} ${styles.line_1}`}></div>
                    <div className={`${styles.line} ${styles.line_2}`}></div>
                    <div className={`${styles.line} ${styles.line_3}`}></div>
                </div>
            </div>
        </div>
    )
};