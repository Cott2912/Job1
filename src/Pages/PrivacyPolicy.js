import React from "react";
import AddHome from "../Components/AddHome";
import { GoDotFill } from "react-icons/go";

const sections = [
    {
        title: "GENERAL INFORMATION", content: [
            "Last updated: April 12, 2024",
            "At 1Games, we are dedicated to safeguarding the privacy of all individuals who use our websites and applications, which are accessible globally. This Privacy Policy applies to all services and products offered by the 1Games Website. Please note that we cannot be held responsible for the privacy policy of other sites and sources. 1Games Website will act as the data controller in the framework of this Privacy Policy. By using this Site, you agree to this Privacy Policy and confirm that you are of legal age to consent to its terms. If there are any significant changes to this Privacy Policy, your continued use of the Site will indicate your acceptance of the updated Privacy Policy. At 1Games Website, we value the privacy of all our users and are committed to ensuring that any personal information you provide is treated confidentially.",
            "The 1Games Website is intended for Website Visitors aged 16 and above. If you are under 16 years of age, you should not use this website. By accessing the 1Games Site, you agree to comply with and be bound by the terms and conditions of this Privacy Policy. You also consent to the collection, processing, use, and disclosure of your data and information in accordance with this Privacy Policy. If you do not agree to this Privacy Policy, please refrain from using the 1Games Site. If you are a parent or legal guardian and permit your child(ren) to access the 1Games Site, you are also consenting to this Privacy Policy on their behalf.",
            "We understand that you place your trust in us, and we take this responsibility seriously. On this page, we will explain what information we collect when you use our Site, why we collect it, and how we use it to enhance your user experience. This will give you a clear understanding of our practices. If you have any questions or concerns regarding this Privacy Policy, please do not hesitate to contact us at hello@1games.io."
        ]
    },
    {
        title: "WHICH DATA DO WE COLLECT?",
        subtitles: [
            {
                subtitle: "Data you provide",
                content: ["We will only process personal data that you provide on a voluntary basis when you fill out the comment form on our Site or send us an email. This may include the following types of personal data:"],
                items: ["Name", "Email address", "Other information you choose to provide"]
            },
            {
                subtitle: "Data we collect automatically",
                items: ["Your IP address", "Your browser type and version", "The last Internet page you visited", "(Mobile) device IDs", "Cookie data", "User-level data (such as ad interactions)"],
                content: ["We may collect certain personal data through the use of cookies. For more information on this, please refer to Section Cookies of this Privacy Policy. We may also collect certain personal data without using cookies. This data can only be accessed and used during your visit to our Site and may include:"]
            },
            {
                subtitle: "Data we receive from third parties",
                content: ["If we receive Personal Information from third parties, we will notify you personally."]
            }
        ]
    },
    {
        title: "WHY DO WE COLLECT THESE DATA?",
        content: [
            "In order to optimize our services and content, we will use your personal data, provided either by you directly or automatically collected through cookies and web beacons. Additionally, we may process your personal data if required by law, such as age verification. We may also use your personal data for direct marketing purposes, including updates on new and existing games and newsletters. Furthermore, we may also use your personal data for statistical purposes and to enhance our services and products. These activities are based on legitimate interests of the 1Games Website.",
            "Please note that advertisers on our website may collect information through cookies and/or web beacons for online behavioral advertising and/or multisite advertising. For more information about the use of cookies and web beacons, please refer to Section V below.",
            "It's important to note that 1Games is not responsible for any personal data collected by third-party software or methods on the Site, which may be subject to the third parties' general terms and conditions. We recommend that you avoid using your real name or email address when playing any of the games on our Site, particularly during multi-play.",
            "Lastly, we have the right to share your data with all Google CPS Vendors so that Google DV360 may return GDPR compliant bids for ad delivery."
        ]
    },
    {
        title: "DATA RETENTION PERIODS",
        content: [
            "We will only process your personal data for as long as it is necessary to fulfill the purposes mentioned in this Privacy Policy. Your personal data will be deleted one month after a period of consecutive years during which you have not visited our Site, unless we have a legitimate reason to retain your data, such as for customer relationship management."
        ]
    },
    {
        title: "LEGAL BASIS FOR PROCESSING PERSONAL DATA UNDER THE GENERAL DATA PROTECTION REGULATION (GDPR)",
        content: ["If you are from the European Economic Area (EEA), our legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Data we collect and the specific context in which we collect it."],
        items: [
            "We need to perform a contract with you",
            "You have given us permission to do so",
            "The processing is in our legitimate interests and it is not overridden by your rights",
            "To comply with the law"
        ]
    }
];

const PrivacyPolicy = () => {
    return (
        <AddHome title="Privacy Policy">
            {sections.map((section, index) => (
                <React.Fragment key={index}>
                    <h1 style={{ color: "orange", fontSize: "20px", marginBottom: "10px" }}>{section.title}</h1>
                    {section.content && section.content.map((text, i) => <p key={i} style={{ marginBottom: "10px" }}>{text}</p>)}
                    {section.subtitles && section.subtitles.map((sub, j) => (
                        <React.Fragment key={j}>
                            <h2 style={{ color: "orange", fontSize: "16px", marginBottom: "8px" }}>{sub.subtitle}</h2>
                            {sub.content && sub.content.map((text, l) => <p key={l} style={{ marginBottom: "8px" }}>{text}</p>)}
                            {sub.items && sub.items.map((item, k) => (
                                <p key={k} style={{ marginBottom: "8px" }}><GoDotFill style={{ marginLeft: "20px", fontSize: "10px" }} /> {item}</p>
                            ))}
                        </React.Fragment>
                    ))}
                    {section.items && section.content && section.content.map((text, l) => <p key={l} style={{ marginBottom: "8px" }}>{text}</p>)}
                    {section.items && section.items.map((item, m) => (
                        <p key={m} style={{ marginBottom: "8px" }}><GoDotFill style={{ marginLeft: "20px", fontSize: "10px" }} /> {item}</p>
                    ))}
                </React.Fragment>
            ))}
        </AddHome>
    );
};

export default PrivacyPolicy;
