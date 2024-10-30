import style from './styles/contact.module.scss';
import { Button } from '@/components/button';
import { useState } from 'react';

export function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(name, email, phone, message);
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
              name=""
              id=""
              cols={30}
              rows={10}
              value={message}
              className={style.labelTextarea}
              placeholder="Mensagem"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>

          <Button type="submit" className={style.contactButton}>Enviar</Button>
        </form>
      </div>
    </section>
  );
}
