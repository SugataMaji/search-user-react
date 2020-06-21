import React from 'react';

const Card = ({id, name, email, website}) => {
    // const {id, name, email} = props;
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt={`${id}`} src={`https://robohash.org/${id}?100x100`}/> 
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p><a href={`http://${website}`}>{website}</a></p>
            </div>
        </div>

    );
}
export default Card;