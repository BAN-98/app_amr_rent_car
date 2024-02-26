import { Component } from "react";
import HeaderNav from "../components/Dashboard/HeaderNav";
import Banner from "../components/Dashboard/Banner";

class Dashboard extends Component {
  render() {
    return (
      <>
        <div className="w-full h-screen text-black font-Onest">
          <HeaderNav />
          <Banner />
        </div>
      </>
    );
  }
}

export default Dashboard;
