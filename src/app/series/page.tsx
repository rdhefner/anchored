import SeriesContent from "../../components/SeriesContent";

export const metadata = {
  title: "The Series | Anchored",
  description: "Explore the complete 3-book Anchored series covering over 40 essential topics across Launch, Navigate, and Anchor stages.",
  openGraph: {
    title: "The Series | Anchored",
    description: "Explore the complete 3-book Anchored series covering over 40 essential topics across Launch, Navigate, and Anchor stages.",
    url: 'https://anchoredparenting.com/series',
  },
  alternates: {
    canonical: '/series',
  },
};

export default function SeriesPage() {
  return <SeriesContent />;
}
