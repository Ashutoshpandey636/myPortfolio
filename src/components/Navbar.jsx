import logo from "../assets/Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className="h-10 w10" src={logo} alt="logo"/>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/ashutoshpandey-dev/"><FaLinkedin/></a>
      <a href="https://github.com/Ashutoshpandey636"><FaGithub/></a>
      <a href="https://x.com/ashutoshdp2003"><FaSquareXTwitter/></a>
      <a href="https://www.instagram.com/ashutoshpandey636/"><FaInstagram/></a>
    </div>
  </nav>
};

export default Navbar;
