import { Link } from "@tanstack/react-router";
import { useTheme } from "@/hooks/use-theme";
import logoLight from "@/assets/xtratech-logo-dark.png";
import logoDark from "@/assets/xtratech-logo.png.asset.json";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const { resolvedTheme } = useTheme();
  const logo = resolvedTheme === "dark" ? logoDark.url : logoLight;

  return (
    <footer className="border-t border-border/60 bg-surface mt-20">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="Xtratech Global Solutions" className="h-10 w-auto" />
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Xtratech Global Solutions Limited delivers SaaS, web, mobile, blockchain and
            tracking solutions for SMEs and agencies — engineered for scale, designed for trust.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">RC: 1585165</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Insights</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-brand" />
              <a href="tel:+2349026155550" className="hover:text-foreground">+234 902 615 5550</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-brand" />
              <a href="mailto:info@xtratechgs.com" className="hover:text-foreground">info@xtratechgs.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-brand" />
              <span>Nigeria — serving clients globally</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Xtratech Global Solutions Limited. All rights reserved.</p>
          <p>Engineered with precision.</p>
        </div>
      </div>
    </footer>
  );
}
