
"use client";

import { List, ListItem } from "flowbite-react";



export default function Item({data ,removetodo ,toggle}) {
  return (
    <div className=" p-6 flex">
       
    <List className=" w-full">
      <ListItem key={data.id} className="flex justify-between border-b border-gray-300 pb-3 ">
    <div>
   {data.completed?<svg xmlns="http://www.w3.org/2000/svg" onClick={()=>toggle(data.id)} viewBox="0 0 24 24" fill="purple" className="w-8">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
</svg>
:<svg xmlns="http://www.w3.org/2000/svg"  onClick={()=>toggle(data.id)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="purple" className="w-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
}
</div>
        <div className="text-neutral-600 dark:text-white "  style={{
      textDecoration: data.completed ? "line-through" : "none",
      color: data.completed ? "gray" : "",
    }}>
                {data.text}
        
        </div>
       <div className="cursor-pointer" >
 <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>removetodo(data.id)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

          </div>
          



         </ListItem>
 

    </List>

    </div>
  
  );
}
