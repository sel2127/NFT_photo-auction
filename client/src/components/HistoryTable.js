import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/PagesDesc.css'
import axios from 'axios';

const HistoryTable = (Props) => {
  const [bidList,setBidList]=useState([]);
  const [sqlMax,setSqlMax]=useState([]);
    
 
  useEffect(() =>{
    axios.get('http://localhost:8081/offer/get').then((response) => {
     setBidList(response.data)
    })

  }, []) 

  useEffect(() =>{
    axios.get('http://localhost:8081/offer/get').then((response) => {
     setSqlMax(response.data.sqlMax)
    })

  }, []) 

  return (
    
    <table>
      <thead>
        <tr>
          <th>Credit card num</th>
          <th>Bid</th>
          
        </tr>
      </thead>
      <tbody className='tableBody'>
      
      {bidList.map((val)=> {
    return(
      <tr>
        <td>{val.creditCard} </td>
        <td>{val.bid} </td>
      </tr>
    ) 
  } )}
 
      </tbody>
    </table>


  );
};


export default HistoryTable