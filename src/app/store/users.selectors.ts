import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './users.reducer';

export const selectUsersState = createFeatureSelector<UserState>('users');

export const selectUsers = createSelector(
  selectUsersState,
  state => state.users
);