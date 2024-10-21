import { openChat } from '@/utils/openChat';
import { Button } from '../button';
import style from './header.module.scss';

export function Header() {
  const chat = openChat;
  return (
    <header className={style.header}>
      <div className={style.divNavigation}>
        <h1>Dra. Maria Quaresma</h1>
        <nav>
          <ul>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#">Recomendações</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
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
