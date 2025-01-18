import React from 'react';
import ReactDOM from 'react-dom/client';
import "./components/style.css";
import imageList from './components/imageList.js';
import ZoomView from "./components/ZoomView";
import { useEffect, useState } from "react";
const root = ReactDOM.createRoot(document.getElementById('root'));

function Gallery(props) {
    return (
        <div id="list-of-images">
            <img alt='img' src={props.imagesrc}></img>
            <h3>{props.kname}</h3></div>)
}

function ZoomPopup() {  //This function return popup div
    useEffect(() => { // usereffect used to do action after function finished
        ZoomView(); // this function call after popup div render
    }, [])

    return (  <div id="popOut">
        <p id="close">&#10005;</p>
        <img id="zoomimg" src="" width="400px" alt="image1"></img>
    </div>)
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
        <ZoomPopup> </ZoomPopup>   
    </>);

