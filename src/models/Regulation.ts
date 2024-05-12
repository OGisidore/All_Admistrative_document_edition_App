export interface Regulation{
    _id : number
    date : Date
    limit_date : Date
    Payment_method : string
    discount_rate : number
    latePayment_penality_rate : number
    latePayment_penality_feeclause :boolean
    created_at : Date
    updated_at : Date
}