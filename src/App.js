import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [selectedGenre, setGenre] = useState("action");

  const animeData = {
    action: [
      {
        name: "Boku no hero Academia",
        rating: "5/5",
        image:
          "https://instagram.fbom3-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/120037320_782453272571308_5828290898997411679_n.jpg?_nc_ht=instagram.fbom3-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=0UMWwx2GCNEAX_1sUfD&tp=1&oh=f7297985b3db69c82bfe021355bae8df&oe=5FF74176"
      },
      {
        name: "One Punch Man",
        rating: "3.5/5",
        image:
          "https://instagram.fbom3-1.fna.fbcdn.net/v/t51.2885-15/e35/c157.0.406.406a/s320x320/129738105_391220888794772_353418858513441630_n.jpg?_nc_ht=instagram.fbom3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=k4iHPxoBMlUAX8nKlb0&tp=1&oh=72440614cf1d921eadf59019aa85c3b2&oe=5FCF863D"
      },
      {
        name: "Haikyuu!",
        rating: "5/5",
        image:
          "https://instagram.fbom3-2.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/129116576_2887670598222374_4582201993256014344_n.jpg?_nc_ht=instagram.fbom3-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=nBCDQDK2i-kAX9PE1GH&tp=1&oh=73d08845b1b72736d7f11c59e2c3b971&oe=5FF82CAF"
      },
      {
        name: "Hunter x Hunter",
        rating: "5/5",
        image:
          "https://sm.ign.com/ign_ap/screenshot/default/2018012446166639_ayt5.jpg"
      },
      {
        name: "Dragon Ball Super",
        rating: "4/5",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/91BwS1BA22L._RI_.jpg"
      }
    ],
    comedy: [
      {
        name: "Gintama",
        rating: "3/5",
        image:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQsjWxBpD5YzjRl-nZlgbs4BPmxwpIEvbd_hcGwgzpdeiH2H1Gj"
      },
      {
        name: "Cromartie High School",
        rating: "2.5/5",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjML18ORhIlZ0oy2MhUpzW1oANaZ-ipFnjLerpF-wH4CQkzHui"
      }
    ],
    horror: [
      {
        name: "Ghost Stories",
        rating: "3.8/5",
        image: "https://static.tvtropes.org/pmwiki/pub/images/ghost_stories.jpg"
      },
      {
        name: "Blood+",
        rating: "4/5",
        image: "https://images5.alphacoders.com/310/thumb-1920-310967.jpg"
      }
    ]
  };

  return (
    <div className="App">
      <h1 className="page-heading">
        <span role="img" aria-label="swords">
          ️⚔️
        </span>{" "}
        goodanime
      </h1>
      <div className="page-subtext">Checkout my anime recommendations</div>
      {Object.keys(animeData).map((item) => (
        <button
          className="btn-genre"
          key={item + "btn"}
          onClick={() => setGenre(item)}
        >
          {item}
        </button>
      ))}
      <hr />
      <div>
        <ul className="list-items">
          {animeData[selectedGenre].map((item) => (
            <li key={item.name}>
              <img src={item.image} alt={item.name} className="item-image" />

              <div className="text-content">
                <div className="item-name">{item.name}</div>
                <div className="item-rating">{item.rating}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
