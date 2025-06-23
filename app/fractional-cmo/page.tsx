import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FractionalSection } from '../components';

export const metadata: Metadata = {
  title: 'What is a Fractional CMO? | Gary McRae',
  description: 'Learn what a Fractional CMO is, the benefits of hiring one for your business in Singapore & Asia, and answers to frequently asked questions.',
};

export default function FractionalCMOPage() {
  return (
    <main className="bg-[#f8fafc] min-h-screen">
      <FractionalSection />
    </main>
  );
} 