import { useState,useEffect } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

function App() {
  
const [value, setValue]= useState([]);


useEffect( ()=>  {

  console.log("Entered useEffect")
const fetch = async () => {

  
  try {
    
    const result = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken');

console.log(result.data.meals);

    setValue(result.data.meals);
  } catch (error) {
    console.log(error);
  }
}
 fetch();

},[]);


  return (
    <>


 <div className='m-3 row '>

  <h1 className='fw-bold text-center'>Meals App UI</h1>
 {

value.map((item)=>

 <div className='col-lg-3 col-md-6 col-12 p-3 ' >
<div className='p-3 bg-white rounded-4' style={{boxShadow:"3px 3px 15px #eeeeee"}}>
<img className='img-fluid mb-3 bg-white rounded-3' style={{height:"200px", width:"100%" , objectFit:"cover", }} src={item.strMealThumb} alt="" />
<h5 className='mb-2 bg-white fw-bold'>{item.strMeal }</h5>
<div id='container' className='bg-white pe-3' style={{textAlign:"justify", color:"#86908fbb", fontSize:"14px", lineHeight:"23px"}}>
  <div id='content' className='bg-white'>
  {item.strInstructions}
  </div>
 </div>
</div>
 </div>

)
}
  </div>    


    

    </>
  )
}

export default App
