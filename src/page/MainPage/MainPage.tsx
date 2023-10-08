import Button from '../../component/Button/Button';
import cls from './MainPage.module.scss';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { getFavotite } from '../../store/card/CardSelector';
import { CardList } from '../../component/CardList/CardList';

export const MainPage = () => {

  const data = useAppSelector(getFavotite());

  return (
    <div className={cls.wrap}>
      <Link to="/list">
        <Button
          className={cls.button}
        >
          К списку
        </Button>
      </Link>
      <div className={cls.lists}>
        {!data.length && <p>Список избранного пустой</p>}
        <CardList cards={data}/>
      </div>
    </div>
  );
};