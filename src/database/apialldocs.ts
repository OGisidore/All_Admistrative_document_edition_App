
import { Bill } from "../models/BIll";
import { db } from "./database";

/************************** fonction d'ajout de Bill ****************** */


/************************** fonction de mise a jour de Bill ****************** */

export const updateBill = async (bill: Bill) => {
    try {
        await db.updateData("Bills", bill)
        return {
            isSuccess: true,
            message: "Bill updated succesfully"
        }


    } catch (error) {
        console.log({ error });
        return {
            isSuccess: false,
            error
        }


    }
}


/************************** fonction de recuperation  d'une Bill ****************** */


export const getBill = async (_id: string) => {
    try {
        const bill = await db.getData("Bills", _id)
        return {
            isSuccess: true,
            result: bill
        }


    } catch (error) {
        console.log({ error });
        return {
            isSuccess: false,
            error
        }


    }
}

/************************** fonction de recuperation  de toutes les Bills ****************** */

export const getAllBill = async () => {
    console.log("hi");
    
    try {
        const bills = await db.getAllData("Bills")
        // console.log(Bills);
        
        return {
            isSuccess: true,
            results: bills,
        }


    } catch (error) {
        console.log({ error });
        return {
            isSuccess: false,
            error
        }


    }
}

/************************** fonction de suppression  d'une Bill ****************** */


export const deleteBill = async (_id: string) => {
    try {
        await db.deleteData("Bills", _id)
        return {
            isSuccess: true,
            message: "Bill deleted succesfully"
        }


    } catch (error) {
        console.log({ error });
        return {
            isSuccess: false,
            error
        }


    }
}
export const addBill = async (bill: Bill) => {
    
    
    try {
        const existing = await getBill(bill._id)

        if(existing){
            await updateBill(bill)
            return {
                isSuccess: true,
                message: "Bill updated successfully"
              };
        } else {
            await db.addData("Bills", bill)

            return {
                isSuccess: true,
                message: "Bill added succesfully"
            }

        }
       


    } catch (error) {
        console.log({ error });
        return {
            isSuccess: false,
            error
        }


    }
}


/************************** fonction de recherche d'une Bill ****************** */




/**************************fonction de recuperation de Bill par page  ****************** */

// fonction de recuperation de Bill p