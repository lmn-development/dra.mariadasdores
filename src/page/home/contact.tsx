import { Section } from "@/components/section";
import style from "./styles/contact.module.scss";
import { Button } from "@/components/button";

export function Contact() {
  return (
    <Section idElement="contact" classStyle={style.contactContainer}>
      <h2 className={style.contactTitle}>Entre em Contato</h2>
      <div className={style.contactWrapper}>
        <div className={style.contactContent}>
          <div className={style.contactTexts}>
            <p>
              Estou aqui para ajudar você a dar os primeiros passos em direção a
              uma vida mais equilibrada e plena. Se você está enfrentando
              desafios emocionais ou apenas deseja conversar sobre suas
              preocupações, não hesite em me procurar.
            </p>
            <p>
              Cada jornada é única, e a primeira conversa pode ser um grande
              passo. Estou disponível para ouvir e apoiar você da forma que
              precisar. Sinta-se à vontade para me contatar pelo WhatsApp.
            </p>
            <p>
              Lembre-se: você não está sozinho. Estou aqui para caminhar ao seu
              lado. Vamos juntos iniciar essa jornada de transformação!
            </p>
          </div>
          <Button className={style.contactButton}>
            <img
              src="assets/logo-whatsapp.png"
              alt=""
              className={style.whatsappIcon}
              style={{ width: "20px" }}
            />
            Enviar mensagem
          </Button>
        </div>
        <div className={style.imagem}></div>
      </div>
    </Section>
  );
}
