import style from './styles/about.module.scss';

export function About() {
  return (
    <section className={style.about}>
      <div className={style.aboutContainer}>
        <div className={style.aboutContent}>
          <h2 className={style.aboutTitle}>Sobre Mim</h2>
          <p className={style.aboutInfo}>
            Sou Tim, um psicólogo de 30 anos apaixonado por compreender a mente
            humana. Com foco especial no atendimento a pessoas mais idosas,
            acredito na importância de ouvir e apoiar cada indivíduo em sua
            jornada emocional. Minha prática se estende a todas as idades,
            promovendo um ambiente acolhedor e inclusivo. Combinando abordagens
            tradicionais e modernas, busco conectar gerações e criar um espaço
            seguro onde todos possam compartilhar suas experiências e encontrar
            sentido. Estou comprometido em fazer a diferença na vida das
            pessoas, ajudando-as a navegar pelos desafios da vida com empatia e
            compreensão.
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
      <img src="assets/img/img-02.png" alt="" className={style.aboutImg} />
    </section>
  );
}
