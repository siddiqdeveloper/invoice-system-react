import { Link,Outlet } from 'react-router-dom'
function Layout() {
    return <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Invoice</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link active" to='/'>Create Invoice</Link>
          
        </li>
        <li className="nav-item">

        <Link className="nav-link " to='/invoice-list'>Invoice List</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to='/dashboard'>Dashbaord</Link>
         
        </li>
    
      </ul>
    </div>
  </div>
</nav>

<div className='container'>
<Outlet></Outlet>
</div>
    </>;
  }
  
  export default Layout;
  