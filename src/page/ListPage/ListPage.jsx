import cls from './ListPage.module.scss';
import Button from '../../component/Button/Button';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { cardApi } from "../../services/card";
import { CardList } from "../../component/CardList/CardList";

export const ListPage = () => {
  const [page, setPage] = useState(1);
  const { data, isFetching } = cardApi.useGetCardQuery({ page });

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        setPage(page + 1);
      }
    };
    document.addEventListener("scroll", onScroll);
    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);

  return (
    <div className={cls.wrap}>
      <Link to="/">
        <Button
          className={cls.button}
        >
          Назад
        </Button>
      </Link>
      {isFetching && <p>Загрузка</p>}
      <CardList cards={data} />
    </div>
  );
};