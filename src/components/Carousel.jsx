import React from "react";
import AliceCarousel from "react-alice-carousel";
import { TrendingCoins } from "../config/index";
import { CryptoState } from "./../context/CryptoContext";
import { useFetch } from "../hooks";
import { Link } from "react-router-dom";
import millify from "millify";
const Carousel = () => {
  const { currency, symbol } = CryptoState();
  const { data } = useFetch(TrendingCoins(currency));

  const items = data?.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <Link className="Carousel-item" to={`/coins/${coin.id}`}>
        <img
          src={coin?.image}
          alt={coin.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol} {millify(coin?.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  return (
    <div>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
};

export default Carousel;
