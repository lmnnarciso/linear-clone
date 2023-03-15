interface HeroProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-gradient my-6 text-5xl md:text-8xl">{children}</h1>
  );
};

export const HeroSubtitle = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-primary mb-12 text-lg">{children}</p>;
};
export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};
