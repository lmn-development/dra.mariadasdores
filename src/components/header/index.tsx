import { openChat } from "@/utils/openChat";
import { Button } from "../button";
import style from "./header.module.scss";
import { motion } from "framer-motion";

export function Header() {
  const chat = openChat;
  return (
    <header className={style.header}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
      >
        <div className={style.divNavigation}>
          <h1>
            Psicoterapeuta
            <br />
            Maria Quaresma
          </h1>
          <nav>
            <ul>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#">Dicas</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={style.btnReserve}>
          <div>
            <Button onClick={chat}>Agende sua consulta</Button>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
