"use client";

import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import { HamburgerIcon } from "./icons/hamburger";
import { Logo } from "./icons/logo";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => setIsMenuOpen(false);
    window.addEventListener("orientationchange", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("orientationchange", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-[12px]">
      <Container className="flex h-[var(--navigation-height)] border-b border-transparent-white">
        <Link className="flex items-center text-md" href="/">
          <Logo className="mr-4 h-[1.8rem] w-[1.8rem]" />
          Linear
        </Link>
        <div
          className={classNames(
            "transition-[visibility] md:visible",
            isMenuOpen ? "visible " : "delay-500 invisible"
          )}
        >
          <nav
            className={classNames(
              "fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none",
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100vw] opacity-0"
            )}
          >
            <ul
              className={classNames(
                "[&_li]:h-top-navigation-height flex  h-full flex-col items-center md:flex-row",
                "[&_li]:border-grey-border px-6 [&_li]:w-full [&_li]:border-b md:[&_li]:ml-6 [&_li]:md:border-b-0",
                "md:[&_a)]:text-md [&_a:hover]:text-grey [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-lg [&_a]:transition-[colors,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 [&_a]:md:transition-colors ",
                isMenuOpen ? "[&_a]:translate-y-[0]" : ""
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
        <div className="ml-auto flex h-full items-center">
          <Link href="#" className="mr-6 text-sm">
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
