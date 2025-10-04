import ResourcesContent from "../../components/ResourcesContent";

export const metadata = {
  title: "Resources | Anchored",
  description: "Recommended books and resources for each stage of the Anchored framework to support your teen's growth and development.",
  openGraph: {
    title: "Resources | Anchored",
    description: "Recommended books and resources for each stage of the Anchored framework to support your teen's growth and development.",
    url: 'https://anchoredparenting.com/resources',
  },
  alternates: {
    canonical: '/resources',
  },
};

export default function ResourcesPage() {
  return <ResourcesContent />;
}
