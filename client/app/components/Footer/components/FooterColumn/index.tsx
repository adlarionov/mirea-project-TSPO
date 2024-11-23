import Link from "next/link";
import React from "react";

interface FooterColumn {
  title: string;
  items: { link: string; description: string }[];
}

export default function FooterColumn({ items, title }: FooterColumn) {
  return (
    <div className="flex gap-4 justify-between flex-col">
      <h3 className="text-lg">{title}</h3>
      {items.map((item, idx) => (
        <Link href={item.link} key={idx}>
          <p className="text-sm text-gray-400 hover:text-gray-600">
            {item.description}
          </p>
        </Link>
      ))}
    </div>
  );
}
