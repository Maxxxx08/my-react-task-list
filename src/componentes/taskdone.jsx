import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
export const Taskdone = ({task, toggleTask}) => {

return (
    <>
     
<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption></TableCaption>
    <Thead>
    </Thead>
    <Tbody>
      <Tr>
        <Td>    {task.name}
    <input 
    id="check"
    type="checkbox" 
    checked={task.done}
    onChange={()=> toggleTask(task)}
    /></Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>

 
  </>
)
}