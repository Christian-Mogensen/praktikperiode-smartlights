import FooterBtn from "./FooterBtn";
import HomeIcon from "./footerIcons/HomeIcon";
import LightBulb from "./footerIcons/LightBulbIcon";
import SettingsIcon from "./footerIcons/SettingsIcon";

const Footer = () => {
  return (
    <footer className=" h-[68px] bg-white fixed bottom-0 w-[375px] left-0">
      <nav className="flex items-center justify-center h-full">
        <ul className="grid w-64 grid-cols-3 text-3xl">
          <FooterBtn icons={<LightBulb />} />
          <FooterBtn icons={<HomeIcon />} />
          <FooterBtn icons={<SettingsIcon />} />
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
