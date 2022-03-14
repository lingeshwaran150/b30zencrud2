import { useEffect, useState } from "react";
import {  faIndianRupee,faAppleAlt,  faMobileAndroid, faStoreAlt, faStoreSlash, faBattery, faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./App.css";
import SdStorageIcon from '@mui/icons-material/SdStorage';
import Button from '@mui/material/Button';
import AppleIcon from '@mui/icons-material/Apple';
import Badge from '@mui/material/Badge';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';

export function Mobile() {
  const[movieList,setMovieList]=useState([]);

  useEffect(()=>{
    fetch("https://620c529fb5736325938b91f9.mockapi.io/mobiles")
    .then((data)=>data.json())
    .then((mvs)=>setMovieList(mvs));
  },[])
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
    <h1> <FontAwesomeIcon icon={faAppleAlt}></FontAwesomeIcon> WELCOME TO APPLE WORLD <FontAwesomeIcon icon={faAppleAlt}></FontAwesomeIcon></h1>
    <h1>MOST ANTICIPATED OFFERS WAITING!!! </h1>
    <h2>UPCOMING MODELS</h2>
    </div>
   
   <div className="movie-list">
 
   {movieList.map((nm)=><Msg name={nm.name} poster={nm.poster} model={nm.model}
   price={nm.price} storage={nm.storage} battery={nm.battery} camera={nm.camera} rating={nm.rating} />)}
 
   </div>
   
  </div>
  );
}

function Msg({name,poster,model,price, storage,battery,camera,rating}){
  
  const [show,setShow]=useState(false);
 return(
   <Card>
    <div className="movie">
         <img   className="movie-poster"  src= {poster}  alt="profile pic"></img>
     <CardContent>
     <h3 className="movie-name">{name}
     <IconButton 
      color="primary" 
      aria-label="add to shopping cart"
      onClick={()=>setShow(!show)}
      >
  <ExpandCircleDownIcon />
</IconButton></h3>
    {show ? <h3 className="movie-name"><IconButton aria-label="delete"> <PhoneAndroidIcon/></IconButton>:{model}</h3> :""}
    {show ? <h3 className="movie-name"><FontAwesomeIcon icon={faIndianRupee}></FontAwesomeIcon> :{price}</h3> :""}
    {show ? <h3 className="movie-name"><IconButton aria-label="delete"> <SdStorageIcon/></IconButton>:{storage}</h3> :""}
    {show ? <h3 className="movie-name"><FontAwesomeIcon icon={faBattery}></FontAwesomeIcon> :{battery}</h3> :""}
    {show ? <h3 className="movie-name"><FontAwesomeIcon icon={faCamera}></FontAwesomeIcon> :{camera}</h3> :""}
    {show ? <h3 className="movie-rating"><IconButton aria-label="delete"> <ThumbsUpDownIcon/></IconButton>:{rating}<RatingSIze/></h3> :""}
  
     
    
     <Counter />
     
     </CardContent>
    </div>
    </Card>
  );
}
function Counter(){
  const[like,setLike]=useState(0);
  const[dislike,setdislike]=useState(0);
  useEffect(()=>{
    console.log('like is updated',like);
  },[like])
  return(
    
    <div className="kii">
      
 <Button  variant="outlined" className="abd" 
  onClick={()=>setLike(like+1)} > <Badge badgeContent={like} color="primary">
      👍
    </Badge></Button>
      <Button variant="outlined"  className="abd"
      onClick={()=>setdislike(dislike+1)}  ><Badge badgeContent={dislike} color="error">
      👎
    </Badge></Button>

    </div>
  
  )
}
function RatingSIze() {
  return (
    <Stack spacing={1}>
      <div>
      <Rating name="size-large" defaultValue={2} size="large" />
      </div>
    </Stack>
  );
}
