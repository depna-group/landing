import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import seepid from "../../public/images/Logo - Blue - Big - V2.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { footer } = menu;
  return (
    <footer style={{ background: "#CFDBEE" }} className="section pb-0">
      <div className="container">
        {/* footer menu */}
        <div className="row">
          {footer.map((col) => {
            return (
              <div
                className="mb-12 flex flex-col items-center sm:col-6 lg:col-3 md:items-start"
                key={col.name}
              >
                {markdownify(col.name, "h2", "h4")}
                <ul className="mt-6">
                  {col?.menu.map((item) => (
                    <li className="mb-1" key={item.text}>
                      <Link href={item.url} rel="">
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          {/* social icons */}
          <div className="md-12 sm:col-12 lg:col-6">
            <Link
              href="/"
              aria-label="logo"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Image src={seepid} alt="" className=" h-1/3  w-1/3" />
            </Link>

            {/* <Social source={social} className="social-icons mb-8" /> */}
          </div>
        </div>
        <div className="border-t border-border py-6">
          {markdownify(copyright, "p", "text-sm text-center")}
        </div>
        {/* copyright */}
      </div>
    </footer>
  );
};

export default Footer;
