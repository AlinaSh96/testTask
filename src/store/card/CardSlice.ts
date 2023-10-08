import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ICard} from "../../models/ICard";

interface cardState {
    items: ICard[],
    favorite: ICard[],
    totalPrice: number
}

const initialState: cardState = {
    items: [],
    favorite:[],
    totalPrice: 0
}

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers:{
    add(state, action: PayloadAction<ICard>) {
    //  const findItem = state.items.find((obj) => obj.id === action.payload.id);
    //   if(findItem) {
    //     findItem.count++;
    //   } else {
    //     state.items.push({
    //       ...action.payload,
    //       count: 1
    //     })
    //   }
    },
    addToFavorite(state, action) {
      const findItem = state.favorite.find(_ => _.id === action.payload.id);
      //const findItemById = state.items.find(_ => _.id === action.payload.id);
      if (findItem) {
        state.favorite = state.favorite.filter( el => el.id !== action.payload.id)
        //state.favoriteCount--;
        //findItemById.??isFavorite = false;
      } else {
        state.favorite = [
          ...state.favorite,
          action.payload,
        ]
        //state.favoriteCount++;
       // findItemById.isFavorite = true;
      }
    },
  }
});

export const { addToFavorite} = cardSlice.actions;
export default cardSlice.reducer;