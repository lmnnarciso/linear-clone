"use client";

import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import { HamburgerIcon } from "./icons/hamburger";
import { Logo } from "./icons/logo";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-[12px]">
      <Container className="flex h-[var(--navigation-height)] border-b border-white-a08">
        <Link className="flex items-center text-md" href="/">
          <Logo className="w-[1.8rem] h-[1.8rem] mr-4" />
          Linear
        </Link>
        <div
          className={classNames(
            "transition-[visibility] md:visible",
            isMenuOpen ? "visible " : "invisible delay-500"
          )}
        >
          <nav
            className={classNames(
              "md:opacity-100 transition-opacity duration-500 fixed md:relative top-navigation-height md:top-0 left-0 md:h-auto md:block w-full md:w-auto h-[calc(100vh_-_var(--navigation-height))] bg-background md:bg-transparent overflow-auto md:overflow-hidden",
              isMenuOpen ? "opacity-100" : "opacity-0"
            )}
          >
            <ul
              className={classNames(
                "flex h-full  flex-col md:flex-row items-center [&_li]:h-top-navigation-height",
                "[&_li]:w-full [&_li]:border-b [&_li]:border-gray-border px-6 md:[&_li]:ml-6",
                "[&_a]:duration-300 [&_a]:translate-y-8 md:[&_a]:translate-y-0 [&_a]:transition-[colors,transform] [&_a]:flex [&_a]:items-center [&_a]:w-full [&_a]:h-navigation-height [&_a]:text-md md:[&_a)]:text-sm [&_a:hover]:text-gray ",
                isMenuOpen && "[&_a]:translate-y-0"
              )}
            >
              <li>
                <Link href="#">Features</Link>
              </li>
              <li>
                <Link href="#">Method</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Customers</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Changelog</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Integrations</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Company</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="ml-auto h-full flex items-center">
          <Link href="#" className="text-sm mr-6">
            Login
          </Link>
          <Button href="#">Sign up</Button>
        </div>
        <button
          className="ml-6 md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};
