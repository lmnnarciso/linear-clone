import classNames from "classnames";

export const Container = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={classNames("max-w-[120rem] mx-auto px-8", className)}>
      {children}
    </div>
  );
};
