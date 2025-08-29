import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";


export default function Items({todo , remove,toggle}){
 const labelId = `checkbox-list-label-${todo.id}`;
const[todos,settoggle]=useState(todo)
 
 

  const removetodo =()=>{
    remove(todo.id)
  }


  const togglefunc=()=>{
    toggle(todo.id)
  }

    return(
        <>
          <ListItem
           
            secondaryAction={
              <IconButton edge="end" aria-label="comments" onClick={removetodo}>
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={togglefunc} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.completed}
                  tabIndex={-1}
                  disableRipple
                 
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${todo.text}`} />
            </ListItemButton>
          </ListItem>
       
        </>
    )
}