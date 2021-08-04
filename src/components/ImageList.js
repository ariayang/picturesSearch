import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
    //console.log(props.images);
    const images = props.images.map((image) => {
        //const imageURL = urls.thumb;
        //console.log(image);
        return <ImageCard key={image.id} image={image} />
        //<img key={id} src={imageURL} alt={description}></img>
    });
    return <div className="image-list">{images}</div>
};

export default ImageList; 