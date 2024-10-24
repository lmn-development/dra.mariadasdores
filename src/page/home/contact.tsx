import { openChat } from "@/utils/openChat";
import style from "./styles/contact.module.scss";
import { Button } from "@/components/button";

export function Contact() {
  const chat = openChat;
  return (
    <section id="contact" className={style.contactSection}>
      <div className={style.contactImage}>
        <img src="assets/img-01.png" alt="bg" />
      </div>

      <div className={style.contactContainer}>
        <h2 className={style.contactTitle}>Entre em Contato</h2>
        <div className={style.contactContent}>
          <div className={style.contactTexts}>
            <p className={style.contactText}>
              Estou aqui para ajudar você a dar os primeiros passos em direção a
              uma vida mais equilibrada e plena. Se você está enfrentando
              desafios emocionais ou apenas deseja conversar sobre suas
              preocupações, não hesite em me procurar.
            </p>
            <p className={style.contactText}>
              Cada jornada é única, e a primeira conversa pode ser um grande
              passo. Estou disponível para ouvir e apoiar você da forma que
              precisar. Sinta-se à vontade para me contatar pelo WhatsApp.
            </p>
            <p className={style.contactText}>
              Lembre-se: você não está sozinho. Estou aqui para caminhar ao seu
              lado. Vamos juntos iniciar essa jornada de transformação!
            </p>
          </div>
          <Button className={style.contactButton} onClick={chat}>
            <img
              src="assets/logo-whatsapp.png"
              alt=""
              className={style.whatsappIcon}
            />
            Enviar mensagem
          </Button>
        </div>
      </div>
    </section>
  );
}
