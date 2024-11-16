"use client";

import React from "react";
import Image from "next/image";
import { footerLinks, socialLinks } from "@/utils/mock";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black-bg border-t border-purple-2 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and description */}
          <div className="space-y-6">
            <Image
              src="/svg/logo.svg"
              width={0}
              height={0}
              alt="Dukia deFi"
              className="w-[120px] h-auto lg:w-[150px] lg:h-auto"
              priority
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Dukia DeFi is a Decentralized Asset Management Platform that
              provides users with the ability to deposit funds and seamlessly
              open, manage, and close positions across a variety of DeFi
              protocols.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-purple-1 transition-colors"
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
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-purple-1 transition-colors text-sm"
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
