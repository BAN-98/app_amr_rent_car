import { Component } from "react";
import { FormRegister } from "../components/FormRegister";

class Register extends Component {
  render() {
    return (
      <div className="font-Onest min-h-screen p-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#FF2E1F_100%)]">
        <div className=" flex flex-col items-center justify-center">
          <div className=" bg-zinc-900/60 shadow-xl sm:px-8 md:px-8 lg:px-10 py-5 rounded-lg w-full max-w-md">
            <div className="mt-2">
              <div className="font-medium text-center text-xl sm:text-2xl text-white">
                Registrate
              </div>
              <FormRegister></FormRegister>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
