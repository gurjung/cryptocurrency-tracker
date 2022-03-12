import React from "react";
import millify from "millify";
import { useFetch } from "../hooks";
import { SingleCoin } from "../config";
import { Typography, LinearProgress, makeStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { CryptoState } from "../context/CryptoContext";
import ReactHtmlParser from "react-html-parser";
import CoinsInfo from "./CoinsInfo";
import { TEXTS } from "../constants";
const CoinSummary = () => {
  const { id } = useParams();
  const { data } = useFetch(SingleCoin(id));
  const { currency, symbol } = CryptoState();
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },
    sidebar: {
      width: "30%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight: "2px solid grey",
    },
    heading: {
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Montserrat",
    },
    description: {
      width: "100%",
      fontFamily: "Montserrat",
      padding: 25,
      paddingBottom: 15,
      paddingTop: 0,
      textAlign: "justify",
    },
    marketData: {
      alignSelf: "start",
      padding: 25,
      paddingTop: 10,
      width: "100%",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "space-around",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
      },
      [theme.breakpoints.down("xs")]: {
        alignItems: "start",
      },
    },
  }));

  const classes = useStyles();

  if (!data) return <LinearProgress style={{ backgroundColor: "gold" }} />;
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <img
          src={data?.image.large}
          alt={data?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" className={classes.heading}>
          {data?.name}
        </Typography>
        <Typography variant="subtitle1" className={classes.description}>
          {ReactHtmlParser(data?.description.en.split(". ")[0])}.
        </Typography>
        <div className={classes.marketData}>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.heading}>
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
            <Typography variant="h5" className={classes.heading}>
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
            <Typography variant="h5" className={classes.heading}>
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
              M
            </Typography>
          </span>
        </div>
      </div>
      <CoinsInfo coin={data} />
    </div>
  );
};

export default CoinSummary;
