// import { Task } from "../../model/Taches";
import { GlobalState} from "./types/GlobalState";

export const getArticle = (state : GlobalState)=> state.bill?.article_lists
export const getClient = (state : GlobalState)=> state.bill?.client
export const getCompany = (state : GlobalState)=> state.bill?.company
export const getBill = (state : GlobalState)=> state.bill
export const getDesign = (state : GlobalState)=> state.bill.design_Style
export const getRegulation = (state : GlobalState)=> state.bill.regulation
export const getProforma = (state : GlobalState)=> state.bill.proforma
export const getCompanyType = (state : GlobalState)=> state.bill.company_type


// export const getTotalAmountBeforeDepositHt = (state : GlobalState)=> {
//     state.bill.total_amount_before_deposit_ht = state.bill.article_lists.reduce((total,article)=>total + article.amount_ht,0)
//     return state.bill.total_amount_before_deposit_ht

// } 
// export const getTotaltvaRate = (state : GlobalState)=> {
//     state.bill.tva_rate = state.bill.article_lists.reduce((total,article)=>total + Number(article.tva_rate),0)
//     return state.bill.tva_rate

// } 

// export const getdepositAmount = (state : GlobalState)=> {
//     state.bill.deposit_amount = state.bill.total_amount_before_deposit_ht * (state.bill.deposit_rate / 100)
//     return state.bill.deposit_amount

// } 
// export const getTotalAmountAfterDepositHt = (state : GlobalState)=> {
//     state.bill.total_amount_after_deposit_ht = state.bill.total_amount_before_deposit_ht - state.bill.deposit_amount
//     return state.bill.total_amount_after_deposit_ht

// } 
// export const getTtcAmount = (state : GlobalState)=> {
//     state.bill.amount_ttc = CalculateTTCAmount (state.bill.total_amount_after_deposit_ht ,state.bill.tva_rate)
//     return state.bill.amount_ttc

// } 
