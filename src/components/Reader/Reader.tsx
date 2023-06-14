import React, { FC, useContext } from 'react';
import { Content, Fecha, ReaderWrapper, Summary, Title } from './Reader.styled';
import { BsPlusCircle } from 'react-icons/bs';
import { DiaryWrapper, DiariButton } from '../Diary/Diary.styled';
import { handleSave } from '../Diary/DiaryController';
import { DiaryContext } from '../../contexts/DiaryContext';
import { formatDate } from '../../util/Time';

interface ReaderProps { }

const Reader: FC<ReaderProps> = () => {

   const { actualEntry, addActualEntry } = useContext(DiaryContext);

   const date = formatDate(actualEntry.fecha)

   return (
      <DiaryWrapper data-testid="Reader">
         <ReaderWrapper>
            <Title>{actualEntry.title}</Title>
            <Summary>{actualEntry.summary}</Summary>
            <hr />
            <Content>{actualEntry.content}</Content>
            <Fecha>
               {date.date}
               &nbsp;
               {date.hour}
            </Fecha>
         </ReaderWrapper>
         <DiariButton disabled={false}>
            <BsPlusCircle onClick={() => { addActualEntry(undefined) }} size={22} strokeWidth={0.5} />
         </DiariButton>
      </DiaryWrapper>
   )
};

export default Reader;
