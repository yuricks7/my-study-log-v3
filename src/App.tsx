import { useEffect, useState } from 'react';
import { Box, Center, Flex, Heading, Stack } from '@chakra-ui/react'

import { PrimaryButton } from '@/components/atoms/button/PrimaryButton';
import { DataTable } from '@/components/organisms/table/DataTable';

import { useRecord } from '@/hooks/useRecord';
import { DialogForm } from './components/organisms/dialog/DialogForm';

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
      <Stack>
        <Center>
          <Heading as="h1" size="4xl" data-testid="title">学習記録アプリ</Heading>
        </Center>

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
      </Stack>
    </>
  )
}

export default App
