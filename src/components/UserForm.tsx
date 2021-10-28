import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import {v4 as uuid} from 'uuid';
import {Link, useHistory} from 'react-router-dom';



const UserForm = (props:any) => {
    const [usr, setUsr] = useState({
        id:uuid(), name:'', gender:'', age:''
    });

    const {editItem} = useContext(GlobalContext);


    useEffect(() => {
        if(editItem!==null){
            setUsr(editItem);
        }else{
            setUsr({id:'', name:'', gender:'', age:'' })
        }
    },[editItem]);


    const history = useHistory();



    interface UserObject{
        id:string;
        name:string;
        gender:string;
        age:number;
    }

    // useEffect(() => {
    //     const userId = currentUserId;
    //     const selectedUser = users.find((user:UserObject)  => user.id === userId)
    //     console.log(userId);
    //     setUsr(selectedUser);
    // },[currentUserId])



    // let onSubmit;
    // if(props.form ==="add"){
    //      onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //         e.preventDefault();
    //         addUser(usr);
    //     }
    // }
    // else{
    //     onSubmit = () => {
    //         editUser(usr);
    //         history.push('/');  
    //     }
    // }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsr({...usr, id:usr?.id, [e.target.name] : e.target.value});
        {props.setUserInfo && props.setUserInfo({...usr, id:usr?.id, [e.target.name] : e.target.value})}
        {props.setUpdatedInfo && props.setUpdatedInfo({...usr, id:usr?.id, [e.target.name] : e.target.value})}
    }
    return (
            
              <form>
                <div style={{width:"200%"}}>
                    <label style={{color:"white"}}>Name*</label><br/>
                    <input required type="text" name="name" value={usr?.name} onChange = {onChange} /><br/><br/>
                    <label style={{color:"white"}}>Gender*</label><br/>
                    <input required type="text" name="gender" value={usr?.gender} onChange = {onChange}/><br/><br/>
                    <label style={{color:"white"}}>Age*</label><br/>
                    <input required type="number" name="age" value={usr?.age} onChange = {onChange} min="0"/><br/><br/>
                </div>
               {/* {props.form === "add" ? <button type="submit">Add</button>: <button type="submit">Update</button>} */}
              </form>
            
    )
}

export default UserForm;
