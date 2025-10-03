import Link from "next/link";

export default function Footer() {
  const amazonLink = process.env.NEXT_PUBLIC_AMAZON_SERIES_LINK || "https://amazon.com";

  return (
    <footer className="bg-navy-900 text-white border-t border-gold/30 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-bold text-2xl mb-3 text-gold">Anchored</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              What Your Kids Need To Know—And How To Talk About It.
              A 3-book parenting series for intentional discipleship.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-bold mb-3 text-gold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-gray-300 hover:text-gold transition-colors">Home</Link>
              <Link href="/about" className="text-sm text-gray-300 hover:text-gold transition-colors">How It Works</Link>
              <Link href="/series" className="text-sm text-gray-300 hover:text-gold transition-colors">Series</Link>
              <Link href="/contact" className="text-sm text-gray-300 hover:text-gold transition-colors">Contact</Link>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-heading font-bold mb-3 text-gold">Get Started</h4>
            <p className="text-sm text-gray-300 mb-4">
              Ready to start building an anchored foundation?
            </p>
            <a
              href={amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-gold text-navy-900 rounded-full font-bold text-sm hover:bg-gold-light transition-all duration-300 hover:scale-105 shadow-md"
            >
              Get the Series
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gold/20 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Anchored, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
