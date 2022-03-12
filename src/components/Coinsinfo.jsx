import React, { useState } from "react";
import {
  ThemeProvider,
  CircularProgress,
  SelectButton,
} from "@material-ui/core";
import { HistoricalChart } from "../config";
import { Line } from "react-chartjs-2";
import { useFetch } from "../hooks";
import { CryptoState } from "../context/CryptoContext";
const Coinsinfo = ({ coin }) => {
  const { currency } = CryptoState();
  const [days, setDays] = useState(1);
  const { data } = useFetch(HistoricalChart(coin?.id, days, currency));
  console.log(data, "...");
  return <div>CoinsInfo</div>;
};

export default Coinsinfo;
