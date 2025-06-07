import AddHome from "../Components/AddHome";
import { GoDotFill } from "react-icons/go";

const dmcaPoints = [
    "Your physical or electronic signature, as the owner of an exclusive right that is allegedly infringed, or as an authorized representative of such an owner.",
    "Identification of the copyrighted work that you claim has been infringed, or, if there are multiple copyrighted works at a single online site that are covered by a single notification, a representative list of such works at that site.",
    "Identification of the material that you claim is infringing or is the subject of infringing activity and that should be removed or disabled, as well as information reasonably sufficient to permit us to locate the material.",
    "Information reasonably sufficient to permit us to contact you, such as your address, telephone number, and email address if available.",
    "A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law."
];

const DMCA = () => {
    return (
        <AddHome title="DMCA">
            <h1 style={{ fontSize: "18px", marginBottom: "10px" }}>
                We have implemented a procedure to address any concerns regarding potential copyright violations on the Site. If you suspect that any content infringes on copyright laws, we will take immediate action to remove it upon notification.
            </h1>
            <h2 style={{ fontSize: "16px", marginBottom: "10px" }}>
                To report a claim of copyright infringement, please send a written notice to our center using the contact information provided below. Your notice should include the following information:
            </h2>
            {dmcaPoints.map((point, index) => (
                <p key={index} style={{ fontSize: "16px", marginBottom: "8px" }}>
                    <GoDotFill style={{ marginLeft: "20px", fontSize: "10px" }} /> {point}
                </p>
            ))}
        </AddHome>
    );
}

export default DMCA;
