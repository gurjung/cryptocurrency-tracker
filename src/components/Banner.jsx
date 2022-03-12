import React from "react";
import { Container, Typography } from "@material-ui/core";
import Carousel from "./Carousel";
const Banner = () => {
  return (
    <div style={{ backgroundImage: "url(./banner.jpg)" }}>
      <Container className="Banner-content">
        <div className="Banner-title">
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Tracker
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
