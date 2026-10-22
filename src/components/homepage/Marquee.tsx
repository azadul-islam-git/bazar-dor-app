import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import Link from "next/link";
import { IoCaretUp, IoCaretDown, IoRemove } from "react-icons/io5";

interface IHeadlines {
  id: number;
  slug: string;
  nameBn: string;
  image: string;
  unit: string;
  today: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}

const UNIT_BN: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

const toBn = (n: number) => n.toLocaleString("bn-BD");

const Marquee = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data: IHeadlines[] = await res.json();

  return (
    <div className="w-full overflow-hidden border-y border-gray-200 bg-white py-2">
      <MarqueeText direction="right" duration={30} pauseOnHover>
        {data.map((p) => {
          const { dir, pct } = p.change;
          const color =
            dir === "up"
              ? "text-red-600"
              : dir === "down"
                ? "text-green-600"
                : "text-gray-400";
          const Icon =
            dir === "up" ? IoCaretUp : dir === "down" ? IoCaretDown : IoRemove;

          return (
            <Link
              key={p.id}
              href={`/products/${p.slug}`}
              className="mx-6 inline-flex items-center gap-2 whitespace-nowrap text-sm transition-opacity hover:opacity-70"
            >
              <span className="text-lg">{p.image}</span>
              <span className="font-medium">{p.nameBn}</span>
              <span className="text-gray-600">
                {toBn(p.today)} টাকা/{UNIT_BN[p.unit] ?? p.unit}
              </span>
              <span
                className={`inline-flex items-center font-semibold ${color}`}
              >
                <Icon />
                {toBn(Math.abs(pct))}%
              </span>
            </Link>
          );
        })}
      </MarqueeText>
    </div>
  );
};

export default Marquee;
