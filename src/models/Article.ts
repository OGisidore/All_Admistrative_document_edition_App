export interface Article {
    _id: string;
    reference: string;
    designation: string
    sub_title?: string
    quantity: number
    unit: string
    unit_price: number
    deposit: number
    amount_ht: number
    tva_rate: number
    amount_ttc: number
    created_at: Date
    updated_at?: Date 

}