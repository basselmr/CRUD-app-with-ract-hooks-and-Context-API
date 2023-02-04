import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom';
const EditUser = () => {
    return (
        <div>
            <h1>EditUser</h1>
            <Form>
                <FormGroup>
                    <Label>Name: </Label>
                    <Input type="text" placeholder='Enter Name'></Input>
                </FormGroup>
                <Button className='m-2'>Edit Name</Button>
                <Link to="/" className="btn btn-danger m-2">Cancel</Link>

            </Form>
        </div>
    )
}
export default EditUser;