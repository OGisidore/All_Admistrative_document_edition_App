export interface Service{
    _id? : string
    slug : string
    name : string
    imageUrl:string
    template ? : any
    created_at : Date
    updated_at ?: Date
}