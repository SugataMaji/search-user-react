import React from 'react';
import Card from './Card'

const Cardlist = ({robotdata}) => {
    const cardComponent = robotdata.map((user, i) => {
        return (
        <Card 
        key={i} 
        id={robotdata[i].id} 
        name={robotdata[i].name} 
        email={robotdata[i].email}
        website={robotdata[i].website}
        />
        )
    })
 return(
     <div>
        {cardComponent}
     </div>
 );
}
export default Cardlist; 