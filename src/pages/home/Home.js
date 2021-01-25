import React from "react";
import HomeLayout from "../../components/homelayout/HomeLayout";
import homeImg from "../../assets/Untitled.svg";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <HomeLayout
          name="Achieve purity with"
          img
          src={homeImg}
          visit="/login"
          btname="Get Started"
        />
      </>
    );
  }
}
