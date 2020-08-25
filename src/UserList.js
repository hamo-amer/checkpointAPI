import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';

function UserList() {
    const [listOfUser,setListOfUser]=useState([{}]);
    useEffect(()=>{
        const fetchData=async()=>{
            const result= await axios.get('https://jsonplaceholder.typicode.com/users');
            setListOfUser(result.data);
        };
        fetchData();
    },[]);
    return (
        <div className="listUsers">
            <h1>List of Users</h1>
            <ul>
                {listOfUser.map(user=>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default UserList
