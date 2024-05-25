import { ADD_TO_BILL, REMOVE_FROM_BILL } from "./actionTypes"


export interface BillAction{
    type : typeof ADD_TO_BILL | typeof REMOVE_FROM_BILL | null
    key:string | null
    unique? : boolean,
    payload : any| null
}
