import {useState, useContext} from 'react';
import Button from '@mui/material/Button';
import UserList from './userList';
import {ReactForm} from 'react-forms';
import formConfig  from './UserForm';
import { GlobalContext } from '../context/GlobalState';
import {v4 as uuid} from 'uuid';

const Home = (props: any) => {
    // const[userInfo, setUserInfo] = useState({});
    const {addUser} = useContext(GlobalContext);

    const add = (values:Values)=>{
        values.id=uuid();
        addUser(values);
    }

    interface Values {
        name: string,
        gender: string,
        age: string,
        id: string
    }

    const config = formConfig; 

    const action = {submitButtonText : 'Add' }

    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}} >
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#4887B0", borderRadius:"20px", boxShadow:"5px 5px 5px #666666", width:"200%", padding:"2%"}}>
            <div>
                <UserList/>
            </div>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"5% 9%"}}>
            <ReactForm{...props}
            config={config}
            actionConfig= {action}
            onSubmit={add}
            />   
        </div>
        </div>
        </div>
    )
}

export default Home;
