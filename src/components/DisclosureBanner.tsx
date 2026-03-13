import { Info } from "lucide-react";

interface DisclosureBannerProps {
  className?: string;
}

const DisclosureBanner = ({ className = "" }: DisclosureBannerProps) => (
  <div className={`disclosure-banner rounded-xl px-5 py-4 flex gap-3 items-start ${className}`}>
    <Info className="h-5 w-5 mt-0.5 flex-shrink-0 opacity-80" />
    <p className="text-sm leading-relaxed">
      <strong>Independent Disclosure:</strong> NorthBridge Service Assist is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any telecom or internet service provider.
    </p>
  </div>
);

export default DisclosureBanner;
