import styles from './main_page.module.css';
import Header from './components/Header/page'; // Проверьте, что компоненты правильно экспортируются
import MainInfo from './components/Main_Info/page';
import Footer from './components/Footer/page';
import Content_cards from './components/Main_Content/page';
import Image from 'next/image';

export default function Main_page() {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.main_background}>
                <Header/>
                <MainInfo/>
            </div>
            <main className={styles.main}>
                <Content_cards/>
            </main>
            <Footer/>
        </div>
    </>
    );
}
