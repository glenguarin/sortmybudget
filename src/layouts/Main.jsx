// rrd imports
import { Outlet, useLoaderData } from "react-router-dom";

//assets
import wave from "../assets/wave.svg";

// components
import Nav from "../components/Nav";

// helper functions
import { fetchData } from "../helpers";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// loader
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className="container=xxl mx-5 px-5 mt-4">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <div>
        <img className="fixed-bottom" src={wave} alt="wave" />
      </div>
    </div>
  );
};

export default Main;
