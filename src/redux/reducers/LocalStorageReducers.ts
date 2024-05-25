
import { CalculateHTAmount, CalculateTTCAmount, generateID } from "../../Helpers/utilities";
import { Bill } from "../../models/BIll";
import { Item } from "../../models/Item";
import { ADD_TO_BILL, REMOVE_FROM_BILL } from "../actions/actionTypes";
import { BillAction } from "../actions/types";


const bill: Bill = {
    _id: generateID(),
    reference: "",
    bill_number: 0,
    discount: 0,
    duplicata: false,
    company_type: "Entreprise avec TVA ",
    total_amount_before_deposit_ht: 0,
    proforma: false,
    tva_rate: 0,
    amount_ttc: 0,
    client: {
        _id: generateID(),
        client_code: '',
        civility: '',
        full_name: '',
        address: '',
        postal_code: 0,
        city: '',
        country: '',
        phone: '',
        email: '',
        informations: [],
        created_at: new Date()
    },
    company: {
        _id: generateID(),
        logo_link: '',
        company_name: '',
        address: '',
        postal_code: 0,
        city: '',
        country: '',
        phone: '',
        fax: '',
        email: '',
        informations: [],
        created_at: new Date(),

    },
    article_lists: [
        {
            _id: generateID(),
            reference: '',
            designation: "",
            quantity: 0,
            unit: "",
            unit_price: 0,
            discount: 0,
            amount_ht: 0,
            tva_rate: 0,
            amount_ttc: 0,
            deposit_amount: 0,
            created_at: new Date()
        }
    ],
    regulation: {
        _id: generateID(),
        date: "",
        limit_date: "",
        Payment_method: "",
        discount_rate: "",
        latePayment_penality_rate: "",
        latePayment_penality_feeclause: false,
        created_at: new Date(),

    },
    add_deposit: false,
    Add_discount: false,
    design_Style: {
        _id: 1,
        name: "template 1",
        style: "  bg-white rounded shadow-md",
        created_at: new Date()
    },
    informations: "",
    title: "",
    deposit_rate: 0,
    deposit_amount: 0,
    currency: "CFA",
    netAmount: 0,
    total_amount_after_deposit_ht: 0,
    created_at: new Date()



}

const initState: any = bill ? bill : {};
export const billReducers = (state = initState,
    action: BillAction = { type: null, key: null, payload: null }) => {
    switch (action.type) {
        case ADD_TO_BILL:
            if (action.key) {
                if (!action.unique) {
                    if (!state[action.key]) {
                        state[action.key] = []

                    }
                    if (action.key === "article_lists") {
                        action.payload.amount_ht = CalculateHTAmount(action.payload.quantity, action.payload.unit_price, action.payload.discount)
                        // action.payload.deposit_amount = action.payload.amount_ht * (state.deposit_rate / 100)
                        // action.payload.amount_ttc = CalculateTTCAmount((action.payload.amount_ht - action.payload.deposit_amount), action.payload.tva_rate)


                    }
                    const existing = state[action.key]
                        .find((exist: any) => exist._id === action.payload?._id)
                    if (!existing) {
                        console.log(action.payload);
                        action.payload.created_at = new Date()
                        console.log("non", action.payload?._id);


                        state[action.key].push(action.payload)
                        state[action.key] = [...state[action.key]]
                    } else {
                        console.log("oui", action.payload?._id);
                        action.payload.updated_at = new Date()
                        const existingIndex = state[action.key]
                            .findIndex((exist: any) => exist._id === action.payload?._id)
                        // if(existingIndex === -1){
                        state[action.key][existingIndex] = action.payload

                        state[action.key] = [...state[action.key]]
                        // }
                    }




                } else {
                    state[action.key] = action.payload

                }
                state.article_lists.map((article: Item) => article.deposit_amount = article.amount_ht * (state.deposit_rate / 100))
                state.article_lists.map((article: Item) => article.amount_ttc = CalculateTTCAmount((article.amount_ht - article.deposit_amount), article.tva_rate))
                state.deposit_amount = state.total_amount_before_deposit_ht * (state.deposit_rate / 100)
                state.total_amount_before_deposit_ht = state.article_lists.reduce((total: number, article: Item) => total + article.amount_ht, 0)
                state.total_amount_after_deposit_ht = state.total_amount_before_deposit_ht - state.deposit_amount
                state.tva_rate = state.article_lists.reduce((total: number, article: Item) => total + Number(article.amount_ttc), 0)
                state.amount_ttc = state.tva_rate
                state.netAmount = state.amount_ttc - state.discount
                state.reference = state.client.full_name


            }


            return { ...state }

            break;
        case REMOVE_FROM_BILL:
            if (action.key) {
                if (!action.unique) {
                    if (state[action.key]) {
                        // state[action.key] = []
                        const index = state[action.key]
                            .findIndex((exist: any) => exist._id === action.payload?._id)
                        console.log(index);


                        if (index !== -1) {
                            state[action.key] = state[action.key].filter((data: any) => data._id !== action.payload?._id)
                        }

                    }
                } else {
                    delete state[action.key]
                }
                state.article_lists.map((article: Item) => article.deposit_amount = article.amount_ht * (state.deposit_rate / 100))
                state.article_lists.map((article: Item) => article.amount_ttc = CalculateTTCAmount((article.amount_ht - article.deposit_amount), article.tva_rate))
                state.deposit_amount = state.total_amount_before_deposit_ht * (state.deposit_rate / 100)
                state.total_amount_before_deposit_ht = state.article_lists.reduce((total: number, article: Item) => total + article.amount_ht, 0)
                state.total_amount_after_deposit_ht = state.total_amount_before_deposit_ht - state.deposit_amount
                state.tva_rate = state.article_lists.reduce((total: number, article: Item) => total + Number(article.amount_ttc), 0)
                state.amount_ttc = state.tva_rate
                state.netAmount = state.amount_ttc - state.discount


            }
            //   await removeItem(action.key!)
            return { ...state }
            break;

        default:
            return state
            break;
    }
}