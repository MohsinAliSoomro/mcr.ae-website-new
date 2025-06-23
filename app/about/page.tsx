import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { AboutSection } from '../components';

export const metadata: Metadata = {
  title: 'About Gary McRae | Beyond Consulting: Your Fractional CMO Partner',
  description: 'Learn about Gary McRae, a hands-on Fractional CMO with over a decade of experience building brands across government, professional services, insurance, and wealth management.',
};

export default function AboutPage() {
  return (
    <main className="bg-[#f8fafc] min-h-screen">

      <AboutSection />

    </main>
  );
} 