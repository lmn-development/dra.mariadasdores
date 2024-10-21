import { CardRating } from '@/components/card-rating';
import { IRating } from '@/interface/rating.interface';
import { addingRating } from '@/utils/ratings';
import { useEffect, useState } from 'react';
import style from './styles/rating.module.scss';

export function Rating() {
  const [rating, setRating] = useState<IRating[]>();

  const ratings = addingRating;

  useEffect(() => {
    setRating(ratings);
  }, []);

  return (
    <div className={style.rating}>
      <h1 className={style.ratingTitle}>Avaliações</h1>

      <div className={style.arrayRatings}>
        <div className={style.arrayRatingsContent}>
          {rating?.map((item, index) => (
            <div key={index}>
              <CardRating item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
