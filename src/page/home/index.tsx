import { About } from './about';
import { Contact } from './contact';
import { Init } from './init';
import style from './styles/home.module.scss';
import { Tips } from './tips';

export function Home() {
  return <main className={style.home}>
    <Init />
    <About />
    <Tips />
    <Contact />
  </main>;
}
