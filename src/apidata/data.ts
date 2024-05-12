import { Design } from "../models/Design";
import { Service } from "../models/Services";

export const services: Service[] = [
    {
        name: "Fature",
        imageUrl: "/laptop-3196481_640.jpg",
        slug: "fature",
        created_at: new Date()
    },
    {
        name: "Devis",
        imageUrl: "/bookkeeping-615384_1280.jpg",
        slug: "devis",
        created_at : new Date()
    },
]

export const templates: Design[] = [
    {
        _id: 1,
        name : "template 1",
        style: "  bg-white rounded shadow-md",
        created_at : new Date()
    },
    {
        _id: 1,
        name : "template 2",
        style: "  bg-gradient-to-r from-green-500 from-15% to-white-500 to-10%  rounded shadow-md",
        created_at : new Date()
    },
    {
        _id: 2,
        name : "template 1",
        style: "  bg-gradient-to-r from-indigo-500 from-15% to-white-500 to-10%  rounded shadow-md",
        created_at : new Date()
    },
    {
        _id: 3,
        name : "template 1",
        style: "  bg-gradient-to-r from-violet-500 from-15% to-white-500 to-10%  rounded shadow-md",
        created_at : new Date()
    },
    {
        _id: 4,
        name : "template 1",
        style: "  bg-gradient-to-r from-red-500 from-15% to-white-500 to-10%  rounded shadow-md",
        created_at : new Date()
    },
    {
        _id: 5,
        name : "template 1",
        style: "  bg-gradient-to-r from-orange-500 from-15% to-white-500 to-10%  rounded shadow-md",
        created_at : new Date()
    },
    {
        _id: 6,
        name : "template 1",
        style: "  bg-gradient-to-r from-pink-500 from-15% to-white-500 to-10%  rounded shadow-md",
        created_at : new Date()
    },
    {
        _id: 7,
        name : "template 1",
        style: "  bg-gradient-to-r from-blue-500 from-15% to-white-500 to-10%  rounded shadow-md",
        created_at : new Date()
    },
    {
        _id: 8,
        name : "template 1",
        style: "  bg-gradient-to-r from-gray-500 from-15% to-white-500 to-10%  rounded shadow-md",
        created_at : new Date()
    },
    {
        _id: 9,
        name : "template 1",
        style: "  bg-gradient-to-r from-indigo-500 from-15% to-white-500 to-10%  rounded shadow-md",
        created_at : new Date()
    }
]
