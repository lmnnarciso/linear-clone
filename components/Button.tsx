import Link from "next/link";
import classNames from "classnames";
import { cva, VariantProps } from "class-variance-authority";

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href: string;
}

export const buttonClasses = cva("rounded-full inline-flex items-center", {
  variants: {
    variant: {
      primary: "bg-primary-gradient hover:text-shadow hover:shadow-primary",
      secondary: "",
      tertiary: "",
    },
    size: {
      small: "text-sm px-3 h-7",
      medium: "text-md px-4 h-8",
      large: "text-lg px-6 h-12",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export const Button = ({ children, href, variant, size }: ButtonProps) => {
  return (
    <Link href={href} className={buttonClasses({ variant, size })}>
      {children}
    </Link>
  );
};
