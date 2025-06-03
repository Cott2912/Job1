import AddHome from "../Components/AddHome";
import { GoDotFill } from "react-icons/go";

const DMCA = () => {
    return (
        <AddHome title="DMCA">
            <div className="title-style" style={{ fontSize: "10px" }} >
                <h1>
                    We have implemented a procedure to address any concerns regarding potential copyright violations on the Site.
                    If you suspect that any content infringes on copyright laws, we will take immediate action to remove it upon notification.
                </h1>
                <h2>
                    To report a claim of copyright infringement, please send a written notice to our center using the contact information
                    provided below. Your notice should include the following information:
                </h2>
            </div>
            <div className="child-title-style" style={{ fontSize: "17px" }}>
                <p> <GoDotFill /> Your physical or electronic signature, as the owner of an exclusive right that is allegedly infringed, or as an authorized representative of such an owner.</p>
                <p> <GoDotFill /> Identification of the copyrighted work that you claim has been infringed, or, if there are multiple copyrighted works at a single online site that are covered by a single notification, a representative list of such works at that site.</p>
                <p> <GoDotFill /> Identification of the material that you claim is infringing or is the subject of infringing activity and that should be removed or disabled, as well as information reasonably sufficient to permit us to locate the material.</p>
                <p> <GoDotFill />Information reasonably sufficient to permit us to contact you, such as your address, telephone number, and email address if available.</p>
                <p><GoDotFill />A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</p>
                <p><GoDotFill />A statement that the information in your notification is accurate and, under penalty of perjury, that you are the owner of an exclusive right that is allegedly infringed or are authorized to act on behalf of such owner.</p>
                <p><GoDotFill />Please note that submitting a false claim of copyright infringement is illegal and may result in legal consequences.</p>
            </div>
        </AddHome >
    );
}
export default DMCA;