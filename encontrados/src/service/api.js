import axios from 'axios';
import qs from "qs";

export const ax = axios.create({
    baseURL: "/api/users.json",
    headers: {'Content-Type': 'application/json'}
});

export const getUserById = async (id) => {
    id = id || '';
    console.log(id)
    const res = await ax.get();
    console.log(res)
    let userData = res.data.filter(u => u.id == id)  
    console.log(userData)  
    return userData    
}

export const addUser = async (user) => {
    return await ax.post(user);
}

export const editUser = async (id, user) => {
     const res = await ax.get();
     const dat = res.data
     console.log(dat)
     console.log(res)
     let userData = dat.filter(u => u.id == id) 
     console.log(userData)
     const req = userData[0]
     const json = JSON.stringify(user)
     
     console.log(req.id)

    // console.log(id)
    // console.log(user)
    console.log(json)
    return await ax.post(json);
    //return ax.patch(user, qs.stringify({id:id}))
}

export const deleteUser = async (id) => {
    return await ax.delete(`${id}`);
}

