import React from 'react';
import ReactDOM from 'react-dom/client';
import "./components/style.css";
import GalleryImage from './components/GalleryImage.js';
import ZoomView from './components/ZoomView.js';
const container = document.getElementById('container')
const gallery = document.getElementById('gallery')
const allimg = document.querySelectorAll("#gallery img")
const popout = document.getElementById("popOut")
const zoomimg1 = document.getElementById("zoomimg")
const root = ReactDOM.createRoot(document.getElementById('root'));


function ZoomImage() {
    allimg.forEach((value) => {
        console.log(value.src);
        value.addEventListener("click", function () {
            container.style.display = 'none';
            popout.style.display = 'block';
            zoomimg1.src=value.src;
        })
    })
}
root.render(<>
<GalleryImage></GalleryImage>
<ZoomView></ZoomView>
</>);

