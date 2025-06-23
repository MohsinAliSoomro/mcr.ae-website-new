import type { Metadata } from 'next';
import { ContactSection } from '@/app/components';


export const metadata: Metadata = {
  title: 'Contact Gary McRae | Fractional CMO',
  description: 'Get in touch with Gary McRae to discuss how Fractional CMO services can help grow your business in Singapore and Asia.',
};

export default function ContactPage() {
  return (
    <main className="bg-[#f8fafc] min-h-screen flex flex-col">

      <ContactSection />

    </main>
  );
} 