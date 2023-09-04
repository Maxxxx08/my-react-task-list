import React,{useState} from 'react';
import './estilos/style.css'

const Tasklist = ({taskCreate}) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (task.trim() !== '') { 
     taskCreate(task); 
      setTask(''); 
    }
  }

 

  return (
    <>
      <form className='putTask' onSubmit={handleSubmit}>
       
      <div className="InputContainer">
        <input 
          type='text'
          placeholder='Añade una Tarea'
          value={task}
          onChange={(e) => setTask(e.target.value)} 
          className="container" 
          name="text"
        />
     
              </div>


      </form>
      <div>
              <button className='savetask'>Guardar Tarea</button>
              </div>
    </>
  )
};

export default Tasklist;
