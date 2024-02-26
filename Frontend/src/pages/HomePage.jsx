import { Component } from "react";
import { Header } from "../components/Home/Header";
import bgImage from "../images/bgImage.jpg";
import Hero from "../components/Home/Hero";
class HomePage extends Component {
  render() {
    return (
      <div
        className="w-full min-h-screen bg-cover bg-center "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Header />
        <Hero />
      </div>
    );
  }
}

export default HomePage;
