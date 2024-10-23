import { About } from './about';
import { Contact } from './contact';
import { Init } from './init';
import style from './styles/home.module.scss';

export function Home() {
  return <main className={style.home}>
    <Init />
    <About />
    <Contact />
  </main>;
}
