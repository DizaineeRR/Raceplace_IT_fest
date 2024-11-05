import styles from './main_info.module.css'
import Image from 'next/image';


const Main_Info_Img = () => (
    <div style={{}}>
        <Image
            src="/maininfo_underline.svg"
            alt="Maininfo_underline.svg"
            layout="intrinsic"
            objectFit="contain" 
            width={397}
            height={24}
        />
    </div>
);

export default function Main_Info() {
    return (<>
        <main className={styles.maininfo}>
            <div className={styles.maininfo_titles}>
                <h3 className={`${styles.main_text_pattern} ${styles.maininfo_title}`}>race.</h3>
                <h3 className={`${styles.main_text_pattern} ${styles.maininfo_title}`}>cars.</h3>
                <h3 className={`${styles.main_text_pattern} ${styles.maininfo_title}`}>explore.</h3>
                <Main_Info_Img />
            </div>
            <p className={styles.maininfo_text}>reviews, races, news, exciting pictures, discussions and more</p>
            <div className={styles.maininfo_buttons}>
                <div className={styles.maininfo_button_div}><a className={`${styles.main_text_pattern} ${styles.maininfo_button}`}rel="noopener noreferrer">explore</a></div>
                <div className={styles.maininfo_button_div}><a className={`${styles.main_text_pattern} ${styles.maininfo_button}`} rel="noopener noreferrer">enjoy</a></div>
            </div>
        </main>
    </>
    );
};
