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
    url: "https://github.com/Garuna414/React-Weather-App",
    detailInfo:
      "Our platform offers a secure, anonymous online auction experience by leveraging Ethereum blockchain technology. Using Solidity-based smart contracts, we ensure transparent and tamper-proof transactions, where the ownership token of the auction item and bid amounts are transferred securely between the auctioneer and the highest bidder. Users can sign in through MetaMask wallets, and only upon successful login can they participate in or host an auction. To maintain integrity, we have implemented a rating system, where both auctioneers and bidders are rated based on their behavior during the auction. Any malpractice results in a reduction of ratings, ensuring fair and trustworthy interactions. Smart contracts facilitate the exchange of ownership tokens for bid amounts, guaranteeing the authenticity of the entire auction process.",
      detailStack: {
        frontEnd: [
            "ReactJS for developing frontend of the website.",
            "Javascript for developing functionality of the website.",
            "Bootstrap for designing of components of the website."
        ],
        backEnd: [
            "SQL for storing all auctions and users data.",
            "ExpressJS for developing APIs to ensure seamless transfer of data between frontend and backend."
        ],
        otherTools: [
            "Solidity for developing smart contracts.",
            "Truffle as a framework to build ethereum based smart contracts.",
            "Ganache for providing test wallet accounts.",
            "XAMPP Server for ensuring transfer of data between from frontend and backend.",
            "Metamask as a digital wallet to execute transactions and authenticate users entering the website.",
            "Sepolia test net for testing of the website"
        ]
      }
  },
  Weather_Website: {
    extension: "Weather_Website",
    title: "WEATHER MONITORING WEBSITE",
    image: weather,
    content:
      "React based responsive website providing current and upcoming weather of city entered by user using GeoDB and OpenWeather APIs.",
    stack: ["REACT", "APIs"],
    url: "https://github.com/Garuna414/WhatsTheTemperature",
  },
  Racing_Game: {
    extension: "Racing_Game",
    title: "2D SURVIVAL RACING GAME",
    image: game2,
    content:
      "Unity based 2D survival car racing game with four unique levels with unique vehicles. ",
    stack: ["C#", "UNITY 2D"],
    url: "https://github.com/Garuna414/Drive_2_Survive",
  },
};
