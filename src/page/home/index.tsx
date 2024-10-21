import { About } from './about';
import { Init } from './init';
import { Rating } from './rating';
import style from './styles/home.module.scss';

export function Home() {
  return <main className={style.home}>
    <Init />
    <About />
    <Rating />
  </main>;
}
