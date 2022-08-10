import {Button, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signUp()
  {
    let items = {name, email, password};
    if(name == "" || email == "" || password == "") {
      window.alert("All fields are required");
    } else {
       let result = await fetch('http://localhost:8000/api/signup',
       {
        method: 'POST',
        body:JSON.stringify(items),
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
       });
       result = await result.json();
       if(result) {
        window.alert("Register Successfully");
       }
    }
  }

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <Card style={{ width: '25rem', backgroundColor: '#F0F0F0' }}>
          <Card.Body>
            <Card.Title style={{textAlign: 'center'}}>Register</Card.Title>
            <input type="text" name="name" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter your name" />
            <br /><br />
            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter your email"/>
            <br /><br />
            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter your password"/>
            <br /><br />
            <Button variant="success" onClick={signUp}>Signup</Button>
            <a href="/login" style={{float: 'right'}} class="btn btn-info " role="button" >Login</a>
          </Card.Body>
        </Card>
      </div>
    </>
  );
   
}

export default Register;
