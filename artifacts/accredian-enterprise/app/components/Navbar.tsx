"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

type NavItem = { label: string; href: string; id: string };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Stats", href: "#stats", id: "stats" },
  { label: "Clients", href: "#clients", id: "clients" },
  { label: "Accredian Edge", href: "#accredianEdge", id: "accredianEdge" },
  { label: "CAT", href: "#cat", id: "cat" },
  { label: "How It Works", href: "#howItWorks", id: "howItWorks" },
  { label: "FAQs", href: "#faqs", id: "faqs" },
  { label: "Testimonials", href: "#testimonials", id: "testimonials" },
];

const SECTION_IDS = [
  "home",
  "stats",
  "clients",
  "accredianEdge",
  "cat",
  "howItWorks",
  "faqs",
  "testimonials",
];

function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      if (scrollY < 200) {
        setActive("home");
        return;
      }
      const offset = 120;
      let current = ids[0] ?? "";
      for (const id of ids) {
        if (id === "home") continue;
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (scrollY + offset >= top) {
          current = id;
        }
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [ids]);

  return active;
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  function handleClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem,
  ) {
    if (item.id === "home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
      return;
    }
    const target = document.getElementById(item.id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  }

  return (
    <header
      id="top"
      className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <a
          href="#home"
          onClick={(e) => handleClick(e, NAV_ITEMS[0])}
          className="flex items-center gap-2 shrink-0"
          aria-label="Accredian Enterprise home"
        >
          <img
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
            alt="Accredian"
            className="h-8 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextElementSibling?.classList.remove("hidden");
            }}
          />
          <span className="hidden text-xl font-bold text-primary tracking-tight">
            Accredian
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleClick(e, item)}
                className={`relative text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-blue-600" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white font-medium shadow-sm"
          >
            <a
              href="#form"
              onClick={(e) => {
                const target = document.getElementById("form");
                if (target) {
                  e.preventDefault();
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Enquire Now
            </a>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] flex flex-col gap-6 pt-12"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = active === item.id;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleClick(e, item)}
                      className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? "bg-blue-50 text-blue-700"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium"
              >
                <a
                  href="#form"
                  onClick={(e) => {
                    const target = document.getElementById("form");
                    if (target) {
                      e.preventDefault();
                      target.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                      setIsOpen(false);
                    }
                  }}
                >
                  Enquire Now
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
