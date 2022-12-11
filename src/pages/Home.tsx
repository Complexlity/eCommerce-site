import { Button } from "@mui/material";
import { AiOutlineSend as SendIcon } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  const HeroImage = "../assets/1.png";
  return (
    <div className="homepage flex items-center justify-center overflow-hidden bg-gray-200 p-8 dark:bg-cyan-900">
      <div className=" overflow-none relative flex h-full w-[90%] flex-col items-center justify-center gap-8 opacity-[90%]">
        <div className="hero-section absolute inset-0 z-[-1000] rounded-lg"></div>
        <h1 className="mb-4 text-5xl font-bold tracking-tighter text-white md:text-6xl">
          Welcome To{" "}
          <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            Complexlity Shop
          </span>
        </h1>
        <Link to="/products">
          <div className="float-button mx-auto max-w-3xl">
            <Button variant="contained" size="large" endIcon={<SendIcon />}>
              SHOP NOW
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
