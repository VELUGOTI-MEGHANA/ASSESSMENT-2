import { EmailValidator } from "@angular/forms";

export class StatusInterface{
    task_ID!:number;
    creator_ID!:number;
    owner_ID!:number;
    description!:string;
    status!:string;
    priority!:string;
    notes!:string;
    isbookmarked!:string;
    created_ON!:string;
    status_CHANGED_ON!:string;
    name!:string;

}