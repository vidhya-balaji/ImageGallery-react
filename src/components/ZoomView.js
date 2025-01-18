import "./style.css"
function ZoomView(imagesrc,event) {

    console.log("ZoomView :"+{imagesrc}.imagesrc);
    console.log(event);
    

    return (

        <div id="popOut">
            <p id="close">&#x2715</p>
            <img id="zoomimg" src={{imagesrc}.imagesrc} width="400px" alt="image1"></img>
        </div>
    )
}
export default ZoomView