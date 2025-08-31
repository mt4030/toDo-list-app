import { useState , useEffect } from "react";
import Form from "./forminput";
import { v4 as uuid } from 'uuid';
import Item from "./item";
export default function Todoup(){
 const initialtodo=()=>{
 const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
 }
const[data,setdata]=useState(initialtodo)

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(data));
}, [data]);

const addtodo=(text)=>{
   setdata((pre)=>{
    return [...pre,{text:text,id:uuid(),completed:false}]
   })
}

const removetodo=(id)=>{
    setdata((pre)=>{
    return pre.filter((f)=>f.id!==id)
    })
}

const toggle =(id)=>{
   setdata(pre=>{
    return pre.map(todo=>{
        if(todo.id===id){
            return {...todo,completed:!todo.completed}
        }else{return todo}
    })
   })

    }


return(
   <>
<div className=" w-full h-64 flex justify-center items-center flex-col background" > 
    <h1 className="text-amber-50 text-5xl pb-6">T O D O</h1>
    <Form addtodo={addtodo}  />

  </div>
  <div className="flex  justify-center  -mt-10 px-10 ">
      <div className="w-219  rounded-lg  h-[50vh] shadow-xl/30bg-white dark:bg-gray-800 overflow-y-auto " > 
           {data.map((todo)=>{
            return  <Item key={todo.id} toggle={toggle} removetodo={removetodo} data={todo} />
        })}
    </div>
  </div>
  
      
     
      
       </>
)

}