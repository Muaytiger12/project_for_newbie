import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { HttpClientModule } from "@angular/common/http";
import { UserCardComponent } from "./components/user-card/user-card.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { CreateEditUserComponent } from "./components/create-edit-user/create-edit-user.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MatCardContent, MatCardModule } from "@angular/material/card";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { cardReducer } from "./store/users.reducer";
import { UsersEffect } from "./store/users.effect";

@NgModule({
  declarations: [
    AppComponent,
    CreateEditUserComponent,
    UserCardComponent,
    UsersListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatCardModule,
    MatCardContent,
    StoreModule.forRoot({ users : cardReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: !isDevMode(), 
      autoPause: true, 
      trace: false, 
      traceLimit: 75, 
      connectInZone: true, 
    }),
    EffectsModule.forRoot(UsersEffect)
  ],
  providers: [],    
  bootstrap: [AppComponent],
})
export class AppModule {}
