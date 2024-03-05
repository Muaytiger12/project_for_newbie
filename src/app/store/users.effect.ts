import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
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
import { UserApiServiceService } from "../services/user-api-service.service";
import { of } from "rxjs";

@Injectable()
export class UsersEffect {
  constructor(
    private actions$: Actions,
    private usersApiService: UserApiServiceService
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.usersApiService.getUsers().pipe(
          map((value) => loadUsersSuccess({ usersProp: value })),
          catchError((error) => of(loadUsersFail({ error })))
        )
      )
    )
  );

  addUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addUsers),
      mergeMap(({ newUser }) =>
        this.usersApiService.addUser(newUser).pipe(
          map((user) => addUsersSuccess({ newUser })),
          catchError((error) => of(addUsersFail({ error })))
        )
      )
    )
  );

  deleteUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteUsers),
      switchMap(({ dUsers }) =>
        of(this.usersApiService.deleteUser(dUsers)).pipe(
          map(() => deleteUsersSuccess({ dUsers })),
          catchError((error) => of(deleteUsersFail({ error })))
        )
      )
    )
  );

  editUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editUsers),
      switchMap(({ editedUser }) =>
        of(this.usersApiService.editUser(editedUser)).pipe(
          map(() => editUsersSuccess({ editedUser })),
          catchError((error) => of(editUsersFail({ error })))
        )
      )
    )
  );
}
