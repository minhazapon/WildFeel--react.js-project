import FindGallery from "./FindGallery";
import GalleryBanner from "./GalleryBanner";
import Info from "./Info";
import OutDoor from "./OutDoor";
import This from "./This";
import Where from "./Where";
import ContactUS from '../Home file/ContactUs'




const Gallery = () => {
    return (
        <div>

            <GalleryBanner></GalleryBanner>
            <FindGallery></FindGallery>
            <This></This>
            <OutDoor></OutDoor>
            <Info></Info>
            <Where></Where>
            <ContactUS></ContactUS>
            
        </div>
    );
};

export default Gallery;