import React from "react";
import Link from "next/link";
import Image from "next/image";

interface FooterIcons {
  icons: { link: string; icon: string }[];
}

export default function FooterIcons({ icons }: FooterIcons) {
  return (
    <div className="flex gap-2">
      {icons.map(({ icon, link }, idx) => (
        <Link key={idx} href={link}>
          <Image src={icon} alt={icon} />
        </Link>
      ))}
    </div>
  );
}
