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
    <footer className="border-top mt-12 border-transparent-white py-[5.6rem] text-md">
      <Container className="flex flex-col justify-between lg:flex-row ">
        <div className="">
          <div className="flex h-full flex-row justify-between lg:flex-col">
            <div className="flex items-center text-grey">
              <Logo className="mr-4 h-4 w-4" /> Linear - Designed worldwide
            </div>
            <div className="mt-auto flex space-x-3 text-grey">
              <TwitterIcon />
              <GithubIcon />
              <SlackIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {footerLinks.map((column) => (
            <div className="mt-10 min-w-[18rem] lg:mt-0" key={column.title}>
              <h3 className="mb-3 font-medium">{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      className="mb-3 block text-grey transition-colors hover:text-white [&_a]:last:mb-0"
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
