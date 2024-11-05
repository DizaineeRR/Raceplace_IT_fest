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
                    <div>
                        <h5  className={`${styles.main_block_title} ${styles.main_block_title_1}`}>asseta corsa compitizone</h5>
                        <figcaption className={styles.main_block_text}>asseta corsa compitizone</figcaption>
                    </div>
                </figure>
                <div className={styles.main_blocks_1}>
                    <figure className={`${styles.main_block} ${styles.main_block_2}`}>
                        <h5  className={`${styles.main_block_title} ${styles.main_block_title_2}`}>topic new</h5>                    
                    </figure>
                    <figure className={`${styles.main_block} ${styles.main_block_3}`}>
                        <div>
                        <h5  className={`${styles.main_block_title} ${styles.main_block_title_1}`}>topic new</h5>
                        <figcaption className={styles.main_block_text}>game name</figcaption>
                        </div>
                    </figure>
                </div>
                <div className={styles.main_blocks_1}>
                    <figure className={`${styles.main_block_second} ${styles.main_block_4}`}>
                        <div>
                            <h5  className={`${styles.main_block_title} ${styles.main_block_title_1}`}>topic new</h5>
                            <figcaption className={styles.main_block_text}>asseta corsa compitizone</figcaption>
                        </div>
                    </figure>
                    <figure className={`${styles.main_block} ${styles.main_block_5}`}>
                        <div>
                            <h5  className={`${styles.main_block_title} ${styles.main_block_title_1}`}>topic new</h5>
                            <figcaption className={styles.main_block_text}>forza horizon 4</figcaption>
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