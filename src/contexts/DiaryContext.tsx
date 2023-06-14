import React, { type ReactNode, createContext, useState } from 'react'
import { type Entry } from '../models/interfaces/Entry' // Importa tu modelo Entry

interface DiaryContextProps {
  actualEntry: Entry | undefined
  addActualEntry: (entry: Entry) => void
  entries: Array<Entry> | []
  addEntry: (entry: Entry) => void
  addEntrys: (entries: Entry[]) => void
  replaceEntrys: (entries: Entry[]) => void
  newEntryLoading: boolean
  setNewEntryLoading: (loading: boolean) => void
  isFetching: boolean
  setIsFetching: (isFetch: boolean) => void
}

export const DiaryContext = createContext<DiaryContextProps>({
  entries: [],
  actualEntry: undefined,
  addActualEntry: () => { },
  addEntry: () => { },
  addEntrys: () => { },
  replaceEntrys: () => { },
  newEntryLoading: false,
  setNewEntryLoading: () => { },
  isFetching: false,
  setIsFetching: () => { }
})

interface DiaryProviderProps {
  children: ReactNode // Define que children es una propiedad permitida
}

export const DiaryProvider: React.FC<DiaryProviderProps> = ({ children }) => {
  const [actualEntry, setActualEntry] = useState<Entry>(undefined)
  const [entries, setEntries] = useState<Entry[]>([])
  const [newEntryLoading, invertLoading] = useState(false)
  const [isFetching, invertFetch] = useState(false)

  const addActualEntry = (entry: Entry): void => {
    setActualEntry(entry)
  }

  const addEntry = (entry: Entry): void => {
    setEntries([...entries, entry])
  }

  const addEntrys = (newEntries: Entry[]): void => {
    setEntries([...entries, ...newEntries])
  }

  const setNewEntryLoading = (loading: boolean) => {
    invertLoading(loading)
  }

  const setIsFetching = (isFetch: boolean) => {
    invertFetch(isFetch)
  }

  const replaceEntrys = (entries: Entry[]) => {
    setEntries(entries)
  }

  return (
    <DiaryContext.Provider value={{
      actualEntry,
      addActualEntry,
      entries,
      addEntry,
      addEntrys,
      replaceEntrys,
      newEntryLoading,
      setNewEntryLoading,
      isFetching,
      setIsFetching
    }}>
      {children}
    </DiaryContext.Provider>
  )
}
