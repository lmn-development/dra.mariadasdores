import { Section } from "@/components/section";
import style from "./styles/about.module.scss";
import { openChat } from "@/utils/openChat";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function About() {
  const [scrollXText, setScrollXText] = useState(1200);
  const [scrollXImage, setScrollXImage] = useState(-700);
  const [iconAnimation, setIconAnimation] = useState({ opacity: 0, scale: 0 });

  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);

    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  const handleScrollY = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY >= 700) {
      setScrollXImage(0);
      setScrollXText(0);
    } else {
      setScrollXImage(-700);
      setScrollXText(1000);
    }

    if (currentScrollY >= 750) {
      setIconAnimation({ opacity: 1, scale: 1 });
    } else {
      setIconAnimation({ opacity: 0, scale: 0 });
    }
  };
  
  const navigate = (location: string) => {
    window.location.href = location;
  };

  const chat = openChat;
  return (
    <Section classStyle={style.aboutContainer} idElement="about">
      <div className={style.aboutWrapper}>
        <motion.div
          animate={{ x: scrollXText }}
          transition={{ duration: 0.8 }}
          className={style.motionDiv}
        >
          <div className={style.aboutContent}>
            <h2 className={style.aboutTitle}>Sobre Mim</h2>
            <p className={style.aboutInfo}>
              Olá! Sou Maria Quaresma, pós-graduanda em Saúde Mental e Atenção
              Psicossocial. Ao longo da minha trajetória, percebi o quanto as
              crises e as mudanças que vivemos em diferentes fases da vida podem
              ser desafiadoras. Por isso, dedico meu trabalho a ajudar pessoas a
              enfrentarem esses momentos com mais equilíbrio e acolhimento.
              Ofereço terapia online, em um ambiente seguro e sigiloso, onde
              você poderá se sentir à vontade para falar sobre suas
              dificuldades. Meu objetivo é proporcionar apoio emocional em
              momentos de crise e fazer com que você se sinta compreendido, em
              um horário que se ajuste à sua rotina, sem comprometer o seu
              bem-estar.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={iconAnimation}
          transition={{ duration: 0.8 }}
        >
          <div className={style.aboutSocialMedia}>
            <span
              onClick={() =>
                navigate("https://www.facebook.com/mariadores.caetano")
              }
            >
              <i className="fa-brands fa-facebook"></i>
            </span>
            <span
              onClick={() =>
                navigate("https://www.instagram.com/psi_maria.quaresma/")
              }
            >
              <i className="fa-brands fa-instagram"></i>
            </span>
            <span onClick={chat}>
              <i className="fa-brands fa-whatsapp"></i>
            </span>
          </div>
        </motion.div>
      </div>
      <motion.div
        animate={{ x: scrollXImage }}
        transition={{ duration: 0.8 }}
      >
        <img src="assets/person.png" alt="" className={style.aboutImg} />
      </motion.div>
    </Section>
  );
}
