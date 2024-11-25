import { Section } from "@/components/section";
import style from "./styles/about.module.scss";
import { openChat } from "@/utils/openChat";

export function About() {
  const navigate = (location: string) => {
    window.location.href = location;
  };
  const chat = openChat;
  return (
    <Section classStyle={style.aboutContainer} idElement="about">
      <div className={style.aboutWrapper}>
        <div className={style.aboutContent}>
          <h2 className={style.aboutTitle}>Sobre Mim</h2>
          <p className={style.aboutInfo}>
            Olá! Sou Maria Quaresma, psicóloga graduada pela Universidade Vale
            do Salgado (Univs), pós-graduada em Psicologia Organizacional e do
            Trabalho pela Faculdade Intervale e pós-graduanda em Saúde Mental e
            Atenção Psicossocial pela Famart. <br /><br /> Tenho formação em
            Psicogerontologia e experiência em temas como prevenção ao suicídio,
            psicologia parental e perinatal. Ofereço terapia online, em um
            ambiente seguro e sigiloso, para ajudar você a enfrentar desafios
            com equilíbrio e acolhimento, sempre respeitando sua rotina.
          </p>
        </div>
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
      </div>
      <img src="assets/person.png" alt="" className={style.aboutImg} />
    </Section>
  );
}
