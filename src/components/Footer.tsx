import Link from "next/link";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const amazonLink = process.env.NEXT_PUBLIC_AMAZON_SERIES_LINK || "https://amazon.com";
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "";
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL || "";

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
              <Link href="/resources" className="text-sm text-gray-300 hover:text-gold transition-colors">Resources</Link>
              <Link href="/contact" className="text-sm text-gray-300 hover:text-gold transition-colors">Contact</Link>
            </div>

            {/* Social Media */}
            <div className="mt-4">
              <div className="flex gap-3">
                {instagramUrl ? (
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 group"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-gold group-hover:text-navy-900 text-lg transition-colors" />
                  </a>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-700/30 border border-gray-600/30 flex items-center justify-center opacity-50 cursor-not-allowed" aria-label="Instagram - Coming Soon">
                    <FaInstagram className="text-gray-500 text-lg" />
                  </div>
                )}

                {facebookUrl ? (
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 group"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="text-gold group-hover:text-navy-900 text-lg transition-colors" />
                  </a>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-700/30 border border-gray-600/30 flex items-center justify-center opacity-50 cursor-not-allowed" aria-label="Facebook - Coming Soon">
                    <FaFacebookF className="text-gray-500 text-lg" />
                  </div>
                )}
              </div>
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
