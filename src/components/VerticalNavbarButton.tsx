"use client";

import { MouseEventHandler, ReactNode } from "react";
import { tv } from "tailwind-variants";

export const navbarButtonClass = tv({
  base: "rounded-lg bg-gray-950 p-3 text-start leading-none transition-colors dark:bg-gray-50",
  variants: {
    state: {
      none: "bg-opacity-5 hover:bg-opacity-15 dark:bg-opacity-10 dark:hover:bg-opacity-20",
      active: "bg-opacity-20 dark:bg-opacity-25",
    },
    color: {
      normal: "",
      destructive:
        "bg-red-500 bg-opacity-10 text-red-700 hover:bg-opacity-25 dark:bg-red-500 dark:bg-opacity-20 dark:text-red-400 dark:hover:bg-opacity-30",
    },
  },
  defaultVariants: {
    state: "none",
    color: "normal",
  },
});

type Props = {
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  children?: ReactNode;
  variant?: typeof navbarButtonClass.defaultVariants.color;
  getPathname?: () => string;
};

export default function VerticalNavbarButton({
  href,
  onClick,
  children,
  variant: color,
  getPathname,
}: Props) {
  const pathname = getPathname ? getPathname() : undefined;
  const isActive = pathname ? pathname == href : false;
  const state = isActive ? "active" : "none";

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={navbarButtonClass({ state, color })}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={navbarButtonClass({ state, color })}>
      {children}
    </button>
  );
}
