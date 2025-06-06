import "../Style/InfoSection.css";

const contentSections = [
  {
    title: "Free Games - 1Games",
    subtitle: "Welcome To 1Games",
    body: `1Games features the best range of free games online and provides the most enjoyable experience for playing games with no interruptions. Our goal is to develop the most comprehensive online playground. Free and accessible to all players. We feature the best range of free online games and provide the most enjoyable experience for playing games by yourself or with others. All of our games are available for instant play with no downloads, logins, pop-ups, or other interruptions. Our games are accessible on desktop, tablet, and mobile devices, allowing you to play them at home or while traveling.`
  },
  {
    title: "Completely Free Of Charge",
    body: `This website is suitable for families. Our objective in selecting and developing these games was to provide a positive, age-appropriate experience. In-game payments have become commonplace in free games. This matter is easily recognized through actions such as withholding material or aggravating you in an effort to induce you to purchase power-ups in those games. It appears that the catch for playing free games is that they will use every trick to get you to pay—frequently many times more than you would pay for the game outright. This method is effective, and some individuals unknowingly spend enormous amounts of money on their favorite games over time. There are no in-game purchases whatsoever in any of our games. All of our games and their materials are completely free, with no exceptions!`
  },
  {
    title: "1Games - Online Games Are Great",
    body: `Game apps have been the most common method for playing casual games for quite some time. But we believe there are strong reasons to give online games a second chance. For example, it is inconvenient to install and uninstall numerous game apps before they are ready to be played. When you want to immediately play something new, it can be quite annoying to wait for it to install. Some circumstances, like overloading your smartphone when you install too many apps or some games being exclusive to a single device type (iPhone, Android, etc.), are resolved by online games. We are not suggesting that game apps should be replaced by online games, but we believe both have advantages and can coexist in harmony. No Need To Downloads: All of our games can be played without downloading them. Why fill up your phone or computer with games you're not even sure you'll like if you can play them this way?`
  },
  {
    title: "Compatible With Any Device",
    body: `We wanted to develop an experience that was uniform across all devices. Frequently, web games are only compatible with desktop computers, while mobile devices cannot play them. Even when it does, mobile and desktop visitors to the website are offered entirely distinct games. Therefore, we wanted to provide a uniform experience across all devices so that if you play a nice game on your PC in the afternoon, you can return to play it on your phone before bed. Every game on this website is compatible with any device. Perfectly Fit To Your Screen: It is frustrating when you attempt to play a game but its dimensions do not match your screen. All the games on 1Games adapt to any screen size, allowing you to play on any device. Loading Speed Faster Than Flash: We optimize the site so everything runs as quickly as possible since we want gamers to be able to simply click (or tap) and begin playing immediately.`
  },
  {
    title: "Your Feedback Improves Us",
    body: `We regularly update this website with new games and enhancements. Instead of guessing or assuming what players want, we would like you to tell us! If you have any views, concerns, or ideas, please share them with us. We examine all of your feedback and use it to determine what updates and features to implement on the website.`
  },
  {
    title: "Our Best Selection For You",
    body: `The final and most essential are our excellent games. We select and source the most entertaining games for your enjoyment. With these features, 1Games will bring you a positive experience. Please feel free to get in touch and to leave feedback. Last but not least, our motto is: "Create the best playground for all players". Thank you for your support. Have fun!`
  }
];

const Reading = () => {
  return (
    <div className="info-container">
      {contentSections.map((section, index) => (
        <div key={index}>
          {index === 0 && <h2 className="title">{section.title}</h2>}
          {index === 0 && <h3 className="title">{section.subtitle}</h3>}
          {index !== 0 && <h4 className="title">{section.title}</h4>}
          <p className="child">{section.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Reading;
