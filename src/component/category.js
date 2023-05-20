import axios from "axios"
import { useState } from "react"

const getData=()=>{
    axios.get("http://localhost:8000/serviceManRegister").then((res)=>{
      setData(res.data)
     
   
       
       
      })

  }