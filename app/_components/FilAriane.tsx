"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Fragment, ReactNode } from "react";

interface FilArianeProps {
  homeElement: ReactNode;
  separator: ReactNode;
}

export default function FilAriane({ homeElement, separator }: FilArianeProps) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div className="my-6 md:my-12 flex flex-wrap gap-2 text-sm uppercase font-medium text-gray-400">
      <Link href="/" className="hover:underline">
        {homeElement}
      </Link>
      {pathNames.length > 0 && separator}

      {pathNames.map((link, index) => {
        let href = `/${pathNames.slice(0, index + 1).join("/")}`;
        let nameLink = link.replace(/-/g, " ");

        return (
          <Fragment key={index}>
            <Link key={index} href={href} className="hover:underline">
              {nameLink}
            </Link>
            {pathNames.length !== index + 1 && separator}
          </Fragment>
        );
      })}
    </div>
  );
}
