export interface Client {
    _id: number
    client_code ? : number | string
    civility : string
    full_name : string
    address : string
    postal_code : number
    city : string
    country : string
    phone : string
    email : string
    tva_number:string
    created_at: Date
    updated_at: Date
}