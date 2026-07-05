import { useEffect, useState } from 'react';
import { Table } from '@chakra-ui/react'
import { RiPencilFill } from "react-icons/ri";
import { FaTrashCan } from 'react-icons/fa6';

import { PrimaryButton } from './components/atoms/button/PrimaryButton';

import type { Log } from './domain/log';

import { GetAllLogs } from './lib/log';

function App() {
  const [ logs, setLogs ] = useState<Log[]>([]);
  const [ isTableLoading, setIsTableLoading ] = useState(true);

  useEffect(() => {
    const getAllLogs = async () => {
      const logsData = await GetAllLogs();
      console.log(logsData);
      setLogs(logsData);
      setIsTableLoading(false);
    }

    getAllLogs();
  }, []);

  if (isTableLoading) {
    return <p>Loading...</p>
  }

  const onClickAdd = () => alert("test.");

  return (
    <>
      <h1 data-testid="title">学習記録アプリ</h1>

      <PrimaryButton onClick={onClickAdd}>新規登録</PrimaryButton>

      <div data-testid="table">
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>学習内容</Table.ColumnHeader>
              <Table.ColumnHeader>学習時間</Table.ColumnHeader>
              <Table.ColumnHeader></Table.ColumnHeader>
              <Table.ColumnHeader></Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {logs.map((log) => (
              <Table.Row key={log.id}>
                <Table.Cell>{log.title}</Table.Cell>
                <Table.Cell>{`${log.time}時間`}</Table.Cell>
                <Table.Cell><RiPencilFill/></Table.Cell>
                <Table.Cell><FaTrashCan/></Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </>
  )
}

export default App
