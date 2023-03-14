import Link from "next/link";
import { Container } from "./Container";
import { GithubIcon } from "./icons/github";
import { Logo } from "./icons/logo";
import { SlackIcon } from "./icons/slack";
import { TwitterIcon } from "./icons/twitter";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Changelog", href: "#" },
      { title: "Docs", href: "#" },
      { title: "Linear Method", href: "#" },
      { title: "Download", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Brand", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },
      { title: "DPA", href: "#" },
      { title: "Terms of service", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
      { title: "GitHub", href: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="mt-12 border-top border-white-a08 py-[5.6rem] text-sm">
      <Container className="flex flex-col lg:flex-row justify-between ">
        <div className="">
          <div className="flex flex-row lg:flex-col justify-between h-full">
            <div className="flex items-center text-gray">
              <Logo className="w-4 h-4 mr-4" /> Linear - Designed worldwide
            </div>
            <div className="mt-auto text-gray flex space-x-3">
              <TwitterIcon />
              <GithubIcon />
              <SlackIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {footerLinks.map((column) => (
            <div className="min-w-[18rem] mt-10 lg:mt-0" key={column.title}>
              <h3 className="font-medium mb-3">{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      className="text-gray mb-3 block [&_a]:last:mb-0 hover:text-white transition-colors"
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};
