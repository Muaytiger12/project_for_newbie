import { Component, EventEmitter, Input, Output, inject } from "@angular/core";
import { CreateEditUserComponent } from "../create-edit-user/create-edit-user.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { UserApiServiceService } from "../../services/user-api-service.service";
import { selectUsers } from "../../store/users.selectors";
import { Store } from "@ngrx/store";
import { editUsers } from "../../store/users.actions";
import { User } from "../../interface/user.interface";

@Component({
  selector: "app-user-card",
  templateUrl: "user-card.component.html",
  styleUrl: "user-card.component.css",
})
export class UserCardComponent {
  @Input({ required: true }) user!: User;
  @Output() deleteUser = new EventEmitter<number>();
  @Output() editUser = new EventEmitter<User>();
  private dialog = inject(MatDialog);
  public usersService = inject(UserApiServiceService);

  constructor(private store: Store) {}
  users$ = this.store.select(selectUsers);

  onDelete(dUsers: number) {
    this.deleteUser.emit(dUsers);
  }

  updateModal(): void {
    const updateUserDialog: MatDialogRef<
      CreateEditUserComponent,
      Pick<User, "id" | "name" | "email" | "phone" | "website" | "username">
    > = this.dialog.open(CreateEditUserComponent, {
      width: "60%",
      height: "500px",
      data: this.user,
    });
    updateUserDialog.afterClosed().subscribe((editedUser) => {
      if (!editedUser) {
        return;
      }
      this.store.dispatch(editUsers({ editedUser }));
    });
  }
}
