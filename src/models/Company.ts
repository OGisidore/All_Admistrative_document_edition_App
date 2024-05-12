export interface Information{
    name: string 
    value: string 
}
export interface Company{
    _id: number
    logo_link : string
    company_name : string
    address : string
    postal_code : number
    city : string
    country : string
    phone : string
    fax:string
    email:string
    informations : Information[]
    created_at: Date
    updated_at: Date
}


// information = {
//     siret : String | number
//     rcs_city : string
//     Naf_code : string
//     TVA_num:string
// }