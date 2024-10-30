import { openChat } from '@/utils/openChat';
import { Button } from '../button';
import style from './header.module.scss';

export function Header() {
  const chat = openChat;
  return (
    <header className={style.header}>
      <div className={style.divNavigation}>
        <h1>Psicologia<br />Maria Quaresma</h1>
        <nav>
          <ul>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#tips">Dicas</a>
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
    </header>
  );
}
