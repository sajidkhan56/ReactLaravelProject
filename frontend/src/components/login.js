import {Button, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Login()
{   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function signIn()
    {   
        if(email == "" || password == "") {
            window.alert("All fields are required");
        } else {
          
        let items = { "email": email,
                      "password": password
                    };
        let result = await fetch('http://localhost:8000/api/login',
          {
            method: 'POST',
            body:JSON.stringify(items),
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
          });  
          result = await result.json();
          if(typeof result.name !== 'undefined')
          { 
            localStorage.setItem("user-name", result.name);
            navigate('/dash');

          } else {
                window.alert(result.error);
          }
        }
    }
    return(
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <Card style={{ width: '25rem', backgroundColor: '#F0F0F0' }}>
          <Card.Body>
            <Card.Title style={{textAlign: 'center'}}>Signin</Card.Title>
            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter your email"/>
            <br /><br />
            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter your password"/>
            <br /><br />
            <Button variant="success" onClick={signIn}>Login</Button>
            <a href="/back" style={{float: 'right'}} class="btn btn-info " role="button" >back</a>
          </Card.Body>
        </Card>
      </div>
    );

    
}

export default Login;