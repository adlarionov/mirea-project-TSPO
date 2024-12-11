import React from "react";

export default function HeroCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <h3 className="font-bold text-2xl sm:text-4xl">{title}</h3>
      <p className="text-sm opacity-60">{subtitle}</p>
    </div>
  );
}
