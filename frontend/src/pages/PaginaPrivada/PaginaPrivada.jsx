import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const Privada = () => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/pmarket_ropa/register');
    }; 

    const login = () => {
        navigate('/pmarket_ropa/login');
    }; 

    return (
      <div>
        <h2>Mi Cuenta</h2>
        <p>Aquí puedes ver los productos que has vendido y las compras que has hecho.</p>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Contraseña</Form.Label>
      <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
        <button onClick={handleClick} className="px-4 py-2 bg-green-400 rounded-xl">
										Registro
									</button>
        <button onClick={login} className="px-4 py-2 bg-green-400 rounded-xl ml-5">
            Iniciar Sesion
        </button>
      </div>


    );
  };
  


  export default Privada;