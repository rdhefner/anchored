import ContactContent from "../../components/ContactContent";

export const metadata = {
  title: "Contact Us | Anchored",
  description: "Get in touch with us about bulk orders, speaking engagements, or questions about the Anchored series.",
  openGraph: {
    title: "Contact Us | Anchored",
    description: "Get in touch with us about bulk orders, speaking engagements, or questions about the Anchored series.",
    url: 'https://anchoredparenting.com/contact',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
