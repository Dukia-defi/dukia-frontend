"use client";

import React from "react";
import Image from "next/image";
import { footerLinks, socialLinks } from "@/utils/mock";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-purple-2 bg-black-bg backdrop-blur-lg">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Logo and description */}
          <div className="space-y-6">
            <Image
              src="/svg/logo.svg"
              width={0}
              height={0}
              alt="Dukia deFi"
              className="h-auto w-[120px] lg:h-auto lg:w-[150px]"
              priority
            />
            <p className="text-sm leading-relaxed text-gray-400">
              Dukia DeFi is a Decentralized Asset Management Platform that gives
              users the tools to seamlessly interact with DeFi protocols on
              different networks and make more profit from their investments.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-gray-400 transition-colors hover:text-purple-1"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 font-semibold">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-gray-400 transition-colors hover:text-purple-1"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
