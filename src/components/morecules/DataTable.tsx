import React, { memo, useState } from "react";
import { Table } from "@chakra-ui/react";
import { RiPencilFill } from "react-icons/ri";
import { FaTrashCan } from "react-icons/fa6";

import type { Record } from "@/domain/record";

import { ReactIconButton } from "@/components/atoms/button/ReactIconButton";

import { useRecord } from "@/hooks/useRecord";

type Props = {
  records: Record[];
}

export const DataTable: React.FC<Props> = memo((props) => {
  const { records } = props;

  const { openEditDialog } = useRecord();

  return (
    <Table.Root data-testid="table">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>学習内容</Table.ColumnHeader>
          <Table.ColumnHeader>学習時間</Table.ColumnHeader>
          <Table.ColumnHeader></Table.ColumnHeader>
          <Table.ColumnHeader></Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {records.map((record: Record) => (
          <Table.Row key={record.id}>
            <Table.Cell>{record.title}</Table.Cell>

            <Table.Cell>{`${record.time}時間`}</Table.Cell>

            <Table.Cell>
              <ReactIconButton onClick={
                () => {
                  openEditDialog(record);
                  // openDialog();
              }}>
                <RiPencilFill/>
              </ReactIconButton>
            </Table.Cell>

            <Table.Cell>
              <ReactIconButton onClick={
                () => alert('delete.')
              }>
                <FaTrashCan/>
              </ReactIconButton>
            </Table.Cell>

          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
});