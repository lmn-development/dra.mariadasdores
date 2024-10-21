import { Button } from "@/components/button";
import style from "./styles/init.module.scss";
import { openChat } from "@/utils/openChat";

export function Init() {
  const chat = openChat;

  return (
    <section className={style.init}>
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
          Psicoterapia com Maria
        </Button>
      </div>

      <img
        src="./assets/img-02.png"
        alt="Imagem de perfil"
        className={style.initImg}
      />
    </section>
  );
}
