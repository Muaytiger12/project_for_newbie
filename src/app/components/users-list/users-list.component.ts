import { Component, Input, inject } from "@angular/core";
import { UserApiServiceService } from "../../services/user-api-service.service";
import { MatDialog } from "@angular/material/dialog";
import { CreateEditUserComponent } from "../create-edit-user/create-edit-user.component";
import { Store } from "@ngrx/store";
import { selectUsers } from "../../store/users.selectors";
import { addUsers, deleteUsers, loadUsers } from "../../store/users.actions";
import { User } from "../../interface/user.interface";
import { tap } from "rxjs";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrl: "./users-list.component.css",
})
export class UsersListComponent {
  @Input() user: User | undefined;
  constructor(
    public userApiService: UserApiServiceService,
    private dialog: MatDialog,
    private store: Store
  ) {}
  
  users$ = this.store.select(selectUsers);

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }

  onDeleteUser(dUsers: number) {
    this.store.dispatch(deleteUsers({ dUsers }));
  }

  openModal() {
    const createUserDialog = this.dialog.open(CreateEditUserComponent, {
      width: "60%",
      height: "500px",
      data: this.user,
    });
    createUserDialog
      .afterClosed()
      .pipe(
        tap((newUser) => {
          if (newUser) {
            this.store.dispatch(addUsers({ newUser }));
          }
        })
      )
      .subscribe();
  }
}
