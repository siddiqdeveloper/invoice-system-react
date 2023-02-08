import { useEffect, useState } from 'react';
import { useFetcher, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import instance from '../../src/api';

const ListInvoice = () => {
  let history = useNavigate();
  const [list,setList ] = useState([]);


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
      setList(res.data);
    });

  }

  const viewFn = (id) =>{
    
    history('/invoice-view/'+id);
  }


  const defn = (id) =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        instance(
          {
            url:'/invoices/'+id,
            method:'delete',
          }
        ).then((res)=>{

          getData();
          
        });




        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }



  return <>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Invoice code</th>
      <th scope="col">total amount</th>
      <th scope="col">Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>

    {list.map( (item)=>{
        console.log(item.invoice_amount);
      return <>
      
      <tr>
      <th scope="row">{item.id}</th>
      <td>{item.customer}</td>
      <td>{item.invoice_number}</td>
      <td>{item.invoice_amount}</td>
      <td>{item.status}</td>
      <td> <span className="btn btn-sm btn-primary" onClick={ (e)=>{
          viewFn(item.id);
      }}>View </span> 
      <span  onClick={ (e)=>{
        defn(item.id);
    }} className="btn btn-sm btn-primary ">Delete </span> </td>
    </tr>
      </>

    })}

    
   
  </tbody>
</table>
  </>
}

export default ListInvoice;
