import { EsperoDB } from "esperodb";

const dataStructure: any = [
    {
      Bills: [
        {
             indexes: [
              { _id: { unique: true } }
            ],
             primaryKey: '_id' },
      ],
    }
  ];
 export const db = new EsperoDB('AllDocs', dataStructure, 1);