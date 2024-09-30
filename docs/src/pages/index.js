import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import ContentHomepage from "./homepage/content-homepage";
import FooterHomePage from "./homepage/footer-homepage";
import HeaderHomepage from "./homepage/header-homepage";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Docs ${siteConfig.title}`}
      description="An enterprise-class UI design language and React components implementation"
    >
      <HeaderHomepage />
      <ContentHomepage />
      <FooterHomePage />
    </Layout>
  );
}
