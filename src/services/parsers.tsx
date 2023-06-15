import { Entry } from "../models/interfaces/Entry";

export const entryToJson = (entry: Entry): string => {
   return JSON.stringify(entry);
};

export const jsonToEntry = (json: string): Entry => {
   return JSON.parse(json) as Entry;
};

export const removeAccents = (str: string): string => {
   return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}