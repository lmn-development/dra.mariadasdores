import { Button } from "@/components/button";
import style from "./styles/init.module.scss";
import { openChat } from "@/utils/openChat";

export function Init() {
  const chat = openChat;

  return (
    <section className={style.init}>
      <div className={style.initContent}>
        <h2 className={style.initTitle}>
          Terapia atenciosa e compassiva através de uma lente culturalmente
          informada.
        </h2>
        <h3 className={style.initInfo}>
          Dísponivel online e presencialmente em Interlagos, São Paulo
        </h3>
        <Button className={style.initButton} onClick={chat}>
          Psicoterapia com Tim
        </Button>
      </div>

      <img
        src="./assets/img/img-01.png"
        alt="Imagem de perfil"
        className={style.initImg}
      />
    </section>
  );
}
