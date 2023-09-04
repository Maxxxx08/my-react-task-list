
import {Taskdone} from './taskdone';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
export const TaskTable = ({task,toggleTask,completed=false}) => {

    const taskTabledone = (doneValue) => {
        return (
        task.filter(task=>task.done === doneValue )
        .map(task=>(
             <Taskdone  task={task} key={task.name} toggleTask={toggleTask}/>
             ))
              
        )
        
    }
    
    return (
      <>
      <div className='Tabledone'>
      
      <Tabs>
  <TabList>
    </TabList>
    <TabPanels>
      <TabPanel>
    {taskTabledone(completed)}
      </TabPanel>
    </TabPanels>
</Tabs>
</div>
</>
    );
  };
