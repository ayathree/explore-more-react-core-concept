import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Rander from './Rander'
import DataLoad from './Dataload'

function App() {
const fruits = ['apple','orange','banana'];


  return (
    <>
      <h1>Vite + React</h1>
      
      {
        fruits.map(fruit=> <DataLoad name={fruit}></DataLoad> )
      }


      <Rander task='developer' isFinished={true}></Rander>
      <Rander task='not a developer' isFinished={false}></Rander>
      <Rander task='yes a developer' isFinished={true}></Rander>
      <Todo task='developer' isDone= 'yes' ></Todo>
      <Todo task='junior web developer' 
      isDone= 'yes'></Todo>
      <Todo task='fullstack web developer' 
      isDone= 'yes' ></Todo>
      <Todo task='expert and rich web developer'
       isDone= 'yes' ></Todo>
     <Person></Person>
     <Personal></Personal>
     <Developer name='Pooja' money= '20000000'></Developer>
     <Developer></Developer>
     <Student grade= 'A' age='24'></Student>
     <Student></Student>
    </>
  )
}

function Person(){
  const age = 25
  const money = 2000000;
  const person ={name:'pooja', age:'21'}
  return <h3>Iam {person.name} with money:{age + money}</h3>
}

function Personal(){
  return(
    <div className='student'>
      <h3>She is a student</h3>
      <h3>name:</h3>
      <h3>age:</h3>
    </div>
  )
}
function Developer({name, money}){
  const developerStyle = {
    border: "2px solid purple",
  padding: '20px',
  margin: '20px',
  borderRadius: '20px'
  
  }
  return(
    <div style={developerStyle}>
      <h3>Developer: {name} </h3>
      <h3>Income: {money} </h3>
    </div>
  )
}
function Student ({grade=1, age=0}){
  return (
    <div className='student'>
      <h3>I am a developer</h3>
      <h3>grade: {grade}</h3>
      <h3>age: {age}</h3>
    </div>
  )
}
export default App
