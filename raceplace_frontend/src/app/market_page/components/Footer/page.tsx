import styles from './footer.module.css'
import Image from 'next/image';

const Footer_logo1 = () => (
    <div style={{margin: 10}}>
        <Image
            src="/Company_logo 1.svg"
            alt="kunossimulazione-logo"
            layout="intrinsic"
            objectFit="contain" 
            width={177}
            height={98}
        />
    </div>
);

const Footer_logo2 = () => (
    <div style={{margin: 10}}>
        <Image
            src="/Company_logo 2.svg"
            alt="ivorytower-logo"
            layout="intrinsic"
            objectFit="contain" 
            width={129}
            height={86}
        />
    </div>
);

const Footer_logo3 = () => (
    <div style={{margin: 10}}>
        <Image
            src="/Company_logo_F1.svg"
            alt="forza-logo"
            layout="intrinsic"
            objectFit="contain" 
            width={171}
            height={81}
        />
    </div>
);

const Footer_logo4 = () => (
    <div style={{margin: 10}}>
        <Image
            src="/Company_logo_F2.svg"
            alt="playground-logo"
            layout="intrinsic"
            objectFit="contain" 
            width={88}
            height={93}
        />
    </div>
);

const Footer_logo5 = () => (
    <div style={{margin: 10}}>
        <Image
            src="/Company_logo_F3.svg"
            alt="turn10studios-logo"
            layout="intrinsic"
            objectFit="contain" 
            width={88}
            height={93}
        />
    </div>
);

const Footer_logo6 = () => (
    <div style={{margin: 10}}>
        <Image
            src="/header_logo.svg"
            alt="raceplace_logo"
            layout="intrinsic"
            objectFit="contain" 
            width={60}
            height={40}
        />
    </div>
);

const Footer_logo7 = () => (
    <div style={{margin: 10}}>
        <Image
            src="/Company_logo 3.svg"
            alt="ubisoft-logo"
            layout="intrinsic"
            objectFit="contain" 
            width={177}
            height={173}
        />
    </div>
);

const Footer_logo8 = () => (
    <div style={{margin: 10}}>
        <Image
            src="/Company_logo 4.svg"
            alt="polyphonydigital-logo"
            layout="intrinsic"
            objectFit="contain" 
            width={470}
            height={85}
        />
    </div>
);

const Footer_logo9 = () => (
    <div style={{margin: 10}}>
        <Image
            src="/Company_logo 5.svg"
            alt="slighlymadstudios-logo"
            layout="intrinsic"
            objectFit="contain" 
            width={442}
            height={97}
        />
    </div>
);

export default function Footer(){
    return (<>
    <footer className={styles.footer}>
        <div className={styles.footer_logos}>
            <div className={styles.footer_logo_div}>
                <Footer_logo1 />                
                <Footer_logo2 /> 
            </div>
            <div className={styles.footer_logo_div}>
                <Footer_logo3 />    
                <div className={styles.footer_logo_forza}>
                    <Footer_logo4 />                
                    <Footer_logo5 /> 
                </div>
            </div>
            <div className={styles.footer_logo_div}>
                <Footer_logo6 />                
                <Footer_logo7 /> 
            </div>
            <div className={styles.footer_logo_div}>
                <Footer_logo8 />                
                <Footer_logo9 /> 
            </div>
        </div> 
        <div className={styles.footer_nav}>
                <a className={styles.footer_links} href="#" target="_blank" rel="noopener noreferrer">contacts</a>
                <a className={styles.footer_links} href="#" target="_blank" rel="noopener noreferrer">privacy</a>
                <a className={styles.footer_links} href="#" target="_blank" rel="noopener noreferrer">support</a>
        </div>
    </footer>
    </>
    );
};