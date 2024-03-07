import { Component } from "react";
import HeaderNav from "../components/Dashboard/HeaderNav";
import Banner from "../components/Dashboard/Banner";
import { Promotion } from "../components/Dashboard/Promotion";
import { Categories } from "../components/Dashboard/Categories";

class Dashboard extends Component {
  render() {
    return (
      <>
        <div className="w-full h-screen text-black font-Onest">
          <HeaderNav />
          <Banner />
          <Promotion />
          <Categories />
        </div>
      </>
    );
  }
}

export default Dashboard;
