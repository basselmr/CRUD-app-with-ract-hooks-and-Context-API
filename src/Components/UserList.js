import React, { useContext } from "react";
import { Link } from "react-router-dom"
import { ListGroup, ListGroupItem, Button } from 'reactstrap'
import { GlobalContext } from "../Context/GlobalState"
const UserList = () => {
    //const users = useContext(GlobalContext)
    //console.log(users.users)
    const { } = useContext(GlobalContext)

    return (
        <>
            <ListGroup className="mt-4">

                <ListGroupItem className="d-flex">
                    <strong>user 1</strong>
                    <div className="ms-auto">
                        <Link className="btn btn-warning ms-1" to="/edituser/1">Edit</Link>
                        <button className="btn btn-danger ms-1">Delete</button>
                    </div>
                </ListGroupItem>
                <ListGroupItem className="d-flex">
                    <strong>user 1</strong>
                    <div className="ms-auto">
                        <Link className="btn btn-warning ms-1" to="/edituser/1">Edit</Link>
                        <button className="btn btn-danger ms-1">Delete</button>
                    </div>
                </ListGroupItem>
            </ListGroup>

        </>
    )

}
export default UserList;