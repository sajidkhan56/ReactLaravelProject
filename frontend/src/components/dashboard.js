import Logo from './images/logo.png';
import './css/file.css';
import {useState} from 'react';
import {Nav, Dropdown, Card, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AboutUs from './aboutus';
import Investor from './investor';



function Dashboard()
{   const [name, setName] = useState(localStorage.getItem('user-name'));
    const intialvalues = {
        dashboard: true,
        newproduct: false,
        newnews: false,
        newinvestor: false,
        abouthonda: false

    }

    const [allvalues, setAllValues] = useState(intialvalues);
    const navigate = useNavigate();
    

    function logout()
    {
        localStorage.clear();
        navigate('/login');
    }

   

    return (
        <>
            <Nav className="navbar navbar-expand-lg navbar-light nav_style">
                <div className='logo'>
                    <img src={Logo} height="40" width="120"></img>
                </div>
                <div style={{ position: 'absolute', right: 0 }}>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className='m-2 shadow-none drop'>
                        <FontAwesomeIcon icon="fas fa-user-circle" size="lg" className='fa-fw'/>{name}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#" onClick={logout}>
                            <FontAwesomeIcon icon="fas fa-sign-out-alt" size="lg" className="fa-fw"/>
                            Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Nav>
            <div className='sidebar justify-content-center'>
            <Button className={allvalues.dashboard ? 'btn btn-secondary active forbtn' : 'btn btn-secondary forbtn'} 
                onClick={
                    () => setAllValues(oldstate => ({...oldstate, dashboard: true, newproduct: false,
                         newnews: false, newinvestor: false, abouthonda: false }))
                }>
                <FontAwesomeIcon icon="fas fa-tachometer-alt" size="lg" className="fa-fw" />
                <a href="#">Dashboard</a></Button><br /><br />


                <Button className={allvalues.newproduct ? 'btn btn-secondary active forbtn' : 'btn btn-secondary forbtn'} 
                onClick={
                    () => setAllValues(oldstate => ({...oldstate, dashboard: false, newproduct: true, 
                        newnews: false, newinvestor: false, abouthonda: false }))
                }><FontAwesomeIcon icon="fas fa-plus-square"  size='lg' className='fa-fw'/>
                <a href="#">New Product</a></Button><br /><br />

                <Button className={allvalues.newnews ? 'btn btn-secondary active forbtn' : 'btn btn-dark forbtn'} 
                onClick={
                    () => setAllValues(oldstate => ({...oldstate, dashboard: false, newproduct: false,
                         newnews: true, newinvestor: false, abouthonda: false }))
                }><FontAwesomeIcon icon="fas fa-plus-square"  size='lg' className='fa-fw'/>
                <a href="#">New News</a></Button><br /><br />

                <Button className={allvalues.newinvestor ? 'btn btn-secondary active forbtn' : 'btn btn-secondary forbtn'} 
                onClick={
                    () => setAllValues(oldstate => ({...oldstate, dashboard: false, newproduct: false,
                         newnews: false, newinvestor: true, abouthonda: false }))
                }><FontAwesomeIcon icon="fas fa-plus-square"  size='lg' className='fa-fw'/>
                <a href="#">New Investors</a></Button><br /><br />

                <Button className={allvalues.abouthonda ? 'btn btn-secondary active forbtn' : 'btn btn-secondary forbtn'} 
                onClick={
                    () => setAllValues(oldstate => ({...oldstate, dashboard: false, newproduct: false, newnews: false,
                         newinvestor: false, abouthonda: true }))
                }><FontAwesomeIcon icon="fas fa-plus-square"  size='lg' className='fa-fw'/>
                <a >About Us</a></Button><br /><br />

            </div>
            <div style={{marginLeft:'16%'}}>
                <div className='container'>
                    <div style={{marginTop:'10px'}}>
                        <div className='row'>

                            {allvalues.dashboard ?
                            <>
                                 <div className='col-lg-4'> 
                                    <Card className="yellow" >
                                            <Card.Body>
                                                <Card.Title><FontAwesomeIcon icon="fas fa-calculator" size="lg"
                                                 className='fa-fw'/>Total Product Added: 0</Card.Title>
                                            </Card.Body>
                                    </Card>
                                </div> 
                                <div className='col-lg-4'> 
                                    <Card className="green" >
                                            <Card.Body>
                                                <Card.Title><FontAwesomeIcon icon="fas fa-calculator" size="lg" 
                                                className='fa-fw'/>Total News Added: 0</Card.Title>
                                            </Card.Body>
                                    </Card>
                                </div> 

                                <div className='col-lg-4'> 
                                    <Card className="bluish">
                                            <Card.Body>
                                                <Card.Title><FontAwesomeIcon icon="fas fa-calculator" size="lg" 
                                                className='fa-fw'/>Total Investor Added: 0</Card.Title>
                                            </Card.Body>
                                    </Card>
                                </div> 
                         </>
                         : null} 

                        {allvalues.newproduct ?
                         <div className='nproduct'>
                          <form>
                            <div className="form-group row">
                                <label  className="col-sm-2 col-form-label">Upload Product Image:</label>
                                <div class="col-sm-10">
                                    <input type="file" className="form-control" name='image'/>
                                </div>
                            </div>
                            <br />
                            <div className="form-group row">
                                <label  className="col-sm-2 col-form-label">Product Title:</label>
                                <div class="col-sm-10">
                                    <input type="text" className="form-control" name='title'/>
                                </div>
                            </div>
                            <br/>
                            <div class="form-group row">
                                <label className='col-sm-2 col-form-label'>Product Description:</label>
                                <div className='col-sm-10'>
                                    <textarea class="form-control" rows="3"></textarea>
                                </div>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary " style={{float: 'right'}}>Save</button> 
                          </form>
                        </div> : null }

                        {allvalues.newnews ?
                        <div className='nnews'>
                            <form>
                            <div className="form-group row">
                                <label  className="col-sm-2 col-form-label">Upload News Image:</label>
                                <div class="col-sm-10">
                                    <input type="file" className="form-control" name='image'/>
                                </div>
                            </div>
                            <br />
                            <div className="form-group row">
                                <label  className="col-sm-2 col-form-label">News Date:</label>
                                <div class="col-sm-10">
                                    <input type="date" className="form-control" name='date'/>
                                </div>
                            </div>
                            <br />
                            <div className="form-group row">
                                <label  className="col-sm-2 col-form-label">News Title:</label>
                                <div class="col-sm-10">
                                    <input type="text" className="form-control" name='title'/>
                                </div>
                            </div>
                            <br/>
                            <div class="form-group row">
                                <label className='col-sm-2 col-form-label'>News Description:</label>
                                <div className='col-sm-10'>
                                    <textarea class="form-control" rows="3"></textarea>
                                </div>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary " style={{float: 'right'}}>Save</button> 
                          </form>
                        </div> : null }

                        {allvalues.newinvestor ?
                        <div className='ninvestor'>
                            <Investor />
                        </div> : null }

                        {allvalues.abouthonda ? 
                        <div className='ahonda'>
                            <AboutUs />
                        </div>  : null }
                        
                        </div>
                    </div>  
                </div>
            </div>     
            <footer className="page-footer font-small blue footer">
                {/* <div className='container'> */}
                    <div className='row'>
                        <div className='col-3' style={{width: '15.59%', background: '#333a4c'}}>
                            
                        </div>
                        <div className='col-10 footer-copyright text-center py-3'>
                            © 2020 Copyright: Sajid khan<i className="fa fa-spinner fa-spin"></i>
                        </div>
                    </div>
                {/* </div> */}
                {/* <div class="footer-copyright text-center py-3">© 2020 Copyright: Sajid khan
                </div>  */}
            </footer>
        </>
    );
}

export default Dashboard;