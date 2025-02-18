import React from 'react';
import { BusinessInfo } from './types';

export function Footer({ businessInfo }: { businessInfo: BusinessInfo }) {
  return (
    <footer className="bg-gray-50 border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">{businessInfo.name}</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>{businessInfo.address}</p>
              <p>{businessInfo.phone}</p>
              <p>{businessInfo.email}</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-gray-600 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {businessInfo.socialLinks.facebook && (
                <a href={businessInfo.socialLinks.facebook} className="text-gray-600 hover:text-gray-900">
                  Facebook
                </a>
              )}
              {businessInfo.socialLinks.twitter && (
                <a href={businessInfo.socialLinks.twitter} className="text-gray-600 hover:text-gray-900">
                  Twitter
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}