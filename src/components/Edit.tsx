
import {useContext, useState, useEffect} from 'react';
import {ReactForm} from 'react-forms';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import UserForm from './UserForm';
import Button from '@mui/material/Button';
import formConfig from './UserForm';



const Edit = (props:any) => {

    const [usr, setUsr] = useState({
        name:'', gender:'', age:'', id:''
    });

    const {editItem} = useContext(GlobalContext);

    useEffect(() => {
        console.log(editItem);
        if(editItem!==null){
            setUsr(editItem);
            console.log(usr);
        }else{
            setUsr({id:'', name:'', gender:'', age:'' })
        }
    },[editItem]);


    // const[updatedInfo, setUpdatedInfo] = useState({});

    const {editUser} = useContext(GlobalContext);

    const history = useHistory();

    const config = formConfig; 

    interface Values {
        name: string,
        gender: string,
        age: string,
        id: string
    }

    const edit = (values:Values) =>{
        values.id=usr?.id;
        console.log(values);
        editUser(values);
        history.push('/');
    }

    const initialValues = [{ name : usr?.name, gender: usr?.gender, age: usr?.age }]

    const action = {submitButtonText : 'Update' }


    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor:"#4887B0", borderRadius:"20px", boxShadow:"5px 5px 5px #666666", width:"fit-content", padding:"2%"}}>
        <ReactForm{...props}
            config={config}
            initialValues={initialValues}
            actionConfig= {action}
            onSubmit={edit}
        />   
        <div>
        {/* <Button style={{backgroundColor:"#05396B", color:"white"}} onClick={edit}>Update</Button>
        <Link to='/' style={{marginLeft:"1rem"}} className = "btn btn-danger">CANCEL</Link> */}
        </div>
        </div>
        </div>
    )
}

export default Edit;

