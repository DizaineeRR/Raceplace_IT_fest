import styles from './main_content.module.css'
import Image from 'next/image';

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

export default function Main_content() {
    return (<>
        <div className={styles.main_background}>
            <main className={styles.main}>
                <h2 className={styles.main_title}>choose your certificate</h2>
                <div className={styles.main_content_blocks}>
                    <div className={styles.content_block_div}>
                        <div className={styles.content_block}>
                            <h4 className={`${styles.content_block_title} ${styles.content_block_title_1}`}><a href="#">Certificate for 25$</a></h4>
                        </div>
                        <div className={styles.content_block}>
                            <h4 className={`${styles.content_block_title} ${styles.content_block_title_2}`}><a href="#">Certificate for 50$</a></h4>
                        </div>
                    </div>
                    <div className={styles.content_block_div}>
                        <div className={styles.content_block}>
                            <h4 className={`${styles.content_block_title} ${styles.content_block_title_3}`}><a href="#">Certificate for 75$</a></h4>
                        </div>
                        <div className={styles.content_block}>
                            <h4 className={`${styles.content_block_title} ${styles.content_block_title_4}`}><a href="#">Certificate for 100$</a></h4>
                        </div>
                    </div>
                    <div className={styles.content_button_div}>
                        <h3 className={styles.content_button}> <a href="2">make your certificate</a></h3>
                    </div>
                </div>
            </main>
        </div>
    </>);
};