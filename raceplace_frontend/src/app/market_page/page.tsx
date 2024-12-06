import styles from './news_page.module.css';
import Image from 'next/image';
import Header from './components/Header/page';
import Main_content from './components/Main_Content/page';
import Footer from './components/Footer/page';



export default function news_page(){
    return (<>
        <div className={styles.container}>
            <div className={`${styles.main_background} ${styles.main_background_1}`}>
                <Header />
                <h1 style={{marginTop: 145, marginLeft: 70}} className={styles.page_title}>MARKET</h1>
            </div>
            <Main_content />
            <Footer />
        </div>
    </>);
};