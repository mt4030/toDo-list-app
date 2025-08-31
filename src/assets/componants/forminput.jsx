import { useState } from "react"
import {  TextInput } from "flowbite-react";
import { HiPencil } from "react-icons/hi";
export default function Form({addtodo}){

//for input track of text
const[text,settext]=useState('')
const handelchange=(e)=>{
settext(e.target.value)
}
const handelsubmit=(e)=>{
e.preventDefault()
addtodo(text)
settext('')
}
    return(
        <>
        <form onSubmit={handelsubmit} className="" >


   <TextInput  type="text" onChange={handelchange} icon={HiPencil} className="text-blue-950 w-90 sm:w-120 rounded-lg   shadow-xl/30" name="input" value={text}  required />


        </form>
        
        </>
    )
}






