import React from 'react'
import { Button, Card, CardBody, CardText, CardTitle } from 'reactstrap'
import wishlisticon from './../../assets/wishlist.png'
const EventDetails = ({events, onWishlistButtonClick }) => {
 

  return (
    <div>
      <Card  className="text-center "  style={{
              backgroundColor: 'rgb(31 41 55)',
              color: 'white',
              border: '2px solid #d3d3d3',
              borderRadius: '3em',
              marginBottom: '1em',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '20px',
              width: '500px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',}}>
      <CardBody className="text-center">
      <CardTitle tag="h5">
      <h2>{events.type}</h2>
      </CardTitle>
      <p>ID: {events.id}</p>
      <CardText className="text-center">
      <p>DateTime UTC: {events.datetime_utc}</p>
      </CardText>   
   <CardText className="text-center"> 
   <p>Venue:</p>
    
       Name:{events.venue.name}<br/>
        Capacity:{events.venue.capacity}<br/>
        Country:{events.venue.country}<br/>
   
   </CardText>
  
   <CardText className="text-center">
   <p>Performers:</p>
    
      {events.performers.map((performer, index) => (
        <li key={index}>
          {performer.name} - Score: {performer.score}
        </li>
      ))}
   
   </CardText>
   <Button color="link" onClick={() => onWishlistButtonClick(events.id)}>
          <img
            src={wishlisticon}
            alt="Wishlist"
            style={{ width: '30px', height: '30px' }}
          />
        </Button>
   </CardBody>
    </Card>
  </div>
  )
}

export default EventDetails