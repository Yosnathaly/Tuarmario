import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
  
    const iniciarSesion = () => {
      navigate('/pmarket_ropa/register'); //Se usará proximamente el link
    };

    return (
      <div>
        <h2>Iniciar Sesión</h2>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>

      <button onClick={iniciarSesion} className="px-4 py-2 bg-green-400 rounded-xl mt-5">
            Iniciar Sesion
        </button>
      </div>
    );
  };
  
  export default Login;