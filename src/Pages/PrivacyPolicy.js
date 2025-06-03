import React from "react";
import { Link } from "react-router-dom";
import AddHome from "../Components/AddHome";
import { GoDotFill } from "react-icons/go";
const PrivacyPolicy = () => {
    return (
        <AddHome title="Privacy Policy">
            <p>
                Last updated: April 12, 2024
            </p>
            <h1 style={{ color: "orange", fontSize: "20px" }}>
                GENERAL INFORMATION
            </h1>
            <p>
                At 1Games, we are dedicated to safeguarding the privacy of all individuals who use our websites and applications, which are accessible globally.
                This Privacy Policy applies to all services and products offered by the 1Games Website. Please note that we cannot be held responsible for the privacy policy
                of other sites and sources. 1Games Website will act as the data controller in the framework of this Privacy Policy. By using this Site, you agree to this Privacy
                Policy and confirm that you are of legal age to consent to its terms. If there are any significant changes to this Privacy Policy, your continued use of the Site will
                indicate your acceptance of the updated Privacy Policy. At 1Games Website, we value the privacy of all our users and are committed to ensuring that any personal information
                you provide is treated confidentially.
            </p>
            <p>
                The 1Games Website is intended for Website Visitors aged 16 and above. If you are under 16 years of age, you should not use this website.
                By accessing the 1Games Site, you agree to comply with and be bound by the terms and conditions of this Privacy Policy. You also consent to the collection, processing,
                use, and disclosure of your data and information in accordance with this Privacy Policy. If you do not agree to this Privacy Policy, please refrain from using the 1Games Site.
                If you are a parent or legal guardian and permit your child(ren) to access the 1Games Site, you are also consenting to this Privacy Policy on their behalf.
            </p>
            <p>We understand that you place your trust in us, and we take this responsibility seriously. On this page, we will explain what information we collect when you use our Site,
                why we collect it, and how we use it to enhance your user experience. This will give you a clear understanding of our practices. If you have any questions or concerns regarding
                this Privacy Policy, please do not hesitate to contact us at hello@1games.io.
            </p>
            <h1 style={{ color: "orange", fontSize: "20px" }}>
                WHICH DATA DO WE COLLECT?
            </h1>
            <h2 style={{ color: "orange", fontSize: "17px" }}>
                Data you provide
            </h2>
            <p1>
                We will only process personal data that you provide on a voluntary basis when you fill out the comment form on our Site or send us an email. This may include the following types of personal data: <br />
                <GoDotFill style={{ marginLeft: "20px", fontSize: "10px" }} /> Name <br />
                <GoDotFill style={{ marginLeft: "20px", fontSize: "10px" }} /> Email address <br />
                <GoDotFill style={{ marginLeft: "20px", fontSize: "10px" }} /> Other information you choose to provide
            </p1>
            <h2 style={{ color: "orange", fontSize: "17px" }}>
                Data we collect automatically
            </h2>
            <p2>We may collect certain personal data through the use of cookies. For more information on this, please refer to Section Cookies of this Privacy Policy. We may also collect certain personal data without using cookies. This data can only be accessed and used during your visit to our Site and may include:<br />
                <GoDotFill style={{ marginLeft: "20px", fontSize: "10px" }} /> Your IP address (used, e.g., for preventing double voting and location-based advertising) <br />
                <GoDotFill style={{ marginLeft: "20px", fontSize: "10px" }} /> Your browser type and version <br />
                <GoDotFill style={{ marginLeft: "20px", fontSize: "10px" }} /> The last Internet page you visited<br />
                <GoDotFill style={{ marginLeft: "20px", fontSize: "10px" }} /> (Mobile) device IDs <br />
                <GoDotFill style={{ marginLeft: "20px", fontSize: "10px" }} /> Cookie data <br />
                <GoDotFill style={{ marginLeft: "20px", fontSize: "10px" }} /> User-level data (such as whether you viewed or clicked on an advertisement) <br />
            </p2>
            <h2 style={{ color: "orange", fontSize: "17px" }}>
                Data we receive from third parties
            </h2>
            <p3>If we receive Personal Information from third parties, we will notify you personally.</p3>
            <h1 style={{ color: "orange", fontSize: "20px" }}>
                WHY DO WE COLLECT THESE DATA? BASED ON WHICH LEGAL GROUND?
            </h1>
            <p>
                In order to optimize our services and content, we will use your personal data, provided either by you directly or automatically collected through cookies and web beacons.
                Additionally, we may process your personal data if required by law, such as age verification. We may also use your personal data for direct marketing purposes, including updates
                on new and existing games and newsletters. Furthermore, we may also use your personal data for statistical purposes and to enhance our services and products. These activities are
                based on legitimate interests of the 1Games Website
            </p>
            <p>Please note that advertisers on our website may collect information through cookies and/or web beacons for online behavioral advertising and/or multisite advertising. For more
                information about the use of cookies and web beacons, please refer to Section V below.
            </p>
            <p>It's important to note that 1Games is not responsible for any personal data collected by third-party software or methods on the Site, which may be subject to the third parties'
                general terms and conditions. We recommend that you avoid using your real name or email address when playing any of the games on our Site, particularly during multi-play.
            </p>
            <p>Lastly, we have the right to share your data with all Google CPS Vendors so that Google DV360 may return GDPR compliant bids for ad delivery.</p>
            <h1 style={{ color: "orange", fontSize: "20px" }} >
                DATA RETENTION PERIODS
            </h1>
            <p>We will only process your personal data for as long as it is necessary to fulfill the purposes mentioned in this Privacy Policy. Your personal data will be deleted one month after
                a period of consecutive years during which you have not visited our Site, unless we have a legitimate reason to retain your data, such as for customer relationship management.
            </p>
            <h1 style={{ color: "orange", fontSize: "20px" }} >
                LEGAL BASIS FOR PROCESSING PERSONAL DATA UNDER THE GENERAL DATA PROTECTION REGULATION (GDPR)
            </h1>
            <p>
                If you are from the European Economic Area (EEA), our legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Data we collect and the specific context in which we collect it.
            </p>
            <p>We may process your Personal Data because: <br />
                <GoDotFill style={{ marginLeft: "20px", fontSize: "10px" }} /> We need to perform a contract with you <br />
                <GoDotFill style={{ marginLeft: "20px", fontSize: "10px" }} /> You have given us permission to do so<br />
                <GoDotFill style={{ marginLeft: "20px", fontSize: "10px" }} /> The processing is in our legitimate interests and it is not overridden by your rights<br />
                <GoDotFill style={{ marginLeft: "20px", fontSize: "10px" }} /> To comply with the law <br />
            </p>
        </AddHome >
    );
}
export default PrivacyPolicy;