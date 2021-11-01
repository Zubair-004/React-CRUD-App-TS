import * as React from 'react';
// import { useContext, useState, useEffect } from 'react';
// import { GlobalContext } from '../context/GlobalState';



// const UserForm = (props:any) => {

    // const[userInfo, setUserInfo] = useState({});
   
    // const [usr, setUsr] = useState({
    //     id:uuid(), name:'', gender:'', age:''
    // });

    // const {editItem} = useContext(GlobalContext);

    // useEffect(() => {
    //     if(editItem!==null){
    //         setUsr(editItem);
    //     }else{
    //         setUsr({id:'', name:'', gender:'', age:'' })
    //     }
    // },[editItem]);

    // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setUsr({...usr, id:usr?.id, [e.target.name] : e.target.value});
    //     {setUserInfo({...usr, id:usr?.id, [e.target.name] : e.target.value})}
    //     {props.setUpdatedInfo && props.setUpdatedInfo({...usr, id:usr?.id, [e.target.name] : e.target.value})}
    // }

    const formConfig = [
        {
        type : 'text',
        valueKey : 'name',
        fieldProps : { label : 'Name' , fullWidth: true , name: 'name'} ,
        },
        {
        type : 'text',
        valueKey : 'gender',
        fieldProps : { label : 'Gender' , fullWidth: true  , name: 'gender' } ,
        },
        {
        type : 'text',
        valueKey : 'age',
        fieldProps : { label : 'Age' , fullWidth: true , name: 'age' } ,
        }
     ];
    // const myInitialValues = [{ name : usr?.name, gender: usr?.gender, age: usr?.age }];
    export default formConfig;

        
            
            //   <form>
            //     <div style={{width:"200%"}}>
            //         <label style={{color:"white"}}>Name*</label><br/>
            //         <input required type="text" name="name" value={usr?.name} onChange = {onChange} /><br/><br/>
            //         <label style={{color:"white"}}>Gender*</label><br/>
            //         <input required type="text" name="gender" value={usr?.gender} onChange = {onChange}/><br/><br/>
            //         <label style={{color:"white"}}>Age*</label><br/>
            //         <input required type="number" name="age" value={usr?.age} onChange = {onChange} min="0"/><br/><br/>
            //     </div>
            // {props.form === "add" ? <button type="submit">Add</button>: <button type="submit">Update</button>}
            //  </form>
