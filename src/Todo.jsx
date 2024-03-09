import './App.css'

export default function Todo({task, isDone}){
    return (
        <div  className='student'>
           <li>Task: {task}  </li>
           <li>Complete: {isDone}</li>
        </div>
    )
}