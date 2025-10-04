import AboutContent from "../../components/AboutContent";

export const metadata = {
  title: "How It Works | Anchored",
  description: "Discover the Anchored framework: 3 stages, 5 focus areas, 40+ topics designed to help you disciple your teen with confidence.",
  openGraph: {
    title: "How It Works | Anchored",
    description: "Discover the Anchored framework: 3 stages, 5 focus areas, 40+ topics designed to help you disciple your teen with confidence.",
    url: 'https://anchoredkids.org/about',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
