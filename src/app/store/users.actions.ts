import { createAction, props } from "@ngrx/store";
import { User } from "../interface/user.interface";

export const loadUsers = createAction('[Users] loadUsers');
export const loadUsersSuccess = createAction('[Users] loadUsersSuccess', props <{usersProp: User[]}>());
export const loadUsersFail = createAction('[Users] loadUsersFail', props <{error: Error}>());

export const addUsers = createAction('[Users] addUsers', props <{newUser: User}>()); 
export const addUsersSuccess = createAction('[Users] addUsersSuccess', props <{newUser: User}>()); 
export const addUsersFail = createAction('[Users] addUsersFail', props <{error: Error}>()); 

export const editUsers = createAction('[Users] editUsers', props <{editedUser: User}>()); 
export const editUsersSuccess = createAction('[Users] editUsersSuccess', props <{editedUser: User}>()); 
export const editUsersFail = createAction('[Users] editUsersFail', props <{error: Error}>()); 

export const deleteUsers = createAction('[Users] deleteUsers', props <{dUsers: number}>()); 
export const deleteUsersSuccess = createAction('[Users] deleteUsersSuccess',props <{dUsers: number}>()); 
export const deleteUsersFail = createAction('[Users] deleteUsersFail',props <{error: Error}>()); 






