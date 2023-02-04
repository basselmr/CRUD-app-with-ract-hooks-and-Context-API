import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
//import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
    }

    return (
        <div>
            <h1>AddUser</h1>
            <Form>
                <FormGroup>
                    <Label>Name: </Label>
                    <Input type="text" placeholder='Enter Name'></Input>
                </FormGroup>
                <Button className='m-2'>Save</Button>
                {/*<Link to="/" className="btn btn-danger m-2">Cancel</Link>*/}
                <Button className='m-2' onClick={navigateToHome}>Cancel</Button>
            </Form>
        </div>

    )
}
export default AddUser;