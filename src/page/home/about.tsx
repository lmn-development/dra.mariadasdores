import { Section } from "@/components/section";
import style from "./styles/about.module.scss";

export function About() {
  return (
    <Section classStyle={style.aboutContainer} idElement="about">
      <div className={style.aboutWrapper}>
        <div className={style.aboutContent}>
          <h2 className={style.aboutTitle}>Sobre Mim</h2>
          <p className={style.aboutInfo}>
            Olá! Sou Maria Quaresma, pós-graduanda em Saúde Mental e Atenção
            Psicossocial. Ao longo da minha trajetória, percebi o quanto as
            crises e as mudanças que vivemos em diferentes fases da vida podem
            ser desafiadoras. Por isso, dedico meu trabalho a ajudar pessoas a
            enfrentarem esses momentos com mais equilíbrio e acolhimento.
            Ofereço terapia online, em um ambiente seguro e sigiloso, onde você
            poderá se sentir à vontade para falar sobre suas dificuldades. Meu
            objetivo é proporcionar apoio emocional em momentos de crise e fazer
            com que você se sinta compreendido, em um horário que se ajuste à
            sua rotina, sem comprometer o seu bem-estar.
          </p>
        </div>
        <div className={style.aboutSocialMedia}>
          <span>
            <i className="fa-brands fa-facebook"></i>
          </span>
          <span>
            <i className="fa-brands fa-instagram"></i>
          </span>
          <span>
            <i className="fa-brands fa-whatsapp"></i>
          </span>
        </div>
      </div>
      <img src="assets/person.png" alt="" className={style.aboutImg} />
    </Section>
  );
}
