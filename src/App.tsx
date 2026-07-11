import { useEffect, useState } from 'react';
import { Flex, Table } from '@chakra-ui/react'
import { RiPencilFill } from "react-icons/ri";
import { FaTrashCan } from 'react-icons/fa6';

import { PrimaryButton } from '@/components/atoms/button/PrimaryButton';

import { Record } from '@/domain/record';

import { dbUsecase } from '@/utils/supabase/dbUsecase';
import { useRecord } from '@/hooks/useRecord';
import { RecordProvider } from './providers/RecordProvider';
import { DataTable } from './components/morecules/DataTable';

function App() {
  // ==========================
  //  states
  // ==========================
  // const {
  //   title, setTitle, hasTitleError,
  //   time, setTime, hasTimeError,
  //   handleAdd
  // } = useRecord();
  const { title, time, handleAdd } = useRecord();

  const [ records, setRecords ] = useState<Record[]>([]);
  const [ isTableLoading, setIsTableLoading ] = useState(true);

  useEffect(() => {
    const getAllRecords = async () => {
      const recordsData = await dbUsecase.fetchList();
      // console.record(recordsData);
      setRecords(recordsData);
      setIsTableLoading(false);
    }

    getAllRecords();
  }, []);

  if (isTableLoading) {
    return <p data-testid="loading-screen">Loading...</p>
  }

  const onClickAdd = () => alert('test.');

  return (
    <>
      <h1 data-testid="title">学習記録アプリ</h1>

      <Flex justifyContent={'flex-end'} >
        <PrimaryButton onClick={onClickAdd}
        >新規登録</PrimaryButton>
        {/* <PrimaryButton onClick={() => handleAdd(title, time)}
        >新規登録</PrimaryButton> */}
      </Flex>

      <DataTable records={records} />
    </>
  )
}

export default App
