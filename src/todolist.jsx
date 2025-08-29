import { useState ,useEffect } from "react";
import List from '@mui/material/List';
import Items from "./item";
import Form from "./form";
import Box from '@mui/material/Box';
import { v4 as uuid } from 'uuid';
import ButtonAppBar from './appbar'


export default function Todolist (){
  const initialtodo=()=>{
    const data=JSON.parse(localStorage.getItem('todos'))
    if (!data)return[]
    return data
  }
const[todos,settodo]=useState(initialtodo)

useEffect(()=>{
localStorage.setItem('todos',JSON.stringify(todos))
},[todos])



const removetodos=(id)=>{
    settodo(prevtodos=>{
        return prevtodos.filter((d)=>d.id !==id)
    })
}

const toggletodo=(id)=>{
    settodo(pretodo=>{
        return pretodo.map(todo=>{
            if(todo.id===id){
                return {...todo,completed:!todo.completed}
            }else{return todo}
        })
    })
}

const addtodo=(text)=>{
  settodo(pretodo=>{
  return  [...pretodo,{text:text , id:uuid() ,completed:false}]
  })  
}


return(
    <div className="maincontent">
     <ButtonAppBar/>

<Box sx={{display:'flex', justifyContent:'center', flexDirection:'column' , alignItems:'center' ,m:3
}} >
    <h1 style={{color:'white'}}>todos</h1>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
           
{todos.map((todo) => {
    return <Items todo={todo} key={todo.id} remove={removetodos} toggle={toggletodo} />
      })}
      <Form addtodo={addtodo}/>
    </List>
    </Box>
    </div>

)

}

