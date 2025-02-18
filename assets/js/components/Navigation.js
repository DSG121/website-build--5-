import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className="bg-gray-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-8 h-16">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
        </div>
      </div>
    </nav>
  );
}