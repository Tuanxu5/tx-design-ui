import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import { HomePageContent } from "./home/content";
import { HomePageFooter } from "./home/footer";
import { HomepageHeader } from "./home/header";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Docs ${siteConfig.title}`}
      description="An enterprise-class UI design language and React components implementation"
    >
      <HomepageHeader />
      <HomePageContent />
      <HomePageFooter />
    </Layout>
  );
}
