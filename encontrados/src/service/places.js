import axios from 'axios';
import qs from "qs";

export const places = axios.create({
    baseURL: "/api/sites.json",
    headers: {'Content-Type': 'application/json'}
});

export const allPlaces = async () => {
    return await places.get();
}

export const getPlaceById = async (id) => {
    id = id || '';
    const res = await places.get();
    let placeData = res.data.filter(u => u.id == id)  
    return placeData    
}

export const addPlace = async (place) => {
    return await places.post(place);
}

export const editPlace = async (id, place) => {
     const res = await places.get();
     const dat = res.data
     console.log(dat)
     console.log(res)
     let placeData = dat.filter(u => u.id == id) 
     console.log(placeData)
     const req = placeData[0]
     const json = JSON.stringify(place)
     
     console.log(req.id)

    // console.log(id)
    // console.log(user)
    console.log(json)
    return await places.post(json);
    //return places.patch(user, qs.stringify({id:id}))
}

export const deleteUser = async (id) => {
    return await places.delete(`${id}`);
}

