import { useState } from 'react';
import styles from './my.module.css';
const AddInvoice = ()=> {


  const setValues= (e)=>{

    setForm( (old)=>{

      return {...old,[e.target.name]:e.target.value};
    
    })
  }
 


  const [form,setForm] = useState({customer:'',invoice_amount:'',status:'',balance_amount:'',date:''})
  return <>
<div className='col-md-5'>

<br></br>

<form >
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

} } name='invoice_amount' onKeyUp={ (e)=>{

  setValues(e);
  
  } } className="form-control" ></input>
  </div>

  <div className="form-group mt-10">
    <label>Balance Amount</label>
    <input type="text" onKeyUp={ (e)=>{

setValues(e);

} } name="balance_amount" className="form-control" ></input>
  </div>
  <div className="form-group mt-10">
    <label>Date</label>
    <input type="text" onKeyUp={ (e)=>{

setValues(e);

} } name="date" className="form-control" ></input>
  </div>

  <div className="form-group mt-10">
    <label>Status</label>
   <select onChange={ (e)=>{

setValues(e);

} } className="form-control" name='status'>
      <option>Select</option>
     <option value='patial'>Partial</option>
     <option value='full'>Full</option>
   </select>
  </div>
  <br></br>
  <button  type="submit" onClick={ (e)=>{

    e.preventDefault();

    console.log(form)


  } } className="btn btn-primary">Save</button>
</form>
</div>
  </>
}

export default AddInvoice;
