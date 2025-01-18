import "./style.css"


// function ZoomView(imagesrc, event) {

//     console.log("ZoomView :"+{imagesrc}.imagesrc);
//     console.log(event);
    
//     // return (

//     //     <div id="popOut">
//     //         <p id="close">&#x2715</p>
//     //         <img id="zoomimg" src={{imagesrc}.imagesrc} width="400px" alt="image1"></img>
//     //     </div>
//     // )
    
// }

function ZoomView(){
    const container=document.getElementById('container')
    const images=document.querySelectorAll('#gallery img')
    const popout=document.getElementById("popOut")
    const zoomimg=document.getElementById("zoomimg")

    images.forEach(function(image){
        image.addEventListener("click",function(){
            container.style.display='none';
            popout.style.display='block';
            zoomimg.setAttribute('src',image.getAttribute('src'));
        })
    
    });
    
    const closebutton=document.getElementById("close");
    closebutton.addEventListener("click",function(){
        container.style.display='block';
            popout.style.display='none';
    })
}
export default ZoomView