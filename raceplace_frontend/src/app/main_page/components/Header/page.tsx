import styles from './header.module.css'
import Image from 'next/image';


const Header_logo_img = () => (
    <div style={{}}>
        <Image
            src="/header_logo.svg"
            alt="raceplace_logo"
            layout="intrinsic"
            objectFit="contain" 
            width={70}
            height={53}
        />
    </div>
);

export default function Header(){
    return (<>
        <header className={styles.header}>
            <div className={styles.header_logo}>
                <Header_logo_img />
                <h1 className={styles.header_logo_title}>Raceplace</h1>
            </div>
            <nav className={styles.header_links}>
                <a href="#" className={styles.header_link} target="_blank" rel="noopener noreferrer">GAME LIST</a>
                <a href="#" className={styles.header_link} target="_blank" rel="noopener noreferrer">MARKET</a>
                <a href="#" className={styles.header_link} target="_blank" rel="noopener noreferrer">GALLERY</a>
            </nav>
        </header>
    </>
);
};