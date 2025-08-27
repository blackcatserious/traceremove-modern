'use client';

import React from 'react';

import Link from 'next/link';

export default function LegalIndex() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6">Legal</h1>
        <p className="text-gray-600 mb-6">Legal documents and policies.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link className="text-blue-600 hover:underline" href="/legal/privacy-policy">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link className="text-blue-600 hover:underline" href="/legal/ethics-statement">
              Ethics Statement
            </Link>
          </li>
          <li>
            <Link className="text-blue-600 hover:underline" href="/site-map">
              Site Map
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
