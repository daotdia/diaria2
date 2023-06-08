import { Entry } from "../models/interfaces/Entry";

// Convierte un objeto Entry a JSON
export const entryToJson = (entry: Entry): string => {
   return JSON.stringify(entry);
};

// Convierte un JSON a un objeto Entry
export const jsonToEntry = (json: string): Entry => {
   return JSON.parse(json) as Entry;
};
