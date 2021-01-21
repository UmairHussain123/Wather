import React, { useEffect, useState } from 'react';
import CloudTwoToneIcon from '@material-ui/icons/CloudTwoTone';
import PlaceIcon from '@material-ui/icons/Place';
import Paper from '@material-ui/core/Paper';
import './App.css';
import CountUp from 'react-countup';
import CircularProgress from '@material-ui/core/CircularProgress';
const App=()=>{
 const [city ,setcity]=useState(null);
 const [search,setSearch]=useState('Karachi');
  //api.openweathermap.org/data/2.5/weather?q={city name}&appid=edda8d45c379121c956b2235731af62b
  useEffect(()=>{
    const fatchApi= async()=>{
       const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=edda8d45c379121c956b2235731af62b`
       const resp= await fetch(url);
       const resjson= await resp.json();
       setcity(resjson.main);
       console.log(resjson.main);
    }
    fatchApi();
  },[search])
  return(
  <> <div className='Maindiv'>
    <div className="paper" >

  <input type="search" onChange={(event)=>{setSearch(event.target.value)  }}/>
 <br/>
  {!city ? (
    <CircularProgress />
  ):(<> 
  <h1><PlaceIcon className="icone"/> {search}</h1>
  <CloudTwoToneIcon/>
  <h2 className='temp'> <CountUp start={0}
  end={city.temp} duration={1}
  /></h2>
  <h4 className='mintemp'>Min {city.temp_min}Cel ||Max {city.temp_max} Cell</h4>
 
  </>)
  }
  </div>
</div>
  </>)
}
export default App;