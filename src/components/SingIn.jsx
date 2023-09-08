import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <Form>
        <Form.Text className="text-muted">
        Sing In
        </Form.Text>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Keep me signed in" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sing In
      </Button>
      <Button variant="secondary" type="submit">
      
      </Button>
    </Form>
  );
}

export default BasicExample;