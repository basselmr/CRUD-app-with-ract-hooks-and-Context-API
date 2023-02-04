import React, { useContext, useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
//import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from "../Context/GlobalState"
import { v4 } from 'uuid'


const AddUser = () => {
    const [name, setName] = useState("")
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
    }
    const { addUser } = useContext(GlobalContext)
    const onSubmit = () => {
        const newUser = { id: v4(), name: name };
        addUser(newUser);
        navigateToHome();
    }
    const inputChange = (e) => {
        setName(e.target.value);
        console.log(name);
    }

    return (
        <div>
            <h1>AddUser</h1>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label>Name: </Label>
                    <Input type="text" placeholder='Enter Name' value={name} onChange={inputChange}></Input>
                </FormGroup>
                <Button className='m-2'>Save</Button>
                {/*<Link to="/" className="btn btn-danger m-2">Cancel</Link>*/}
                <Button className='m-2' onClick={navigateToHome}>Cancel</Button>
            </Form>
        </div>

    )
}
export default AddUser;