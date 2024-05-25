import {  Item } from "./Item";
import { Design } from "./Design";
import { Regulation } from "./Regulation";
import { Client } from "./Client";
import { Company } from "./Company";

export interface Bill {
    _id : string
    bill_number : number
    reference : string
    discount : number 
    duplicata : boolean,
    company_type :string
    proforma : boolean
    Add_discount :boolean
    add_deposit : boolean
    total_amount_before_deposit_ht : number
    tva_rate : number
    client : Client
    company : Company
    amount_ttc : number
    article_lists : Item[]
    regulation : Regulation
    design_Style : Design
    informations : string
    title : string 
    deposit_rate : number
    deposit_amount : number
    total_amount_after_deposit_ht : number
    currency : string
    netAmount : number
    created_at : Date
    updated_at? : Date
}