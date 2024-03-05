import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../interface/user.interface";

@Injectable({
  providedIn: "root",
})
export class UserApiServiceService {
  private readonly url = "https://jsonplaceholder.typicode.com/users";
  constructor(private httpClient: HttpClient) {}


  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(
      this.url
    );
  }

  deleteUser(id: number): Observable<unknown> {
    return this.httpClient.delete(
      this.url + `/users/${id}`
    );
  }

  addUser(user: User): Observable<{ id: number }> {
    return this.httpClient.post<{ id: number }>(
      this.url,
      user
    );
  }

  public editUser(user: Partial<User>): Observable<User> {
    return this.httpClient.patch<User>(
      this.url + `/users/${user.id}`,
      user
    );
  }
}
