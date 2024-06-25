import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prajwal Rudrakshi - Personal Website',
  description: 'Personal website of Prajwal Rudrakshi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}