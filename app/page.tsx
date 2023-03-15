import { Button, IconWrapper } from "../components/Button";
import { Container } from "../components/Container";
import { Hero, HeroSubtitle, HeroTitle } from "../components/Hero";
import { HeroImage } from "../components/HeroImage";
import { ChevronIcon } from "../components/icons/chevron";

export default function Page() {
  return (
    <div>
      <main>
        <Container className="overflow-hidden pt-[6.4rem]">
          <Hero>
            <Button
              href="/"
              variant="secondary"
              size="small"
              className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0.2s]"
            >
              Linear 2022 Release - Build for scale <IconWrapper>→</IconWrapper>
            </Button>
            <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0.4s]">
              Linear is a better way
              <br className="hidden md:block" />
              to build products
            </HeroTitle>
            <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0.6s]">
              Meet the new standard for modern software development.
              <br /> Streamline issues, sprints, and product roadmaps.
            </HeroSubtitle>
            <Button
              href="/"
              variant="primary"
              size="large"
              className=" translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0.8s]"
            >
              Get Started{" "}
              <IconWrapper>
                <ChevronIcon />
              </IconWrapper>
            </Button>
            <HeroImage />
          </Hero>
        </Container>
      </main>
    </div>
  );
}
