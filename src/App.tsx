import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react'

import { Record } from '@/domain/record';

import { PrimaryButton } from '@/components/atoms/button/PrimaryButton';
import { DataTable } from '@/components/morecules/DataTable';
import { EditDialog } from '@/components/morecules/EditDialog';

import { useRecord } from '@/hooks/useRecord';

function App() {
  // ==========================
  //  states
  // ==========================
  const { openDialog, records } = useRecord();

  // ==========================
  //  states
  // ==========================
  const [ record, setRecord ] = useState<Record | null>(null);
  const [ isTableLoading, setIsTableLoading ] = useState(true);

  // ==========================
  //  load
  // ==========================
  useEffect(() => {
    setIsTableLoading(false);
  })

  if (isTableLoading) {
    return <p data-testid="loading-screen">Loading...</p>
  }

  return (
    <>
      <h1 data-testid="title">学習記録アプリ</h1>

      <Flex justifyContent={'flex-end'} >
        <PrimaryButton onClick={openDialog}
        >新規登録</PrimaryButton>
      </Flex>

      <DataTable records={records} />
      <EditDialog
        pageTitle={'新規登録'}
        buttonLabel={'登録'}
        record={record ?? { id: '', title: '', time: 0 }}
      />
    </>
  )
}

export default App
