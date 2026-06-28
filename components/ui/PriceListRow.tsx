import { ReactNode } from "react";
import clsx from "clsx";

type RibbonTone = "primary" | "secondary" | "accent";

const ribbonClasses: Record<RibbonTone, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
};

interface PriceListRowProps {
  name: string;
  detail?: string;
  price: string;
  ribbonTone?: RibbonTone;
  href?: string;
  badge?: ReactNode;
}

// Adapted from the actual price-list materials: name + duration on the
// left, price in a solid color bar on the right. Previously every price
// on the site lived inside an image-led card -- this is the layout the
// brand's own materials actually use, and it reads faster for someone
// scanning a list of services.
export default function PriceListRow({
  name,
  detail,
  price,
  ribbonTone = "primary",
  href,
  badge,
}: PriceListRowProps) {
  const content = (
    <div className="flex items-stretch bg-background rounded-lg overflow-hidden border border-surface hover:border-primary-200 transition-colors">
      <div className="flex-1 px-5 py-4">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="font-playfair font-bold text-text-primary">{name}</p>
          {badge}
        </div>
        {detail && <p className="text-sm text-text-secondary mt-1">{detail}</p>}
      </div>
      <div
        className={clsx(
          "w-24 flex-shrink-0 flex items-center justify-center text-white font-medium",
          ribbonClasses[ribbonTone],
        )}
      >
        {price}
      </div>
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }
  return content;
}
