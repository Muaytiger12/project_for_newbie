import { createReducer, on } from "@ngrx/store";
import {
  addUsers,
  addUsersFail,
  addUsersSuccess,
  deleteUsers,
  deleteUsersFail,
  deleteUsersSuccess,
  editUsers,
  editUsersFail,
  editUsersSuccess,
  loadUsers,
  loadUsersFail,
  loadUsersSuccess,
} from "./users.actions";
import { User } from "../interface/user.interface";

export const USERS_FEATURE_KEY = "users";

export interface UserState {
  users: User[];
  loading: boolean;
  error: any;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const cardReducer = createReducer(
  initialState,

  on(loadUsers, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadUsersSuccess, (state, { usersProp }) => ({
    ...state,
    users: usersProp,
    loading: false,
  })),
  on(loadUsersFail, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),


  on(deleteUsers, (state) => ({
    ...state,
    loading: true,
  })),
  on(deleteUsersSuccess, (state, { dUsers }) => ({
    ...state,
    users: state.users.filter((user) => user.id !== dUsers),
  })),
  on(deleteUsersFail, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),


  on(editUsers, (state) => ({
    ...state,
  })),
  on(editUsersSuccess, (state, { editedUser }) => ({
    ...state,
    users: state.users.map((user) =>
      user?.id == editedUser.id ? editedUser : user
    ),
  })),
  on(editUsersFail, (state, { error }) => ({
    ...state,
    error,
  })),

  
  on(addUsers, (state) => ({
    ...state,
  })),
  on(addUsersSuccess, (state, { newUser }) => ({
    ...state,
    users: [...state.users, newUser],
  })),
  on(addUsersFail, (state, { error }) => ({
    ...state,
    error: error,
  }))
);
