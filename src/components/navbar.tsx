"use client";
import { ModeToggle } from "./toggle";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { UserNav } from "./user-nav";
import { usePathname } from "next/navigation";

export default function Navbar({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname();
    const [selectedLink, setSelectedLink] = useState<string | null>(null);

    const linkClass = (href: string) => cn("text-lg font-medium transition-colors", href === selectedLink ? "" : "text-muted-foreground hover:text-primary");

    useEffect(() => {
        if (pathname === "/") {
            setSelectedLink("/");
        } else {
            setSelectedLink(pathname);
        }
    }, [pathname]);

    return (
        <div className="hidden sm:flex justify-evenly px-4 lg:px-8 xl:px-24 py-20">
            <nav className={cn("flex w-full items-center justify-start space-x-4 lg:space-x-6", className)} {...props}>
                <Link href="/" legacyBehavior>
                    <a onClick={() => setSelectedLink("/")} className={linkClass("/")}>
                        Dashboard
                    </a>
                </Link>
                <Link href="/products" legacyBehavior>
                    <a onClick={() => setSelectedLink("/products")} className={linkClass("/products")}>
                        Products
                    </a>
                </Link>
                <Link href="/categories" legacyBehavior>
                    <a onClick={() => setSelectedLink("/categories")} className={linkClass("/categories")}>
                        Categories
                    </a>
                </Link>
                <Link href="/orders" legacyBehavior>
                    <a onClick={() => setSelectedLink("/orders")} className={linkClass("/orders")}>
                        Orders
                    </a>
                </Link>
                <Link href="/admin" legacyBehavior>
                    <a onClick={() => setSelectedLink("/admin")} className={linkClass("/orders")}>
                        Admin
                    </a>
                </Link>
            </nav>
            <div className="flex items-center gap-4">
                <ModeToggle />
                <UserNav />
            </div>
        </div>
    );
}
