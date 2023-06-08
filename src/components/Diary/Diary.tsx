import { type FC, useRef, useState, useContext } from 'react'
import { BsSave } from 'react-icons/bs'
import { handleSave as handleSaveFromController } from './DiaryController'
import { DiariButton, DiaryWrapper, EditorWrapper } from './Diary.styled'
import { DiaryContext } from '../../contexts/DiaryContext'
import { type Entry } from '../../models/interfaces/Entry'

interface DiaryProps { }

const Diary: FC<DiaryProps> = () => {
   const contextValues = useContext(DiaryContext);
   const textAreaRef = useRef(null)
   const { addEntry, setNewEntryLoading } = contextValues;

   const handleSave = async () => {
      const text = textAreaRef.current.value
      setNewEntryLoading(true)
      const entry: Entry = {
         title: '',
         content: text,
         summary: '',
         fecha: Date.now().toString(),
         id_user: '',
         id: ''
      }
      const newEntry: Entry = await handleSaveFromController(entry)
      if (newEntry !== null) {
         setNewEntryLoading(false)
         addEntry(newEntry)
         textAreaRef.current.value = ''  // esto limpiará el contenido del textarea
      }
   }

   return (
      <DiaryWrapper data-testid="Diary">
         <EditorWrapper ref={textAreaRef} placeholder="Hoy he conseguido..." />
         <DiariButton>
            <BsSave onClick={handleSave} size={22} strokeWidth={0.5} />
         </DiariButton>
      </DiaryWrapper>
   )
}

export default Diary


