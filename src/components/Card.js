import React from 'react'



function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src={props.imageUrl} alt="mt fuji" />
            <div className="info">
                <div className="location"><span>📍</span>
                    <span className="country">{props.location}</span>
                    <a className="maps" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="place">{props.title}</h1>
                <span className="date">{props.startDate} - {props.endDate}</span>
                <p className="description">{props.description}</p>
            </div>

        </div>


    )
}

export default Card