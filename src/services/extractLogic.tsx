import { removeAccents } from "./parsers";

export const extractLogic = (topics: [string], raw_content: []): string => {
   console.log(raw_content)
   let extractedContent = ""
   let entryIndex = 0
   const characterLimit = 5000
   // Mientras que no haya suficiente contenido y haya más entradas para procesar
   while (extractedContent.length < characterLimit && entryIndex < raw_content.length) {
      let entry: any = raw_content[entryIndex]
      entryIndex++
      console.log(entry)
      const content: string = removeAccents(entry.content.S.toLowerCase())
      console.log(content)
      const summary: string = removeAccents(entry.summary.S.toLowerCase())
      const fecha: string = removeAccents(entry.fecha.S.toLowerCase())

      let encontrado = false
      // Itera sobre cada palabra clave
      for (let topic of topics) {
         console.log(topic)
         let idx = content.indexOf(removeAccents(topic).toLowerCase())

         // Si la palabra clave se encuentra en el contenido
         if (idx !== -1) {
            encontrado = true
            // Extrae los 250 caracteres anteriores y posteriores
            let start = Math.max(0, idx - 250)
            let end = Math.min(content.length, idx + topic.length + 250)
            let extract = content.slice(start, end)

            extractedContent += " Fecha: " + fecha + " Extracto relacionado: " + extract

            // Si ya se ha alcanzado el límite de caracteres, detén el bucle
            if (extractedContent.length >= characterLimit) {
               break;
            }
         }
      }
      if (encontrado && extractedContent.length < characterLimit) {
         extractedContent += " Resumen de la fecha: " + summary + " "
      }
   }

   if (extractedContent.length < characterLimit) {
      entryIndex = 0
      while (extractedContent.length < characterLimit && entryIndex < raw_content.length) {
         let entry: any = raw_content[entryIndex]
         entryIndex++
         extractedContent += " Fecha: " + entry.fecha.S + " Contenido de la fecha: " + entry.summary.S
      }
      entryIndex = 0
      while (extractedContent.length < characterLimit && entryIndex < raw_content.length) {
         let entry: any = raw_content[entryIndex]
         entryIndex++
         extractedContent += " Fecha " + entry.fecha.S + " Resumen de la fecha: " + entry.content.S
      }
   }

   return extractedContent
}