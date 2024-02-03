import React, { useEffect} from 'react';
import Navbars from '../../layouts/Navbars';
import backgroundImage from './../../assets/favouritevents.png'
import axios from 'axios';

const Wishlist = () =>{
    const eventId = 6077353;
    const userId =2;
    useEffect(() => {
        axios.get(`http://localhost:8088/wishlist/viewFavourite/${eventId}/${userId}`)
                .then(response => {
                    // console.log('Received data:', response.data);
                    // console.log('Type of received data:', typeof response.data);
    
                    if(response.data && Array.isArray(response.data.events)){
                      
                    }else{
                       
                    }
                    
                })
                .catch(error => {
                    console.error('Error fetching event data:', error);
                  
                });
        }, []);

    return(
        <>
        <div>
            <Navbars />
        </div>
        <div style={{ backgroundImage:`url(${backgroundImage})`,backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'}}>
      </div>
        </>   
    )
}

export default Wishlist;

