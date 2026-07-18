import { Box } from "@chakra-ui/react"
import EditDialog from "@/components/morecules/EditDialog"

export default function App() {

  return (
    <Box p={4}>
      <EditDialog pageTitle="新規登録" buttonLabel="登録" />
      <EditDialog pageTitle="記録編集" buttonLabel="更新"/>
    </Box>
  )
}