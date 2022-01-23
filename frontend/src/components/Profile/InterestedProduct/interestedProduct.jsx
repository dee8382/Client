import React from "react";
import CardForInterestedProduct from "./CardForInterestedProduct";
import Slider from "react-slick";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  divStyle: {
    width: (props) => props.v1,
    margin: "0px auto 40px",
    "@media (max-width: 1300px)": {
      width: (props) => props.v2,
    },
    "@media (max-width: 1200px)": {
      width: (props) => props.v3,
    },
    "@media (max-width: 900px)": {
      width: (props) => props.v4,
    },
    "@media (max-width: 820px)": {
      width: (props) => props.v5,
    },
    "@media (max-width: 700px)": {
      width: (props) => props.v6,
    },
    "@media (max-width: 620px)": {
      width: (props) => props.v7,
    },
    "@media (max-width: 499px)": {
      width: (props) => props.v8,
    },
  },
});

function InterestedProduct(props) {
  console.log(props.length);
  const slides1500 = props.length >= 4 ? 4 : props.length;
  const slides1300 = props.length >= 3 ? 3 : props.length;
  const slides800 = props.length >= 2 ? 2 : props.length;
  const slides520 = props.length >= 1 ? 1 : props.length;
  const v1 = `${slides1500 * 260 + 40 * slides1500}px`;
  const v2 = `${slides1500 * 240 + 20 * slides1500}px`;
  const v3 = `${slides1300 * 260 + 20 * slides1300}px`;
  const v4 = `${slides1300 * 220 + 20 * slides1300}px`;
  const v5 = `${slides800 * 260 + 20 * slides800}px`;
  const v6 = `${slides800 * 240 + 20 * slides800}px`;
  const v7 = `${slides800 * 210 + 20 * slides800}px`;
  const v8 = `${slides520 * 240 + 40 * slides520}px`;
  const styleObject = {
    v1: v1,
    v2: v2,
    v3: v3,
    v4: v4,
    v5: v5,
    v6: v6,
    v7: v7,
    v8: v8,
  };
  console.log(styleObject);
  const classes = useStyles(styleObject);
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: slides1500,
    slidesToScroll: slides1500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: slides1300,
          slidesToScroll: slides1300,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: slides800,
          slidesToScroll: slides800,
          dots: false,
        },
      },
      {
        breakpoint: 499,
        settings: {
          slidesToShow: slides520,
          slidesToScroll: slides520,
          dots: false,
        },
      },
    ],
  };
  const array = [];
  return (
    <div className={classes.divStyle}>
      <Slider {...settings}>
        {array &&
          array.map((data, index) => {
            return <CardForInterestedProduct key={index} />;
          })}
      </Slider>
    </div>
  );
}
export default InterestedProduct;
