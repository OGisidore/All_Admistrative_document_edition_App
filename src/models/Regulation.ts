export interface Regulation{
    _id : string
    date : string
    limit_date : string
    Payment_method : string
    discount_rate : string
    latePayment_penality_rate : string
    latePayment_penality_feeclause :boolean
    created_at : Date
    updated_at?: Date
}