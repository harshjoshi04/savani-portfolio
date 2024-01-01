import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div className="w-full h-[100vh]  bg-mainSecd  text-white " id="home">
      <div className="bg-mainFirst">
        <Navbar />
      </div>
      <HeroSection />
    </div>
  );
};

export default Home;
// https://in.pinterest.com/pin/709246641333621882/feedback/?invite_code=9b4ee1bb303249b9b7adaebaa2569981&sender_id=974114731809913217
