import { openChat } from "@/utils/openChat";
import style from "./footer.module.scss";

export function Footer() {
  const navigate = (location: string) => {
    window.location.href = location;
  };
  const chat = openChat;
  return (
    <footer className={style.footer}>
      <div className={style.rightsReserved}>
        <p>Copyright &copy; 2024 Maria Quaresma. Todos direitos reservados.</p>
      </div>
      <div className={style.socialMedia}>
        <h4>Redes Sociais</h4>
        <div>
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
    </footer>
  );
}
