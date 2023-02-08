import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import styles from './my.module.css';
import instance from '../../src/api';

function ViewInvoice() {
  const data = useParams();
  const [form,setForm] = useState({invoice_code:'',customer:'',invoice_amount:'',status:'',balance_amount:'',date:''})
  console.log(data.id);

  useEffect( () =>{

    instance(
      {
        url:'/invoices/'+data.id,
        method:'get',
      }
    ).then((res)=>{
      console.log(res)
      setForm(res.data);
    });


  },[]);
 

  
  const setValues= (e)=>{

    setForm( (old)=>{

      return {...old,[e.target.name]:e.target.value};
    
    })
  }
 


  
  return <>
<div className='col-md-5'>

<br></br>

<form >
  <h1>{form.customer}</h1>

  <div className="form-group mt-10">
    <label >Invoice num</label>
    <input type="text" defaultValue={form.invoice_number} name='invoice_number' onKeyUp={ (e)=>{

    setValues(e);
    
    } }  className={'form-control '+styles.bigblue} ></input>
  </div>

  <div className="form-group mt-10">
    <label >Customer name {form.customer}</label>
    <input type="text" name='customer' defaultValue={form.customer} onKeyPress={ (e)=>{

    setValues(e);
    
    } }  className={'form-control '+styles.bigblue} ></input>
  </div>
  <div className="form-group mt-10">
    <label>Invoice Amount</label>
    <input type="text" onKeyUp={ (e)=>{

setValues(e);

} } name='invoice_amount' defaultValue={form.invoice_amount}  className="form-control" ></input>
  </div>

  <div className="form-group mt-10">
    <label>Balance Amount</label>
    <input type="text" defaultValue={form.balance_amount} onKeyUp={ (e)=>{

setValues(e);

} } name="balance_amount" className="form-control" ></input>
  </div>
  <div className="form-group mt-10">
    <label>Date</label>
    <input type="date" defaultValue={form.date} onChange={ (e)=>{

setValues(e);

} } name="date" className="form-control" ></input>
  </div>

  <div className="form-group mt-10">
    <label>Status {form.status}</label>
   <select  onChange={ (e)=>{

setValues(e);

} } className="form-control" name='status'>
      <option>Select</option>
      <option value='pending'>Pending</option>
     <option value='patial'>Partial</option>
     <option value='paid'>Paid</option>
   </select>
  </div>
  <br></br>


  <button  type="submit" onClick={ async (e)=>{

    e.preventDefault();

    await instance(
      {
        url:'/invoices/'+data.id,
        method:'put',
        data:form
      }
    ).then((res)=>{
      console.log(res)

      Swal.fire({
        title: 'Auto close alert!',
        html: 'I will close in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          const timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })

      setForm({customer:'',invoice_amount:'',status:'',balance_amount:'',date:''});
    })


  

    console.log(form)


  } } className="btn btn-primary">Save</button>
</form>
</div>
  </>
}

export default ViewInvoice;
