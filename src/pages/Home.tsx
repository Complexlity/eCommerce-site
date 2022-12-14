import { Button } from "@mui/material";
import { FC } from "react";
import { AiOutlineSend as SendIcon } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homepage flex items-center justify-center overflow-hidden bg-gray-200 dark:bg-cyan-900 xs:p-8">
      {/* Hero Section large Screen */}
      <div className="mt-4 hidden h-full grid-cols-2 items-center justify-between gap-6 py-4 lg:grid">
        <div className="flex h-full flex-col items-center justify-center gap-12">
          <h1 className="mb-4 max-w-[15ch] text-5xl font-bold tracking-tighter dark:text-white md:text-6xl">
            Welcome To{" "}
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              Complexlity Shop
            </span>
          </h1>
          <p className="text-2xl italic dark:text-gray-200">
            We Sell Quality And Variety.
            <br /> Shop with us or else...
            <span className="not-italic">🙂</span>
          </p>
          <div className="float-button">
            <Link to="/products">
              <Button variant="contained" size="large" endIcon={<SendIcon />}>
                SHOP NOW
              </Button>
            </Link>
          </div>
        </div>
        <div className="hero-section aspect-square h-[80%] w-full rounded-2xl "></div>
      </div>

      {/* Hero secton Smll screen */}
      <div className="overflow-none relative flex h-full w-full flex-col items-center justify-center gap-8 opacity-[90%] xs:w-[90%] lg:hidden">
        <div className="hero-section absolute inset-0 z-[-1000] xs:rounded-lg"></div>
        <TextContent />
      </div>
    </div>
  );
};

export default Home;

const TextContent: FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tighter text-white dark:text-gray-200 xs:mb-4 xs:text-5xl md:text-6xl">
        Welcome To{" "}
        <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
          Complexlity Shop
        </span>
      </h1>
      <p className="text-2xl italic text-white">
        We Sell Quality And Variety.
        <br /> Shop with us or else...
        <span className="not-italic">🙂</span>
      </p>
      <Link to="/products">
        <div className="md:float-button mx-auto max-w-3xl">
          <Button variant="contained" size="large" endIcon={<SendIcon />}>
            SHOP NOW
          </Button>
        </div>
      </Link>
    </>
  );
};
