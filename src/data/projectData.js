import blockchainWebsite from "../assets/blockchainWebsite.png";
import weather from "../assets/weather.png";
import game2 from "../assets/game2.png";

export default {
  Blockchain_Auction_Website: {
    extension: "Blockchain_Auction_Website",
    title: "BLOCKCHAIN BASED AUCTION WEBSITE",
    image: blockchainWebsite,
    content:
      "Developed an auction website to provide a secure platform for people to host and participate in auctions.",
    stack: ["REACT", "EXPRESS", "SQL", "SOLIDITY"],
    gitUrl: "https://github.com/Garuna414/React-Weather-App",
    url: "",
    detailInfo:
      "Our platform offers a secure, anonymous online auction experience by leveraging Ethereum blockchain technology. Using Solidity-based smart contracts, we ensure transparent and tamper-proof transactions, where the ownership token of the auction item and bid amounts are transferred securely between the auctioneer and the highest bidder. Users can sign in through MetaMask wallets, and only upon successful login can they participate in or host an auction. To maintain integrity, we have implemented a rating system, where both auctioneers and bidders are rated based on their behavior during the auction. Any malpractice results in a reduction of ratings, ensuring fair and trustworthy interactions. Smart contracts facilitate the exchange of ownership tokens for bid amounts, guaranteeing the authenticity of the entire auction process.",
    detailStack: {
      frontEnd: [
        "ReactJS for developing frontend of the website.",
        "Javascript for developing functionality of the website.",
        "Bootstrap for designing of components of the website.",
      ],
      backEnd: [
        "SQL for storing all auctions and users data.",
        "ExpressJS for developing APIs to ensure seamless transfer of data between frontend and backend.",
      ],
      otherTools: [
        "Solidity for developing smart contracts.",
        "Truffle as a framework to build ethereum based smart contracts.",
        "Ganache for providing test wallet accounts.",
        "XAMPP Server for ensuring transfer of data between from frontend and backend.",
        "Metamask as a digital wallet to execute transactions and authenticate users entering the website.",
        "Sepolia test net for testing of the website",
      ],
    },
  },
  Weather_Website: {
    extension: "Weather_Website",
    title: "WEATHER MONITORING WEBSITE",
    image: weather,
    content:
      "React based responsive website providing current and upcoming weather of city entered by user using GeoDB and OpenWeather APIs.",
    stack: ["REACT", "APIs"],
    gitUrl: "https://github.com/Garuna414/WhatsTheTemperature",
    url: "https://react-weather-darft8cj6-anurag-nalkars-projects.vercel.app",
    detailInfo:
      "This dynamic, single-page web application is built with React, Bootstrap, HTML, CSS, and JavaScript. It integrates with third-party APIs such as GeoDB Cities and OpenWeather to provide users with real-time and upcoming weather information for any city they choose. Users can enter a city name, and the app fetches and displays detailed weather data, including current conditions and forecasts for the upcoming 24 hours at a 3 hour interval. The website is deployed on Vercel cloud platform and the link is provided below.",
    detailStack: {
      frontEnd: [
        "ReactJS for developing frontend of the website.",
        "Javascript for developing functionality of the website.",
        "Bootstrap for designing of components of the website.",
      ],
      backEnd: [
        "GeoDB Cities API for fetching city names for dropdown suggestions.",
        "OpenWeather API for fetching current and upcoming weather information based on name of city entered.",
      ],
      otherTools: ["Vercel cloud platform to host the website."],
    },
  },
  Racing_Game: {
    extension: "Racing_Game",
    title: "2D SURVIVAL RACING GAME",
    image: game2,
    content:
      "Unity based 2D survival car racing game with four unique levels with unique vehicles. ",
    stack: ["C#", "UNITY 2D"],
    gitUrl: "https://github.com/Garuna414/Drive_2_Survive",
    url: "",
    detailInfo:
      "This 2D survival car racing game was developed in Unity using C#. It offers two distinct game modes: Campaign and Free Play. In Campaign Mode, players must race through 4 unique levels, each featuring different vehicles. The objective is to complete each level as quickly as possible without crashing, with the fastest time being recorded as the high score for each level. In Free Play Mode, players can explore the map freely, perform stunts, and drive the provided vehicle without any timer, enjoying an open-ended experience.",
    detailStack: {
      languages: ["C# for developing functionality of game components."],
      gameEngine: [
        "Unity 2D as the game engine for developing the final playable application.",
      ],
    },
  },
};
