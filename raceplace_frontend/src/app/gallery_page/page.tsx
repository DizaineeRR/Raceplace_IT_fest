import styles from './gallery_page.module.css'
import Image from 'next/image'
import Header from './components/Header/page'
import Main_Content from './components/Main_Content/page'
import Footer from './components/Footer/page'

export default function Gallery() {
    return(<>
        <div className={styles.wrapper}>
            <div className={styles.main_background}>
                <Header />
                <div className={styles.main_gallery_title}>
                    <img className={styles.gallery_title_miror} src="./Gallery_Title_Miror.svg" alt="" />
                    <h1 className={styles.gallery_title}>gallery</h1>
                </div>
            </div>
            <Main_Content />
            <Footer />
        </div>
    </>);
};
