import React from 'react';

export function Header({ title }: { title: string }) {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
      </div>
    </header>
  );
}