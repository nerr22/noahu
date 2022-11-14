/* eslint-disable react-hooks/exhaustive-deps */
import styles from "../styles/Hero.module.css";
import { useState, useEffect } from "react";

function Hero() {
  const [greeting, setGreeting] = useState("Hello");
  const greetings = [
    "Hello",
    "Bonjour",
    "Hola",
    "Ciao",
    "Olá",
    "Kia Ora",
    "G’day",
    "Geia",
    "Zdravo",
    "Zdravo",
    "Privet",
    "Nǐ hǎo",
    "Nǐ hǎo",
    "Namaste",
    "Kon’nichiwa",
    "Merhaba",
    "Anyeong Haseyo",
    "Ahoj",
    "Guten Tag",
    "Hallo",
    "Cześć",
    "S̄wạs̄dī",
    "Szia",
    "Ahoj",
    "Hyālō",
    "Assalam u Alaikum",
    "Salām",
    "Dobryj Den",
    "Hallå",
    "Hallo",
    "Bunâ",
    "Shalom",
    "Barev",
    "Marhabaan",
    "Sata Srī Akāla",
    "Hal",
    "Selamat Pagi",
    "Xin Chào",
    "Kaixo",
    "Servus",
    "Kamusta",
    "Jambo",
    "Salom",
    "Salam",
    "Slav",
    "Namaste",
    "Bonjou",
    "Dobry Dzień",
    "Moni",
    "Bula",
    "Aloha",
    "Tālofa",
    "Mālō e lelei",
    "A Gutn Tog",
    "S’mae",
    "Hei",
    "Sveiki",
    "Sveika ",
    "Sveik",
    "Halló",
    "Halò",
    "Dia Duit",
    "Tere",
    "Zdravo",
    "Tashi Delek",
    "Sabaidee",
    "Gamarjoba",
    "Dumela",
    "Saluton",
    "Bongu",
    "Hello",
    "Nde-ewo	Moïen",
    "Ya’at’eeh",
    "Grüezi",
    "Ia Orana",
    "Përshëndetje",
    "Hola",
    "Ola",
    "Sain uu",
    "Nóng gō",
    "Vanakka",
    "Salam",
    "Namaskāra",
    "Sannu",
    "Mingalaba",
    "Selam",
    "Demat",
    "Akkam",
    "Khurumjari",
    "Kumusta",
    "Salama",
    "Henda ho",
    "Choum Reap Sor",
    "Ayubowan",
    "Li-hó",
    "Dumela",
    "Allianchu",
    "Molweni",
  ];

  useEffect(() => {
    const getGreeting = () => {
      const randNumber = Math.round(Math.random() * greetings.length);
      const randGreeting = greetings[randNumber];
      setGreeting(randGreeting);
    };
    const interval = setInterval(() => {
      getGreeting();
    }, 2500);
    return () => clearInterval(interval);
  }, [greetings]);
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1 className={styles.heroHeader}>
          <span className={styles.greetingHand}>👋</span>
          <span className={styles.greetingSpan}>{greeting}</span>
        </h1>
        <h2 className={styles.heroContent}>
          I&apos;m Noah.  I&apos;m a co-founder at Abyssinia Bio and the founder at Actually Health. I like trying to solve un-solvable problems and understand things I&apos;m too dumb to understand. My leadership, executive, and technical backgrounds span business strategy, biotechnology, data science, software development, digital health, and social enterprise. I&apos;ve led and collaborated with multidisciplinary teams in academia, government, and fortune 10 healthcare. Scroll down to see what I&apos;m getting up to.  
        </h2>
      </div>
    </div>
  );
}

export default Hero;
