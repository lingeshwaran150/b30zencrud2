import { useEffect, useState } from "react";
import "./App.css";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import Badge from '@mui/material/Badge';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export function Addmobile() {

    const history = useHistory();
    const [name,setname]=useState("");
  const [poster,setposter]=useState("");
  const[model,setmodel]=useState("");
  const[price,setprice]=useState("");
  const[storage,setstorage]=useState("");
  const[battery,setbattery]=useState("");
  const[rating,setrating]=useState("");
    return (
   
        <div className="App">
          <div className="adhi">
          <h1>WELCOME TO APPLE WORLD </h1>
          <h1>📲📱📲upcoming models📲📱📲</h1>
          </div>
          <div className="movie-form">
          <TextField id="outlined-basic" label="ENTER THE NAME" variant="outlined"  onChange={(event)=>setname(event.target.value)}/>
          <TextField id="outlined-basic" label="ENTER THE POSTER" variant="outlined" onChange={(event)=>setposter(event.target.value)} />
          <TextField id="outlined-basic" label="SERIES MODEL" variant="outlined" onChange={(event)=>setmodel(event.target.value)} />
          <TextField id="outlined-basic" label="ENTER THE PRICE" variant="outlined" onChange={(event)=>setprice(event.target.value)} />
          <TextField id="outlined-basic" label="ENTER THE STORAGE" variant="outlined" onChange={(event)=>setstorage(event.target.value)} />
          <TextField id="outlined-basic" label="ENTER THE BATTERY" variant="outlined" onChange={(event)=>setbattery(event.target.value)} />
          <TextField id="outlined-basic" label="ENTER THE RATING" variant="outlined" onChange={(event)=> setrating(event.target.value)}/>

         <Button variant="contained" onClick={()=>{
           const newmobile={name:name,poster:poster,model:model,price:price,storage:storage,battery:battery,rating:rating,
         };
         fetch("https://620c529fb5736325938b91f9.mockapi.io/mobiles", {
                method: "POST",
                body: JSON.stringify(newmobile),
                headers: {
                  "Content-Type": "application/json",
                },
              }).then(() => history.push("/mobile"));
        }
        }>Add Mobile </Button>
       </div>
         
        </div>
       
      );
    }
    