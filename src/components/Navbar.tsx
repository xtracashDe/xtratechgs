import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import logoLight from "@/assets/xtratech-logo-dark.png";
import logoDark from "@/assets/xtratech-logo.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/blog", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();
  const logo = resolvedTheme === "dark" ? logoDark.url : logoLight;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="Xtratech Global Solutions home">
          <img src={logo} alt="Xtratech Global Solutions" className="h-9 w-auto" />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            {resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-brand-gradient px-4 py-2 text-sm font-semibold text-brand-foreground shadow-brand transition-transform hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-border/60 bg-background md:hidden">
          <ul className="container-x flex flex-col py-2">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="py-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block w-full rounded-md bg-brand-gradient px-4 py-2.5 text-center text-sm font-semibold text-brand-foreground"
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
