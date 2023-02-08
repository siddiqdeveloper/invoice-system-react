
import { useEffect, useState } from 'react';
import api from '../ApiService';

const Sample = ()=>{
    const [list,setList]  =useState([]);


    useEffect( ()=>{

        api({
            url:'ecommerce',
            type:'get'
        }).then((res)=>{
            console.log(res.data);
            setList(res.data)

        })

    },[])


    return <>

    {list.map( (item)=>{

        return <h1>{item.productname}</h1>

    })

    }
    
    </>

    
}

export default Sample;