import React, { useContext } from "react";
import { Link } from "react-router-dom"
import { ListGroup, ListGroupItem, Button } from 'reactstrap'
import { GlobalContext } from "../Context/GlobalState"
const UserList = () => {
    //const users = useContext(GlobalContext)
    //console.log(users.users)
    const { users, removeUser } = useContext(GlobalContext)
    return (
        <>
            <ListGroup className="mt-4">
                {users.map(usr => (
                    <ListGroupItem key={usr.id} className="d-flex">
                        <strong>{usr.name}</strong>
                        <div className="ms-auto">
                            <Link className="btn btn-warning ms-1" to={`/edituser/${usr.id}`}>Edit</Link>
                            <Button onClick={() => removeUser(usr.id)} className="btn btn-danger ms-1">Delete</Button>
                        </div>
                    </ListGroupItem>))}
            </ListGroup>
        </>
    )
}
export default UserList;