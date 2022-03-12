import React from "react";
import { Container, Typography } from "@material-ui/core";
import Carousel from "./Carousel";
import { TEXTS } from "../constants";
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
            {TEXTS.BANNER_TITLE}
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            {TEXTS.BANNER_SUBTITLE}
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
