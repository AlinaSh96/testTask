import { ICard } from "../../models/ICard";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import cls from './CardItem.module.scss';
import FavoriteIcons from "../../icons/FavoriteIcons/FavoriteIcons";
import { addToFavorite } from "../../store/card/CardSlice";
import { isFavoriteCard } from "../../store/card/CardSelector";


interface CardItemProps {
  card: ICard;
}

export const CardItem = ({ card }: CardItemProps) => {
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector(isFavoriteCard(card.id));
  const handleClick = () => {
    dispatch(addToFavorite(card));
  }

  return (
    <div className={cls.wrap}>
      <p>{card.title}</p>
      <FavoriteIcons isCheck={isFavorite} handleClick={handleClick} />
      <img className={cls.image}
        src={card.thumbnailUrl}
        alt={card.thumbnailUrl}
      />
    </div>
  );
};