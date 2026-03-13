import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen flex-col">
    <SiteHeader />
    <main className="flex-1">{children}</main>
    <SiteFooter />
  </div>
);

export default PageWrapper;
