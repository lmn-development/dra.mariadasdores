import { Button } from "@/components/button";
import style from "./styles/init.module.scss";
import { openChat } from "@/utils/openChat";
import { Section } from "@/components/section";

export function Init() {
  const chat = openChat;

  return (
    <Section classStyle={style.initContainer}>
      <div className={style.initContent}>
        <h2 className={style.initTitle}>
          Acolhimento e suporte emocional para transformar desafios em
          oportunidades de crescimento pessoal.
        </h2>
        <h3 className={style.initInfo}>
          Disponível para consultas online, com flexibilidade de horários para
          atender à sua rotina.
        </h3>
        <Button className={style.initButton} onClick={chat}>
          Psicologa com Maria
        </Button>
      </div>

      <div className={style.initImgs}>
        <img
          src="./assets/sofa-gradient.png"
          alt="Imagem de perfil"
          className={`${style.initImg} ${style.initImgGradient}`}
        />
        <img
          src="./assets/sofa-normal.png"
          alt="Imagem de perfil"
          className={`${style.initImg} ${style.initImgNormal}`}
        />
      </div>
    </Section>
  );
}
