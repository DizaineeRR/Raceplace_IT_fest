import styles from './main_content.module.css'
import Image from 'next/image';


const Page_nav_1 = () => (
    <div style={{}}>
        <Image
            src="/page_nav_img.svg"
            alt="nav_arrow"
            layout="intrinsic"
            objectFit="contain" 
            width={46}
            height={24}
        />

    </div>
);

const Page_nav_2 = () => (
    <div style={{}}>
        <Image
            src="/page_nav_img1.svg"
            alt="nav_arrow"
            layout="intrinsic"
            objectFit="contain" 
            width={46}
            height={24}
        />

    </div>
);

const Page_nav_number_1 = () => (
    <div style={{}}>
        <Image
            src="/page_nav_number_1.svg"
            alt="nav_number"
            layout="intrinsic"
            objectFit="contain" 
            width={35}
            height={38}
        />
    </div>
);

const Page_nav_number_11 = () => (
    <div style={{}}>
        <Image
            src="/page_nav_number_1(1).svg"
            alt="nav_number"
            layout="intrinsic"
            objectFit="contain" 
            width={35}
            height={38}
        />
    </div>
);


const Page_nav_number_2 = () => (
    <div style={{}}>
        <Image
            src="/page_nav_number_2(2).svg"
            alt="nav_number"
            layout="intrinsic"
            objectFit="contain" 
            width={35}
            height={38}
        />
    </div>
);
const Page_nav_number_3 = () => (
    <div style={{}}>
        <Image
            src="/page_nav_number_3(3).svg"
            alt="nav_number"
            layout="intrinsic"
            objectFit="contain" 
            width={35}
            height={38}
        />
    </div>
);
const Page_nav_number_4 = () => (
    <div style={{}}>
        <Image
            src="/page_nav_number_4(4).svg"
            alt="nav_number"
            layout="intrinsic"
            objectFit="contain" 
            width={35}
            height={38}
        />
    </div>
);

export default function Main_content() {
    return (<>
        <div className={styles.main_background}>
            <main className={styles.main}>
                <figure style={{marginTop: 0}} className={`${styles.main_block_second} ${styles.main_block_1}`}>
                    <div className={styles.main_block_1_div}>
                        <h5  className={`${styles.main_block_title} ${styles.main_block_title_1}`}>asseta corsa compitizone</h5>
                        <figcaption className={styles.main_block_text}>Race Simulator</figcaption>
                    </div>
                </figure>
                <div className={styles.main_blocks_1}>
                    <figure className={`${styles.main_block} ${styles.main_block_2}`}>
                        <h5  className={`${styles.main_block_title} ${styles.main_block_title_2}`}>Forza Motorsport</h5>                    
                    </figure>
                    <figure className={`${styles.main_block} ${styles.main_block_3}`}>
                        <div className={styles.main_block_1_div}>
                        <h5  className={`${styles.main_block_title} ${styles.main_block_title_1}`}>The Crew 2</h5>
                        <figcaption className={styles.main_block_text}>Race Arcade</figcaption>
                        </div>
                    </figure>
                </div>
                <div className={styles.main_blocks_1}>
                    <figure className={`${styles.main_block_second} ${styles.main_block_4}`}>
                        <div className={styles.main_block_2_div}>
                            <h5  className={`${styles.main_block_title} ${styles.main_block_title_1}`}>Forza Horizon 5</h5>
                            <figcaption className={styles.main_block_text_2_div}>Freemap - Race Arcade</figcaption>
                        </div>
                    </figure>
                    <figure className={`${styles.main_block} ${styles.main_block_5}`}>
                        <div>
                            <h5  className={`${styles.main_block_title} ${styles.main_block_title_1}`}></h5>
                            <figcaption className={styles.main_block_text_1}>Gran Turismo 7</figcaption>
                        </div>
                    </figure>
                </div>
                <div className={styles.main_page_nav}>
                    <a href="#" target="_blank" rel="noopener noreferrer"><Page_nav_1 /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><Page_nav_number_11 /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><Page_nav_number_2 /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><Page_nav_number_3 /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><Page_nav_2 /></a>
                </div>
            </main>
        </div>
    </>);
};