import { RootState } from '../store';
export const getFavotite = () => (state: RootState) =>  state.cardReducer.favorite;

export const isFavoriteCard = (id: number) => (state: RootState) => {
 return Boolean(state.cardReducer.favorite.find( _ => _.id === id));
}
