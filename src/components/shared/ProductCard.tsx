import Link from "next/link";
import { IoCaretUp, IoCaretDown, IoRemove } from "react-icons/io5";

export interface IProduct {
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

const unitBangla: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

const changeStyle = {
  up: { Icon: IoCaretUp, badge: "bg-red-50 text-red-600" },
  down: { Icon: IoCaretDown, badge: "bg-green-50 text-green-600" },
  flat: { Icon: IoRemove, badge: "bg-gray-100 text-gray-500" },
} as const;

const toBn = (n: number) => n.toLocaleString("bn-BD");

const ProductCard = ({ product }: { product: IProduct }) => {
  const { slug, nameBn, image, unit, today, change } = product;
  const { Icon, badge } = changeStyle[change.dir];

  return (
    <Link
      href={`/products/${slug}`}
      className="card border border-base-200 bg-base-100 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="card-body gap-4 p-4">
        {/* top: emoji + name + unit */}
        <div className="flex items-center gap-3">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-base-200 text-2xl">
            {image}
          </div>
          <div className="min-w-0">
            <h3 className="truncate font-medium text-gray-900">{nameBn}</h3>
            <p className="text-xs text-gray-500">
              প্রতি {unitBangla[unit] ?? unit}
            </p>
          </div>
        </div>

        {/* bottom: price + change badge */}
        <div>
          <p className="text-xs text-gray-600">আজকের দাম</p>
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold text-gray-900">
              {toBn(today)} <span className="text-sm font-normal">টাকা</span>
            </p>
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${badge}`}
            >
              <Icon />
              {toBn(Math.abs(change.pct))}%
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
