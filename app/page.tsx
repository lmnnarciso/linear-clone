import { Button, IconWrapper } from "../components/Button";
import { Container } from "../components/Container";
import { Hero, HeroSubtitle, HeroTitle } from "../components/Hero";
import { ChevronIcon } from "../components/icons/chevron";

export default function Page() {
  return (
    <div>
      <main>
        <Container className="pt-[6.4rem]">
          <Hero>
            <Button href="/" variant="secondary" size="small">
              Linear 2022 Release - Build for scale <IconWrapper>→</IconWrapper>
            </Button>
            <HeroTitle>
              Linear is a better way
              <br className="hidden md:block" />
              to build products
            </HeroTitle>
            <HeroSubtitle>
              Meet the new standard for modern software development.
              <br /> Streamline issues, sprints, and product roadmaps.
            </HeroSubtitle>
            <Button href="/" variant="primary" size="large">
              Get Started{" "}
              <IconWrapper>
                <ChevronIcon />
              </IconWrapper>
            </Button>
            <img className="mt-[12.8rem]" src="/images/hero.webp" alt="hero" />
          </Hero>
        </Container>
      </main>
    </div>
  );
}
