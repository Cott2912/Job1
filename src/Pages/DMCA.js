import AddHome from "../Components/AddHome";
import { GoDotFill } from "react-icons/go";

const DMCA = () => {
    return(
        <AddHome title="DMCA">
            <p>
                We have implemented a procedure to address any concerns regarding potential copyright violations on the Site. 
                If you suspect that any content infringes on copyright laws, we will take immediate action to remove it upon notification.
            </p>
            <p>
                To report a claim of copyright infringement, please send a written notice to our center using the contact information
                provided below. Your notice should include the following information:
            </p>
            <p> <GoDotFill /> Your physical or electronic signature, as the owner of an exclusive right that is allegedly infringed, or as an authorized representative of such an owner.</p>
            <p> <GoDotFill /> Identification of the copyrighted work that you claim has been infringed, or, if there are multiple copyrighted works at a single online site that are covered by a single notification, a representative list of such works at that site.</p>
            <p> <GoDotFill /> Identification of the material that you claim is infringing or is the subject of infringing activity and that should be removed or disabled, as well as information reasonably sufficient to permit us to locate the material.</p>
            <p> <GoDotFill />Information reasonably sufficient to permit us to contact you, such as your address, telephone number, and email address if available.</p>
            </AddHome>
    );}
export default DMCA;