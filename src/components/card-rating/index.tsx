import { IRating } from '@/interface/rating.interface';
import style from './card.module.scss';

interface Props {
  item: IRating;
}

export function CardRating({ item }: Props) {
  return (
    <div className={style.card}>
      <div>
        <img src={item.img} alt={item.name} className={style.cardImg} />
        <h3 className={style.cardName}>{item.name}</h3>
      </div>
      <p className={style.cardText}>{item.text}</p>
    </div>
  );
}
