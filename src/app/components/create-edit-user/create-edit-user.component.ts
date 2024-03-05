import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { User } from "../../interface/user.interface";

@Component({
  selector: "app-create-edit-user",
  templateUrl: "./create-edit-user.component.html",
  styleUrl: "./create-edit-user.component.css",
})
export class CreateEditUserComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private dialogRef: MatDialogRef<CreateEditUserComponent>,
    private formBuilder: FormBuilder
  ) {}

  myForm!: FormGroup;
  usersService: any;

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      id: [],
      name: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required],
      website: ["", Validators.required],
    });
    if (this.data) {
      this.myForm.patchValue(this.data);
    }
  }
  onSubmit() {
    if (this.myForm.valid) {
      this.dialogRef.close(this.myForm.value);
    }
  }
}
