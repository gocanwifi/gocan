import { Info } from "lucide-react";

interface DisclosureBannerProps {
  className?: string;
}

const DisclosureBanner = ({ className = "" }: DisclosureBannerProps) => (
  <div className={`rounded-xl border-2 border-amber-400/60 bg-amber-50 dark:bg-amber-950/30 px-5 py-4 flex gap-3 items-start ${className}`}>
    <Info className="h-5 w-5 mt-0.5 flex-shrink-0 text-amber-600" />
    <p className="text-sm leading-relaxed text-amber-900 dark:text-amber-200">
      <strong>Disclosure:</strong> Trustournet is a third-party service assistance provider. We are <strong>not affiliated with, authorized by, or endorsed by</strong> any telecom, ISP, or cable TV provider. Our service fees are <strong>separate from</strong> your provider charges.
    </p>
  </div>
);

export default DisclosureBanner;
