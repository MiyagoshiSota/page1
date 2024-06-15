import "@/styles/homepage.scss";
import "@/styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Searchbar from "@/features/common/searchbar/Searchbar";
import JobCard from "@/components/ui/JobCard";
import Button from "@/components/ui/Button";

const main = () => {
  const headerIconSize = 40,
    aboutmeIconSize = 100;
  const shrttButtonSize = 160,longButtonSize = 240;

  return (
    <main>
      <header className="header">
        <div className="header__icon">
          <Icon size={headerIconSize} imgURL="/iconImg.jpg" />
        </div>
        <div className="header__name">
          <p>Japanese Ceramic Artist</p>
        </div>
        <nav className="header__nav">
          <ul className="header__ul">
            <li>
              <Link href="/" className="header__li--link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="header__li--link">
                Products
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="header__li--link">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/about" className="header__li--link">
                About
              </Link>
            </li>
          </ul>
          <Searchbar />
        </nav>
      </header>
      <div className="aboutme">
        <div className="aboutme__icon">
          <Icon size={aboutmeIconSize} imgURL="/iconImg.jpg" />
        </div>
        <div className="aboutme__info">
          <p className="aboutme__info--name">Miyagoshi Sota</p>
          <JobCard text="Master Ceramic Artist" />
          <p className="aboutme__info--description">
            Creating timeless ceramic pieces inspired by nature.
          </p>
        </div>
        <div className="aboutme__buttons">
          <Button text="Contact" width={shrttButtonSize} color="white" />
          <Button
            text="View Portfolio"
            width={shrttButtonSize}
            color="black"
          />
        </div>
      </div>
			<div className="featuredProducts">
				<div className="featuredProducts__info">
					<div>
						<p>Featured Products</p>
						<p>Explore our exquisite collection of handcrafted ceramics.</p>
						<Button text="Contact" width={longButtonSize} color="white" />
					</div>
				</div>
				<div className="featuredProducts__posts"></div>
			</div>
    </main>
  );
};

export default main;
