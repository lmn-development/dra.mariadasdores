import { About } from './about';
import { Init } from './init';
import style from './styles/home.module.scss';

export function Home() {
  return <main className={style.home}>
    <Init />
    <About />
  </main>;
}
