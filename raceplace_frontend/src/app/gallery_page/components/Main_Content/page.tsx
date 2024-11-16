"use client";

import styles from './main_content.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Gallery_FH5_Image = () => (
    <div style={{}}>
        <Image
            src="/Gallery_FH5_Image.svg"
            alt="Gallery_FH5_Image"
            layout="intrinsic"
            objectFit="contain" 
            width={1015}
            height={539}
        />
    </div>
);


const Gallery_TCM_Image = () => (
    <div style={{}}>
        <Image
            src="/Gallery_TCM_Image.svg"
            alt="Gallery_TCM_Image"
            layout="intrinsic"
            objectFit="contain" 
            width={925}
            height={550}
        />
    </div>
);

const Gallery_NFSRivals_Image = () => (
    <div style={{}}>
        <Image
            src="/Gallery_NFSRivals_Image.svg"
            alt="Gallery_NFSRivals_Image"
            layout="intrinsic"
            objectFit="contain" 
            width={1366}
            height={736}
        />
    </div>
);

const Gallery_NFSHeat_Image1 = () => (
    <div style={{}}>
        <Image
            src="/Gallery_NFSHeat_Image1.svg"
            alt="Gallery_NFSHeat_Image1"
            layout="intrinsic"
            objectFit="contain" 
            width={874}
            height={410}
        />
    </div>
);

const Gallery_NFSHeat_Image2 = () => (
    <div style={{}}>
        <Image
            src="/Gallery_NFSHeat_Image2.svg"
            alt="Gallery_NFSHeat_Image2"
            layout="intrinsic"
            objectFit="contain" 
            width={952}
            height={465}
        />
    </div>
);

const Gallery_NFSHeat_Image3 = () => (
    <div style={{}}>
        <Image
            src="/Gallery_NFSHeat_Image3.svg"
            alt="Gallery_NFSHeat_Image3"
            layout="intrinsic"
            objectFit="contain" 
            width={874}
            height={579}
        />
    </div>
);
const Gallery_GT7_Image = () => (
    <div style={{}}>
        <Image
            src="/Gallery_GT7_Image.svg"
            alt="Gallery_GT7_Image"
            layout="intrinsic"
            objectFit="contain" 
            width={1388}
            height={844}
        />
    </div>
);

const Gallery_NFSHeat_IMGtext1 = () => (
    <div style={{}}>
        <Image
            src="/Gallery_NFSHeat_IMGtext1.svg"
            alt="Gallery_NFSHeat_IMGtext1"
            layout="intrinsic"
            objectFit="contain" 
            width={387}
            height={90}
        />
    </div>
);

const Gallery_NFSHeat_IMGtext2 = () => (
    <div style={{}}>
        <Image
            src="/Gallery_NFSHeat_IMGtext2.svg"
            alt="Gallery_NFSHeat_IMGtext2"
            layout="intrinsic"
            objectFit="contain" 
            width={258}
            height={95}
        />
    </div>
);

const Gallery_NFSHeat_IMGtext3 = () => (
    <div style={{}}>
        <Image
            src="/Gallery_NFSHeat_IMGtext3.svg"
            alt="Gallery_NFSHeat_IMGtext3"
            layout="intrinsic"
            objectFit="contain" 
            width={405}
            height={454}
        />
    </div>
);

type Game = {
  id: number;
  name: string;
  image: string;
};

export default function Main_Content() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://localhost:4000/games');
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
      }
    };

    fetchGames();
  }, []);

  return (
    <main className={styles.main}>
      {/* {games.map((game) => ( */}
        <div className={styles.content_block_div}>
          {/* Первый блок контента */}
          <div className={styles.content_block_1}>
            <Gallery_TCM_Image />
            {/* <img src={game.image} alt={game.name || "No name"} /> */}
            <div className={`${styles.gallery_content_div_text} ${styles.gallery_content_div_text_1}`}>
              <h5 style={{ marginTop: 70 }} className={styles.content_div_title}>
                The Crew Motorfest Official Trailer Picture
              </h5>
            </div>
          </div>

          {/* Второй блок контента */}
          <div className={styles.content_block_1}>
            <div className={`${styles.gallery_content_div_text} ${styles.gallery_content_div_text_2}`}>
              <h5 style={{ marginTop: 230 }} className={styles.content_div_title}>
                Forza Horizon 5 Official Announcement Picture
              </h5>
            </div>
            {/* <img src={game.image} alt={game.name || "No name"} /> */}
          </div>

          {/* Третий блок контента */}
          <div className={styles.content_block_2}>
            {/* <img src={game.image} alt={game.name || "No name"} /> */}
            <div className={`${styles.gallery_content_div_text} ${styles.gallery_content_div_text_3}`}>
              <h5 style={{ marginTop: 80 }} className={styles.content_div_title_2}>
                The NEED FOR SPEED: Rivals 2013
              </h5>
            </div>
          </div>

          {/* Четвертый блок контента */}
          <div className={styles.content_block_3}>
            {/* <img src={game.image } alt={game.name || "No name"} /> */}
          </div>

          {/* Пятый блок контента */}
          <div className={styles.content_block_2}>
            {/* <img src={game.image} alt={game.name || "No name"} /> */}
            <div style={{ marginTop: 30 }} className={`${styles.gallery_content_div_text} ${styles.gallery_content_div_text_4}`}>
              <h5 style={{ marginTop: 30 }} className={styles.content_div_title_3}>
                Gorgeous Gran Turismo 7
              </h5>
            </div>
          </div>
        </div>
      {/* ))} */}
    </main>
  );
}
