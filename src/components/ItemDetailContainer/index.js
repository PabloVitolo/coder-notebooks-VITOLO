import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/Index'
import { getData } from '../../Mocks/ApiProductos'
import PulseLoader from 'react-spinners/PulseLoader';

const ItemListContainer = ({greeting}) => {
  const [productList, setProductList]=useState([])
  const [loading, setLoading]=useState(true)
    
  //promesa con try cathc finally 
    const getProducts = async () => {
      try{
        const respuesta = await getData
        setProductList(respuesta)
      }catch(error){
        console.log(error)
      }finally{
        setLoading(false)
      }
    }

    useEffect(()=>{
      getProducts()
    },[])

  return (
    <div className="landing">
      <span>{greeting}</span>
      {loading ? <PulseLoader /> : <ItemList productList={productList}/> }
    </div>
  );
};

export default ItemListContainer;
