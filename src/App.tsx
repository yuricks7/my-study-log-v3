import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react'

import { PrimaryButton } from '@/components/atoms/button/PrimaryButton';
import { DataTable } from '@/components/morecules/DataTable';

import { useRecord } from '@/hooks/useRecord';
import { DialogForm } from './components/morecules/dialog/DialogForm';

function App() {
  // ==========================
  //  states
  // ==========================
  const { records = [], openCreateDialog } = useRecord();

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
        <PrimaryButton onClick={openCreateDialog}
        >新規登録</PrimaryButton>
      </Flex>

      <DataTable records={records} />

      <DialogForm
        mode="create"
        pageTitle="新規登録"
        buttonLabel="登録"
      />
    </>
  )
}

export default App
