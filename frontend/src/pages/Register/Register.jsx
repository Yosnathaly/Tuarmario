import Card from 'react-bootstrap/Card';

import FloatingLabel from 'react-bootstrap/FloatingLabel'; 

import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
  
    const registrar = () => {
      navigate('/pmarket_ropa/register');
    }; 

    return (
        <>
        <Card style={{ width: '80rem' }}>
        <Card.Body>
        <h1><strong>Crea una Cuenta</strong></h1>
        <Card.Text>
         O usa tu email para registrarte
        </Card.Text>
      </Card.Body>
    </Card>
    
<Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Label>Repetir Contraseña</Form.Label>

        <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    </Form>

    <button onClick={registrar} className="px-4 py-2 bg-green-400 rounded-xl mt-5">
            Registrar
        </button>

    </>
    )
}
export  default Register