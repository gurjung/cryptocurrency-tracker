import React from "react";
import millify from "millify";
import { useFetch } from "../../hooks";
import { SingleCoin } from "../../config";
import { Typography, LinearProgress } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { CryptoState } from "../../context/CryptoContext";
import ReactHtmlParser from "react-html-parser";
import CoinsInfo from "../CoinsInfo/CoinsInfo";
import { TEXTS } from "../../constants";
import "./coinSummary.css";
const CoinSummary = () => {
  const { id } = useParams();
  const { data } = useFetch(SingleCoin(id));
  const { currency, symbol } = CryptoState();

  if (!data) return <LinearProgress style={{ backgroundColor: "gold" }} />;
  return (
    <div className="Coin-summaryContainer">
      <div className="Coin-summarySidebar">
        <img
          src={data?.image.large}
          alt={data?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" className="Coin-summaryHeading">
          {data?.name}
        </Typography>
        <Typography variant="subtitle1" className="Coin-summaryDescription">
          {ReactHtmlParser(data?.description.en.split(". ")[0])}.
        </Typography>
        <div className="Coin-summaryMarketData">
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className="Coin-summaryHeading">
              {TEXTS.RANK}
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {millify(data?.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography variant="h5" className="Coin-summaryHeading">
              {TEXTS.CURRENT_PRICE}
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {millify(data?.market_data.current_price[currency.toLowerCase()])}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className="Coin-summaryHeading">
              {TEXTS.MARKET_CAP}
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {millify(
                data?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
            </Typography>
          </span>
        </div>
      </div>
      <CoinsInfo coin={data} />
    </div>
  );
};

export default CoinSummary;
