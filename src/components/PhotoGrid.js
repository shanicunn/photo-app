import React from 'react';
import gridPhoto from '../assets/krystal-ng-PrQqQVPzmlw-unsplash.jpg';
function PhotoGrid() {
    return (
        <div className="photoGrid">
            <div className="row-1">
                <img className="gridPhoto" src={gridPhoto} alt=""></img>
                <img className="gridPhoto" src={gridPhoto} alt=""></img>
                <img className="gridPhoto" src={gridPhoto} alt=""></img>
                <img className="gridPhoto" src={gridPhoto} alt=""></img>
            </div>

            <div className="row-2">
                <img className="gridPhoto" src={gridPhoto} alt=""></img>
                <img className="gridPhoto" src={gridPhoto} alt=""></img>
                <img className="gridPhoto" src={gridPhoto} alt=""></img>
                <img className="gridPhoto" src={gridPhoto} alt=""></img>
            </div>

            <div className="row-3">
            <img className="gridPhoto" src={gridPhoto} alt=""></img>
            <img className="gridPhoto" src={gridPhoto} alt=""></img>
            <img className="gridPhoto" src={gridPhoto} alt=""></img>
            <img className="gridPhoto" src={gridPhoto} alt=""></img>
            </div>
        </div>
    )
}

export default PhotoGrid;