import classNames from "classnames";

interface HeroProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroProps) => {
  return (
    <h1
      className={classNames(
        "text-gradient my-6 text-5xl md:text-8xl",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const HeroSubtitle = ({ children, className }: HeroProps) => {
  return (
    <p className={classNames("text-primary mb-12 text-lg", className)}>
      {children}
    </p>
  );
};

export const Hero = ({ children, className }: HeroProps) => {
  return <div className={classNames("text-center", className)}>{children}</div>;
};
