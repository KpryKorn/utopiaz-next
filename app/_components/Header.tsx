"use client";

import Logo from "./Logo";

export default function Header() {
  return (
    <header className="my-4 md:my-8">
      <Logo brandName={true} spin={false} />
    </header>
  );
}
