import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


const UserList = () => {
    const {users, removeUser, findItem} = useContext(GlobalContext);
    interface UserObject{
        id:string;
        name:string;
        gender:string;
        age:number;
    }
    
    return (
        <div>
            {users?.map((user:UserObject) => (
                <div>
                <div className="d-flex" style={{backgroundColor:"#05396B", padding:"4%", margin:"4%", borderRadius:"10px", width:"fit-content"}}>
                    <div style={{display:"flex", flexDirection:"column", width:"130%"}}>
                        <span style={{whiteSpace:"nowrap", color:"white"}}>Name: {user.name}</span>
                        <span style={{whiteSpace:"nowrap", color:"white"}}>Gender: {user.gender}</span>
                        <span style={{whiteSpace:"nowrap", color:"white"}}>Age: {user.age}</span>
                    </div>
                    <div style={{ display:"flex", justifyContent:"flex-end", marginLeft:"1.2rem", marginRight:"0.1rem"}}>
                    <Link onClick={() => findItem(user.id)} style={{textDecoration:"none", color:"#fdee00"}} to={`/edit/${user.id}`} ><ModeEditIcon /></Link>
                    <DeleteIcon style={{color:"red", cursor:"pointer"}} onClick={() => removeUser(user.id) }/>
                    <br/>
                    </div>
                </div>
                <br/>
                </div>
            ))}
            
        </div>
    )
}

export default UserList;
