import React, { useEffect, useState }  from 'react';
import { allPlaces } from '../../service/places';
import Placeitem from './Placeitem';

function PlaceList() {
    const [places, setPlaces] = useState([])

    useEffect(() => {
        loadPlaceData()
    },[])
    const loadPlaceData = async () => {
        const res = await allPlaces();
         const dataPlaces = res.data
         setPlaces(dataPlaces) 
    }

    return (
        <>
            <Placeitem places={places}/>     
        </>
)
}

export default PlaceList