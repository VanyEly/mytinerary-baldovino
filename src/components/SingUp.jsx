import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormDisabledExample() {
  return (
    <Form>
      <fieldset disabled> 
      <Form.Text className="text-muted">
        Sign Up
        </Form.Text>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Name</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">LastName</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="LastName" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">email</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Password</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Password" />
        </Form.Group>
       
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Country</Form.Label>
          <Form.Select id="disabledSelect">
            <option>Argentina</option>
          </Form.Select>   <Form.Select id="disabledSelect">
            <option>Uruguay</option>
          </Form.Select>   <Form.Select id="disabledSelect">
            <option>Chile</option>
          </Form.Select>   <Form.Select id="disabledSelect">
            <option>Paraguay</option>
          </Form.Select>   <Form.Select id="disabledSelect">
            <option>Bolivia</option>
          </Form.Select>   <Form.Select id="disabledSelect">
            <option>Brasil</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Can't check this"
          />
        </Form.Group>
        <Button type="submit">Create User</Button>
      </fieldset>
    </Form>
  );
}

export default FormDisabledExample;