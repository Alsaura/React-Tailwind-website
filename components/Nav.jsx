import { Link } from "react-scroll";

const Nav = () => {
  const content = (
    <>
      <div className="text">
        <ul>
          <Link to="Home">
            <li>Home</li>
          </Link>
          <Link to="About">
            <li>About</li>
          </Link>
          <Link to="Services">
            <li>Services</li>
          </Link>
          <Link to="Projects">
            <li>Projects</li>
          </Link>
          <Link to="Contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div
        className="h-10 flex justify-between z-50 text-wh
      lg:py-5 px-20 py-4"
      >
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">LOGO</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden">
          <div className="flex gap-8 mr-16 text-[18px]">
            <ul>
              <Link to="Home">
                <li>Home</li>
              </Link>
              <Link to="About">
                <li>About</li>
              </Link>
              <Link to="Services">
                <li>Services</li>
              </Link>
              <Link to="Projects">
                <li>Projects</li>
              </Link>
              <Link to="Contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
