import { ICard } from "../../models/ICard";
import cls from './CardList.module.scss';
import { CardItem } from "../CardItem/CardItem";


interface CardListProps {
    cards: ICard[];
}

export const CardList = ({ cards }: CardListProps) => {

    return (
        <div className={cls.lists}>
            {cards?.map((card) => (
                <CardItem key={card.id} card={card} />
            ))}
        </div>
    );
};