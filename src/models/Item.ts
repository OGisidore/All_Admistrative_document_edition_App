export interface Item {
    _id: string;
    reference: string;
    designation: string
    sub_title?: string
    quantity: number
    unit: string
    unit_price: number
    discount: number
    amount_ht: number
    tva_rate: number
    deposit_amount : number
    amount_ttc: number
    created_at: Date
    updated_at?: Date 

}