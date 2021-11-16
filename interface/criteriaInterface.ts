export interface ICriteria {
  cuisine?: string,
  healthLabel?: string,
  cookTime?: number | undefined,
  numIngredients?: number | undefined,
  findAny: boolean,
}