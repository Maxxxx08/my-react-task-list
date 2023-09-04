import { Fragment, useEffect, useState } from 'react';
import Header from './componentes/Header';
import Tasklist from './componentes/tasklist';
import {TaskTable} from './componentes/task'
import { TaskControl } from './componentes/taskcontrol';
function App() {
  const [taskitems, setTaskitems] = useState([]);
  const [completed, setCompleted] = useState(false)
  
  function taskCreate(taskName) {
   if (!taskitems.find (task=> task.name===taskName)){
    setTaskitems([...taskitems, { name: taskName, done: false }]);
        }
     
    }

    const toggleTask = task => {
        setTaskitems(prevTaskItems =>
          prevTaskItems.map(tks =>
            tks.name === task.name ? { ...tks, done: !tks.done } : tks
          )
        );
      };

    useEffect(()=> {
        let content =  localStorage.getItem('tasks')
        if (content){
            setTaskitems(JSON.parse(content))
        }
        
    },[])


    const cleanTask= () => {
      setTaskitems (taskitems.filter(task => !task.done))
      setCompleted(false)
    }


    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(taskitems));


    }, [taskitems])

 


  return (
    <>
      <Header />
      <Tasklist taskCreate={taskCreate} />
      <TaskTable task={taskitems} toggleTask={toggleTask}/>
      <TaskControl ischecked={completed} setCompleted={(checked)=>setCompleted(checked)} cleanTask={cleanTask} />
      {completed === true && (
<TaskTable  task={taskitems} toggleTask={toggleTask} completed={completed}/>
)
}

 
    </>
  );
}

export default App;
