import {useState, useContext} from 'react';
import Button from '@mui/material/Button';
import UserList from './userList';
import UserForm from './UserForm';
import { GlobalContext } from '../context/GlobalState';

const Home = () => {
    const[userInfo, setUserInfo] = useState({});
    const {addUser} = useContext(GlobalContext);

    const add = ()=>{
        addUser(userInfo);
        setUserInfo({});
    }
   
    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}} >
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#4887B0", borderRadius:"20px", boxShadow:"5px 5px 5px #666666", width:"200%", padding:"2%"}}>
            <div>
                <UserList/>
            </div>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"5% 9%"}}>
            <UserForm setUserInfo = {setUserInfo} />
            <Button onClick = {add} style={{backgroundColor:"#05396B", color:"white"}} >Add</Button>
            </div>
        </div>
        </div>
    )
}

export default Home;
