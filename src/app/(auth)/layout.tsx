"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isSignIn = pathname === "/sign-in";
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex items-center justify-between">
          <Image src={"/logo.svg"} height={152} width={56} alt="logo" />

          <Button variant={"secondary"} asChild>
            <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
              {isSignIn ? "Sign up" : "Sign in"}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
}
