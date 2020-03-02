import React from 'react';

const GalleryItem = (props) => {
    return (
        <div className="listitem">
            <div className="itemtitle">{props.title}</div>
            <div>
                <img className="displayimg" src={props.imgurl} alt={props.title}/>
            </div>
            <button onClick={(id)=>props.clickfun(props.id)} className={`itembutton ${props.listname==="mylist"? "remove": "add" }`}>{props.listname==="mylist"? "remove": "add"}</button>
            
        </div>
    );
};

export default GalleryItem;