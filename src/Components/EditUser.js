import React, { useState, useContext } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from "../Context/GlobalState"
const EditUser = () => {
    const currentParam = useParams();
    //console.log(currentParam)
    const currentUserID = currentParam.id
    const { editUser, users } = useContext(GlobalContext)
    const ss = users.filter(usr => (usr.id == currentUserID ? usr : null))
    const [selectedUSer, setSelectedUser] = useState({ id: currentUserID, name: ss[0].name })
    //console.log(users)
    //console.log(selectedUSer)
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
    }
    //const cuurenusrID = props.match.params.id
    const onSubmit = () => {
        navigateToHome();
    }
    const inputChange = (e) => {
        setSelectedUser({ id: currentUserID, name: e.target.value });
        console.log(selectedUSer);
    }
    return (
        <div>
            <h1>EditUser</h1>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label>Name: </Label>
                    <Input type="text" placeholder='Enter Name' onChange={inputChange} value={selectedUSer.name}></Input>
                </FormGroup>
                <Button className='m-2'>Edit Name</Button>
                <Link to="/" className="btn btn-danger m-2">Cancel</Link>
            </Form>
        </div>
    )
}
export default EditUser;