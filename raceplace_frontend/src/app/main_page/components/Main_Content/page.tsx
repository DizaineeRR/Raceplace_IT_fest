import styles from './content_cards.module.css';
import Image from 'next/image';

const Main_card_image = () => (
    <div style={{}}>
        <Image
            src="/Card_line.svg"
            alt="MainCard_image1"
            layout="intrinsic"
            objectFit="contain" 
            width={418}
            height={3}
        />
    </div>
);


export default function Content_card1(){
    return ( <>
    <div className={`${styles.card_background} ${styles.card_background_1}`}>
        <figure style={{marginLeft: 110}} className={styles.card_texts}>
            <h4 className={styles.card_text}>the forza motorsport series's</h4>
            <Main_card_image />
            <p style={{maxWidth: 380}} className={styles.card_text}>"an impeccable series of high-quality implemented simulators"</p>
        </figure>
    </div>
    <div className={`${styles.card_background} ${styles.card_background_2}`}>
        <figure style={{marginLeft: 900}} className={styles.card_texts}>
            <h4 className={styles.card_text}>the crew MOTORFEST</h4>
            <Main_card_image />
            <p className={styles.card_text}>"The open world and diversity are all yours"</p>
        </figure>
    </div>
    <div className={`${styles.card_background} ${styles.card_background_3}`}>
        <figure style={{marginLeft: 110}} className={styles.card_texts}>
            <h4 className={styles.card_text}>assetto corsa competizione</h4>
            <Main_card_image />
            <p className={styles.card_text}>"real teams and pilots on legendary tracks."</p>
        </figure>
    </div>
    <div className={`${styles.card_background} ${styles.card_background_4} ${styles.card_4}`}>
            <h4 className={styles.card_4_text}>explore the others</h4>
    </div>
    </>
    );
};