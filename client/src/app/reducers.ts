import { IRecipe } from "../../../interface/recipeInterface";

const initialState: IRecipe[] = [];

export const allRecipeReducer = (state = initialState, action: {type: string, payload: IRecipe[]}) => {
  switch (action.type) {
    case ('GET-RECIPES'):
      return [...state, action.payload];
    default: return state;
  }
}