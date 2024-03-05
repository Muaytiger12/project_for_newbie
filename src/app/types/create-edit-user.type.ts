import { User } from "../interface/user.interface";

export type CreateEditUser = Pick<User,'name' | 'email' | 'phone' | 'website'>