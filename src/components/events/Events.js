import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container} from "react-bootstrap";
import Navbars from "../../layouts/Navbars";
import EventDetails from "./EventDetails";
import backgroundImage from './../../assets/banner.png';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Events() {
  const [error, setError] = useState("");
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = 'Events';
  }, []);


  useEffect(() => {
    axios.get('http://localhost:8087/events/viewAll')
            .then(response => {
                // console.log('Received data:', response.data);
                // console.log('Type of received data:', typeof response.data);

                if(response.data && Array.isArray(response.data.events)){
                    setEvents(response.data.events);
                }else{
                    setError('Data recieved is not in the expected format');
                }
                
            })
            .catch(error => {
                console.error('Error fetching event data:', error);
                setError('Error fetching event data');
            });
    }, []);


  if (error) {
    return <Container>Error: {error}</Container>;
  }
  const handleWishlistButtonClick = (eventId) => {
    const selectedEvent = events.find(event => event.id === eventId);

    if (!selectedEvent) {
      console.error('Selected event not found');
      return;
    }
  
    const eventData = {
      events: [
        {
          type: selectedEvent.type,
          id: selectedEvent.id,
          datetime_utc: selectedEvent.datetime_utc,
          venue: {
            name: selectedEvent.venue.name,
            capacity: selectedEvent.venue.capacity,
            country: selectedEvent.venue.country
          },
          performers: selectedEvent.performers
        }
        // ... other events if needed
      ]
    };
   
 
    axios
      .post('http://localhost:8088/wishlist/addFavourite',{
        event: eventData
      },  { Authorization: `Bearer ${localStorage.getItem("token")}`})
      .then((response) => {
        console.log(response.data);
        // alert("LoginId created");
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Great!',
          text: 'You have successfully! Added event to wishlist',
          showConfirmButton: true,
          timer: 10000
        })
        // Handle success response here
        navigate('/');

      })
      .catch((error) => {
        console.error(error.response.data);
        // Handle error here
        // alert("Login ID is already taken");
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Oops! Something went wrong!',
          text: 'This event is already registered!',
          showConfirmButton: true,
          timer: 10000
        })
      });
  };
 
  return (
    <div>
        <Navbars />
        <div
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
      padding: '20px',
    }}
    >
       <div>

    
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id}>
              <EventDetails events={event} onWishlistButtonClick={handleWishlistButtonClick} />
            </div>
          ))
        ) : (
          <p>No Events</p>
        )}
      
      </div>
    </div>
    </div>
  );
}

export default Events;