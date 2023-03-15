interface HeroProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="my-6 text-5xl md:text-7xl">{children}</h1>;
};

export const HeroSubtitle = ({ children }: { children: React.ReactNode }) => {
  return <p className="mb-12 text-lg">{children}</p>;
};
export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};
