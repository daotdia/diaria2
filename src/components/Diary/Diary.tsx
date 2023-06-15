import { type FC, useRef, useState, useContext } from 'react'
import { BsSave } from 'react-icons/bs'
import { handleSave as handleSaveFromController } from './DiaryController'
import { DiariButton, DiaryWrapper, EditorWrapper, SpinnerDiari } from './Diary.styled'
import { DiaryContext } from '../../contexts/DiaryContext'
import { type Entry } from '../../models/interfaces/Entry'
import ClipLoader from 'react-spinners/ClipLoader';
import { SpinnerWrapper } from '../AIModal/AIModal.styled'

interface DiaryProps { }

const Diary: FC<DiaryProps> = () => {
   const contextValues = useContext(DiaryContext);
   const textAreaRef = useRef(null)
   const { addEntry, setNewEntryLoading, newEntryLoading } = contextValues;

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
         textAreaRef.current.value = ''
      }
   }

   return (
      <DiaryWrapper data-testid="Diary">
         <EditorWrapper disabled={newEntryLoading} ref={textAreaRef} placeholder="Hoy he conseguido..."></EditorWrapper>
         {newEntryLoading &&
            <SpinnerWrapper>
               <ClipLoader color="#777777" loading={newEntryLoading} size={250} />
            </SpinnerWrapper>
         }
         <DiariButton disabled={newEntryLoading}>
            <BsSave onClick={handleSave} size={22} strokeWidth={0.5} />
         </DiariButton>
      </DiaryWrapper>
   )
}

export default Diary


