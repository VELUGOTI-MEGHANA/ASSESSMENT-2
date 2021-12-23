import { EmailValidator } from "@angular/forms";

export class UserDetails{
    user_ID!:number;

    password!:string;

    username!:string;

    email!:EmailValidator;

    first_NAME!:string;

    last_NAME!:string;

    contact_NUMBER!:number;

    role!:string;

    is_ACTIVE!:boolean;

    dob!:string;

    created_ON!:string;

}