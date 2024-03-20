import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
function App() {
  const [value, setValue] = useState("")
  const [tasks, setTasks] = useState([])

  function details() {
    setTasks([...tasks, value])
    setValue("")
  }
  function deleteValue(index){
setTasks(tasks.filter((task,ind)=>{
return ind!==index
}))
 }
function editValue(values){
  setValue(tasks.filter((vals,index)=>{
  return vals===values
  })) 
}


  
  return (
    <>
      <h1>TO-DO LIST</h1>
      <input type="text" value={value} onChange= {(e) => { setValue(e.target.value)}} />
      <button onClick={details}>Add Task</button>
      
      <ul>
        {tasks.map((val, ind) => {
          return <>
            <li>{val}<DeleteIcon onclick={(e)=> deleteValue(ind)} />
            <EditIcon onclick={(e)=> editValue(val)}/></li>
            </>
        })}
      </ul>
      
    </>
  )
}

export default App