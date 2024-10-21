import style from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.rightsReserved}>
        <p>
          Copyright &copy; 2024 LMN Development. All rights reserved.
        </p>
      </div>
      <div className={style.socialMedia}>
        <h4>Redes Sociais</h4>
        <div>
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
    </footer>
  );
}
