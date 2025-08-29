import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

export default function Form({addtodo}){
const[text,settext]=useState('')
const handelchange=(e)=>{
settext(e.target.value)
}
const handlesubmit=(e)=>{
e.preventDefault()
    addtodo(text)
    settext('')
}
return (
    <ListItem sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <form 
        onSubmit={handlesubmit} 
        style={{ width: "100%" }}
      >
        <TextField
          fullWidth
          id="outlined-basic"
          label="New Todo"
          variant="outlined"
          onChange={handelchange}
          value={text}
          sx={{ mb: 2 }}
          slotProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <CreateIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        required/>

        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth
          sx={{ py: 1.5, fontWeight: "bold", textTransform: "none" }}
        >
          Add
        </Button>
      </form>
    </ListItem>
  );
}
