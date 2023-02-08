import { useState } from 'react';
import styles from './my.module.css';
import instance from '../../src/api';
import Swal from 'sweetalert2'
const AddInvoice = ()=> {


  const setValues= (e)=>{

    setForm( (old)=>{

      return {...old,[e.target.name]:e.target.value};
    
    })
  }
 


  const [form,setForm] = useState({invoice_code:'',customer:'',invoice_amount:'',status:'',balance_amount:'',date:''})
  return <>
<div className='col-md-5'>

<br></br>

<form >

  

<div className="form-group mt-10">
    <label >Invoice num</label>
    <input type="text" name='invoice_number' onKeyUp={ (e)=>{

    setValues(e);
    
    } }  className={'form-control '+styles.bigblue} ></input>
  </div>
  <div className="form-group mt-10">
    <label >Customer name {form.customer}</label>
    <input type="text" name='customer' onKeyUp={ (e)=>{

    setValues(e);
    
    } }  className={'form-control '+styles.bigblue} ></input>
  </div>
  <div className="form-group mt-10">
    <label>Invoice Amount</label>
    <input type="text" onKeyUp={ (e)=>{

setValues(e);

} } name='invoice_amount' className="form-control" ></input>
  </div>

  <div className="form-group mt-10">
    <label>Balance Amount</label>
    <input type="text" onKeyUp={ (e)=>{

setValues(e);

} } name="balance_amount" className="form-control" ></input>
  </div>
  <div className="form-group mt-10">
    <label>Date</label>
    <input type="date" onChange={ (e)=>{

setValues(e);

} } name="date" className="form-control" ></input>
  </div>

  <div className="form-group mt-10">
    <label>Status</label>
   <select onChange={ (e)=>{

setValues(e);

} } className="form-control" name='status'>
      <option>Select</option>
     <option value='pending'>Pending</option>
     <option value='patial'>Partial</option>
     <option value='paid'>Full</option>
   </select>
  </div>
  <br></br>


  <button  type="submit" onClick={ async (e)=>{

    e.preventDefault();

    await instance(
      {
        url:'/invoices',
        method:'post',
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

export default AddInvoice;
