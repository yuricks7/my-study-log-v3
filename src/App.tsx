import { useEffect, useState } from 'react';
import { Table } from '@chakra-ui/react'
import { Button } from "./components/ui/button";
import { GetAllLogs } from './lib/log';

import type { Log } from './domain/log';

import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';

function App() {
  const [ logs, setLogs ] = useState<Log[]>([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const getAllLogs = async () => {
      const logsData = await GetAllLogs();
      console.log(logsData);
      setLogs(logsData);
      setIsLoading(false);
    }

    getAllLogs();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>
  }

  const onClickAdd = () => alert("test.");

  return (
    <>
      <h1 data-testid="title">学習ログ</h1>

      <PrimaryButton onClick={onClickAdd}>新規登録</PrimaryButton>

      <div data-testid="table">
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Title</Table.ColumnHeader>
              <Table.ColumnHeader>Time</Table.ColumnHeader>
              <Table.ColumnHeader>CreatedAt</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {logs.map((log) => (
              <Table.Row key={log.id}>
                <Table.Cell>{log.title}</Table.Cell>
                <Table.Cell>{`${log.time}時間`}</Table.Cell>
                <Table.Cell>{log.created_at}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </>
  )
}

export default App
