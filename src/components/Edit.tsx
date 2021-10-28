import {useContext, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import UserForm from './UserForm';
import Button from '@mui/material/Button';



const Edit = () => {

    const[updatedInfo, setUpdatedInfo] = useState({});

    const {editUser} = useContext(GlobalContext);

    const history = useHistory();

    const edit = () =>{
        editUser(updatedInfo);
        history.push('/');

    }

    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor:"#4887B0", borderRadius:"20px", boxShadow:"5px 5px 5px #666666", width:"fit-content", padding:"2%"}}>
        <UserForm
         setUpdatedInfo = {setUpdatedInfo}
        />
        <div>
        <Button style={{backgroundColor:"#05396B", color:"white"}} onClick={edit}>Update</Button>
        <Link to='/' style={{marginLeft:"1rem"}} className = "btn btn-danger">CANCEL</Link>
        </div>
        </div>
        </div>
    )
}

export default Edit;

