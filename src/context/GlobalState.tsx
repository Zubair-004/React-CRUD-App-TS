import { createContext, useState } from 'react';


interface UserObject{
    id:string;
    name:string;
    gender:string;
    age:number;
}

interface UserStat {
    users: UserObject[]
}

export let GlobalContext:(UserStat|any);

export const GlobalProvider = ({children}:any) => {

    GlobalContext = createContext({});

    
    const [userState, setUserState] = useState<UserStat>({
        users:[]
    });
    
    const removeUser = (id:string) => {
        setUserState({
            users:userState.users.filter((user:UserObject) => {
                return user.id !== id
            })
        })
    };

    const addUser = (user:UserObject) => {
        setUserState({
            users: [user, ...userState.users]
        });
    };

    const [editItem, setEditItem] = useState<UserObject>();

    const findItem = (id:string) => {
        const item = userState.users.find(user => user.id === id);
        setEditItem(item);
    }

    const editUser = (user:UserObject) => {
            const updatedUser = user;
            // console.log(updatedUser.id);
            const updateUser = userState.users.map(user =>{
            //   console.log(user.id);
              if(user.id === updatedUser.id){
                  return updatedUser;
              } 
              return user;
            });
            setUserState({
                users: updateUser
            })
            // console.log(userState);
      };

    return(
        <GlobalContext.Provider value={{
            users:userState.users,
            removeUser,
            addUser,
            editUser,
            findItem,
            editItem
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
