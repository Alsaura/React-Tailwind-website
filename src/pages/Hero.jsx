import imagesHero from "../assets/Hero.png";
import logo from "../assets/logo.svg";
import call from "../assets/call.svg";

const Hero = () => {
  return (
    <section className="container mx-auto pb-20">
      <div className="container grid grid-cols-12 px-4 pt-6 items-center ">
        <div className="col-span-6 flex flex-col ">
          <span className="font-plusJak font-extrabold text-blue-700 flex gap-4 mb-2.5">
            <img src={logo} alt="" />
            TRENDIEST TAILWIND TEMPLATES
          </span>
          <h1 className="text-6xl font-plusJak font-extrabold mb-4 text-blue-900 w-3/4 md:w-5/6 leading-extra">
            Take your website to the next level with Horizon UI
          </h1>
          <span className="text-start text-blue-600 w-3/5 md:w-5/6 text-base font-plusJak font-medium mb-6">
            Save hundreds of hours trying to create and develop a dashboard from
            scratch. The fastest, most responsive & trendiest dashboard is here.
            Seriously.
          </span>
          <div className="flex gap-1 py">
            <a
              href="https://www.linkedin.com/in/alsauraas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="py-4 px-7 bg-blue-800 rounded-md text-white font-plusJak font-bold">
                Get started now
              </button>
            </a>
            <button className="flex gap-3 items-center py-4 px-7 text-blue-900 font-plusJak font-bold">
              <img src={call} alt="" />
              Book a free call
            </button>
          </div>
        </div>
        <div className="col-span-6 flex justify-end items-start">
          <img
            className="max-h-full bg-[length:456px_640px] w-4/5"
            src={imagesHero}
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
