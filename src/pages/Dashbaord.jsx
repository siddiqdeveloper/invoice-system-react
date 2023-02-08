import { useEffect, useState } from "react";
import instance from "../api";

const Dashbaord = () => {
  const[lables,setLables] = useState({total:0,pending:0,patial:0,paid:0})

  useEffect(()=>{

    getData();

  },[])

  const getData = () =>{

    instance(
      {
        url:'/invoices',
        method:'get',
      }
    ).then((res)=>{
      console.log(res)

      setLables((old)=>{
        return {...old,total:res.data.length}
      })

      let patial = res.data.filter( (e)=>{
        return e.status == 'patial';
      })
      
      setLables((old)=>{
        return {...old,patial:patial.length}
      })

      let paid = res.data.filter( (e)=>{
        return e.status == 'paid';
      })
      
      setLables((old)=>{
        return {...old,paid:paid.length}
      })

      let pending = res.data.filter( (e)=>{
        return e.status == 'pending';
      })
      
      setLables((old)=>{
        return {...old,pending:pending.length}
      })


    
    });

  }



  return <>
    <div class="container">
    
    <div class="row">

	<div class="four col-md-3">
		<div class="counter-box colored">
			<i class="fa fa-th-list"></i>
			<span class="counter">{lables.total}</span>
			<p>Total Invoice</p>
		</div>
	</div>
	<div class="four col-md-3">
		<div class="counter-box">
			<i class="fa fa-th-list"></i>
			<span class="counter">{lables.paid}</span>
			<p>Total Paid Invoices</p>
		</div>
	</div>
	<div class="four col-md-3">
		<div class="counter-box">
			<i class="fa fa-th-list"></i>
			<span class="counter">{lables.pending}</span>
			<p>Total Pending</p>
		</div>
	</div>
	<div class="four col-md-3">
		<div class="counter-box">
			<i class="fa fa-th-list"></i>
			<span class="counter">{lables.patial}</span>
			<p>Total patial</p>
		</div>
	</div>
  </div>	
</div>
  </>
}

export default Dashbaord;
