import React, { memo } from "react";
import { Table } from "@chakra-ui/react";
import { RiPencilFill } from "react-icons/ri";
import { FaTrashCan } from "react-icons/fa6";

import type { Record } from "@/domain/record";

import { ReactIconButton } from "@/components/atoms/button/ReactIconButton";

import { useRecord } from "@/hooks/useRecord";
import { DialogForm } from "@/components/organisms/dialog/DialogForm";

type Props = {
  records: Record[];
}

export const DataTable: React.FC<Props> = memo((props) => {
  const { records } = props;

  const { openEditDialog, handleDelete } = useRecord();

  return (
    <>
      <Table.Root size="lg" interactive stickyHeader data-testid="table">
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
                <ReactIconButton
                  label="edit"
                  onClick={
                    () => openEditDialog(record)
                  }
                >
                  <RiPencilFill/>
                </ReactIconButton>
              </Table.Cell>

              <Table.Cell>
                <ReactIconButton
                  label="delete"
                  onClick={
                    () => {
                      let m = "";
                      m += "このレコードを削除しますか？\n";
                      m += `学習内容: ${record.title}\n`;
                      m += `学習時間: ${record.time}時間`;
                      if (confirm(m)) handleDelete(record.id)
                    }
                  }
                >
                  <FaTrashCan/>
                </ReactIconButton>
              </Table.Cell>

            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <DialogForm
        mode="edit"
        pageTitle="記録編集"
        buttonLabel="更新"
      />
    </>
  );
});