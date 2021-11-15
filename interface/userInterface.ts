import { ObjectId } from 'mongoose';

export interface IUser {
  username: string,
  password: string,
  savedRecipes: ObjectId[],
}