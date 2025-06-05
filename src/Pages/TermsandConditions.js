import React from "react";
import AddHome from "../Components/AddHome";
import { GoDotFill } from "react-icons/go";

const sections = [
    {
        content: [
            "Last updated: April 12, 2024"
        ]
    },
    {
        title: "GENERAL INFORMATION",
        subtitles: [
            {
                content: [
                    "The following Terms of Service are important and require careful reading. Your acceptance of these signifies your agreement to be bound by them. This Agreement is between you and 1Games Website and pertains to your use of our website, including any materials and services available therein, and any successor site(s) there to.",
                    'BY USING THE SITE, YOU AGREE THESE TERMS OF SERVICE AND CONFIRM THAT YOU ARE OLDER THAN 16 YEARS. Any reference to "you" or "your" in this Agreement applies to the individual who uses the Site.',
                    'It is important to note that this Agreement includes a mandatory arbitration provision, which is further explained in Section 11 below. This provision requires the use of arbitration on an individual basis to resolve disputes, rather than jury trials or any other court proceedings, or class actions of any kind. Therefore, please review this section carefully.'
                ]
            },
        ]
    },
    {
        title: "CHANGES",
        content: [
            "This Agreement may be amended by us periodically, and we will notify you of such changes through any reasonable means, which may include posting a revised Agreement on the Site. Any changes made will not apply to any disputes between you and us that arose prior to the date on which we posted the revised Agreement incorporating such changes, or otherwise notified you of such changes.",
            'By using the Site after any changes to this Agreement, you agree to be bound by the revised terms, and such continued use will be deemed an irrefutable presumption of your acceptance of the changes. The date of the last update to this Agreement is indicated by the "Last Updated" legend above.',
            "We reserve the right to modify or discontinue all or part of the Site (including access through any third-party links), and we may charge, modify, or waive any fees required to use the Site, which will remain free for the foreseeable future. Additionally, we may offer opportunities to some or all Site users at any time without incurring any liability."
        ]
    },
    {
        title: "INFORMATION SUBMITTED THROUGH THE SITE",
        content: [
            'The submission of information through the Site is subject to the 1Games Website Privacy Policy, which can be found at https://1games.io/privacy-policy (referred to as the "Privacy Policy"). By using the Site, you acknowledge and agree to the Privacy Policy.',
            "You affirm that any information you provide in connection with the Site is accurate and complete, and you commit that you will maintain and update such information as needed. If there are any discrepancies between the provisions of this Agreement and the Privacy Policy regarding personal data, the provisions of the Privacy Policy will take precedence."
        ]
    },
    {
        title: "JURISDICTIONAL ISSUES",
        content: [
            "The Site is both controlled and operated from within the European Economic Area, and is not intended to make us subject to any law or jurisdiction outside of this area. Please note that the Site may not be suitable or accessible for use in certain jurisdictions. By using the Site, you assume all risks and responsibilities, and you are responsible for complying with all applicable laws, regulations, and rules.",
            "We reserve the right to restrict or limit access to the Site, in part or in full, to any person, geographic location, or jurisdiction of our choosing, at any time."
        ]
    },
    {
        title: "RULES OF CONDUCT",
        content: ["To use the site, you agree to comply with the following rules:"],
        items: [
            "You must not post, transmit, or make available any material through or in connection with the Site that may threaten, harass, degrade, intimidate, defame, libel, fraudulently misrepresent, or violate the rights and dignity of others; is obscene, indecent, pornographic, or otherwise objectionable; or is protected by intellectual property rights without the owner's express prior written consent.",
            "You must not use the site for any commercial purpose that is not authorized by the 1Games Website or for any fraudulent, tortious, or unlawful purpose.",
            "You may not collect information about site users except as permitted by the Privacy Policy.",
            "You must not interfere with or disrupt the site's operation or the servers or networks used to make the site available. This includes hacking or defacing any part of the site or violating any server or network requirement, procedure, or policy.",
            "You must not restrict or inhibit any other person from using the site.",
            "You may not reproduce, modify, adapt, translate, create derivative works of, sell, rent, lease, loan, timeshare, distribute, or otherwise exploit any portion of the site without our express prior written consent.",
            "You may not reverse engineer, decompile, or disassemble any portion of the site, except where such restriction is expressly prohibited by applicable law.",
            "You must not remove any copyright, trademark, or other proprietary rights notice from the Site.",
            "You may not frame or mirror any portion of the site or incorporate any portion of the site into any product or service without our express prior written consent.",
            "You may not systematically download and store site content.",
            'You may not use any robot, spider, site search/retrieval application, or other manual or automatic device to retrieve, index, "scrape, " "data mine," or otherwise gather site content, or reproduce or circumvent the navigational structure or presentation of the site, without our express prior written consent.',
            "You are responsible for obtaining, maintaining, and paying for all hardware, telecommunications, and other services needed to use the site."
        ]
    },
    {
        title: "MONITORING",
        content: [
            "We may (but have no obligation to) monitor, evaluate, alter or remove Submissions before or after they appear on the Site. Additionally, we may analyze your use of and access to the Site.",
            "We may disclose information regarding your use of and access to the Site, including the circumstances surrounding such use and access, to anyone for any reason or purpose, without prejudice to the Privacy Policy."
        ]
    },
];
const TermsandConditions = () => {
    return (
        <AddHome title="Terms and Conditions">
            {sections.map((section, index) => (
                <React.Fragment key={index}>
                    <h1 style={{ color: "orange", fontSize: "20px", marginBottom: "10px" }}>{section.title}</h1>
                    {section.content && section.content.map((text, i) => (
                        <p key={i} style={{ marginBottom: "10px" }}>{text}</p>
                    ))}
                    {section.subtitles && section.subtitles.map((sub, j) => (
                        <React.Fragment key={j}>
                            <h2 style={{ color: "orange", fontSize: "16px", marginBottom: "8px" }}>{sub.subtitle}</h2>
                            {sub.content && sub.content.map((text, l) => (
                                <p key={l} style={{ marginBottom: "8px" }}>{text}</p>
                            ))}
                        </React.Fragment>
                    ))}
                    {section.items && section.items.map((item, m) => (
                        <p key={m} style={{ marginBottom: "8px" }}>
                            <GoDotFill style={{ marginLeft: "20px", fontSize: "10px" }} /> {item}
                        </p>
                    ))}
                </React.Fragment>
            ))}
        </AddHome>
    );
};
export default TermsandConditions;
