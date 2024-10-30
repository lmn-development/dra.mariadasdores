import style from "./styles/contact.module.scss";
import { Button } from "@/components/button";
import { useState } from "react";
import emailjs from "emailjs-com";

export function Contact() {

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const emailServiceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const emailUserId = import.meta.env.VITE_EMAIL_USER_ID;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const obj = {
      name,
      email,
      phone,
      message,
    }
    
    emailjs
      .send(
        emailServiceId,
        emailTemplateId,
        obj,
        emailUserId
      )
      .then(() => {
        console.log("Email enviado com sucesso.");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch(e => {
        console.log(e);
        console.log("Erro ao enviar email.");
        setIsError(true)
      })
  };

  return (
    <section className={style.contactSection}>
      <h2 className={style.contactTitle}>Entre em Contato</h2>

      <div className={style.contactContainer}>
        <form onSubmit={handleSubmit}>
          <label className={style.contactLabel}>
            <span className={style.labelText}>Nome completo</span>
            <input
              type="text"
              placeholder="Digite seu nome aqui"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={style.labelInput}
              required
            />
          </label>

          <label className={style.contactLabel}>
            <span className={style.labelText}>Email</span>
            <input
              type="email"
              placeholder="exemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={style.labelInput}
              required
            />
          </label>

          <label className={style.contactLabel}>
            <span className={style.labelText}>Telefone</span>
            <input
              type="text"
              placeholder="(11) 9xxxx-xxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={style.labelInput}
              required
            />
          </label>

          <label className={style.contactLabel}>
            <span className={style.labelText}>
              Escreva uma mensagem para enviar para a psicóloga
            </span>
            <textarea
              cols={30}
              rows={10}
              value={message}
              className={style.labelTextarea}
              placeholder="Mensagem"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>
          {isError && <p style={{ color: "red" }}>Erro ao enviar email, tente novamente mais tarde.</p>}
          <Button type="submit" className={style.contactButton}>
            Enviar
          </Button>
        </form>
      </div>
    </section>
  );
}
