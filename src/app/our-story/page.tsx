import AboutAuthorContent from "../../components/AboutAuthorContent";

export const metadata = {
  title: "Our Story | Anchored",
  description: "Meet Ryan Hefner, the creator of Anchored—a father committed to raising children of character and purpose.",
  openGraph: {
    title: "Our Story | Anchored",
    description: "Meet Ryan Hefner, the creator of Anchored—a father committed to raising children of character and purpose.",
    url: 'https://anchoredkids.org/our-story',
  },
  alternates: {
    canonical: '/our-story',
  },
};

export default function AboutAuthorPage() {
  return <AboutAuthorContent />;
}
