import React from 'react';
import ReactDOM from 'react-dom/client';
import "./components/style.css";
import imageList from './components/imageList.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Gallery(props) {
    return (
        <div id="list-of-images">
            <img alt='img' src={props.imagesrc}></img>
            <h3>{props.kname}</h3></div>)
}

root.render(
    <>
        <div id="container">
            <div id="gallery">
                {
                    imageList.map(function (isrc, index) {
                        return (<Gallery imagesrc={isrc.imgsrc} kname={imageList[index].name}></Gallery>)
                    })
                }

            </div>
        </div>
    </>);

