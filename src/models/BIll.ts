import { Article } from "./Article";
import { Design } from "./Design";
import { Regulation } from "./Regulation";

export interface Bill {
    _id : string
    reference : number
    discount : number 
    total_amount_before_deposit_ht : number
    tva_rate : number
    TTC_amount : number
    article_lists : Article[]
    regulation : Regulation
    design_Style : Design
    informations : string
    title : string 
    deposit_rate : number
    total_amount_after_deposit_ht : number
    created_at : Date
    updated_at : Date
}