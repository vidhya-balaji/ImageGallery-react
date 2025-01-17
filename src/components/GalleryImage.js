import baby1 from "../Images/baby1.jpg"
import baby2 from "../Images/baby2.jpg"
import baby3 from "../Images/baby3.jpg"
import baby4 from "../Images/baby4.jpg"
import baby5 from "../Images/baby5.jpg"
import baby6 from "../Images/baby6.jpg"
import baby8 from "../Images/baby8.jpg"
import baby9 from "../Images/baby9.jpg"

function GalleryImage() {
    return (
        <div id="container">
            <div id="gallery">
                <img src={baby1} alt="image"></img>
                <img src={baby2} alt="image"></img>
                <img src={baby3} alt="image"></img>
                <img src={baby4} alt="image"></img>
                <img src={baby5} alt="image"></img>
                <img src={baby6} alt="image"></img>
                <img src={baby8} alt="image"></img>
                <img src={baby9} alt="image"></img>
            </div>
        </div>);
}
export default GalleryImage