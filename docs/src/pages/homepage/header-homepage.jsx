import Link from "@docusaurus/Link";
import "./index.css";

const HeaderHomepage = () => {
  return (
    <header>
      <div className="header-homepage">
        <div className="content-header">
          <h1 style={{ fontSize: "56px" }}>Build your component library</h1>
          <h4 className="subtitle">
            The UI Component Library is a comprehensive collection of reusable and customizable user interface
            components designed to streamline the development process and enhance user experience.
            <br />
            Built with modern web technologies, all optimized for performance and accessibility.
          </h4>
          <div className="group-button">
            <Link to="/docs/getting-started/overview">
              <button className="button-started">Get Started</button>
            </Link>
            <a href="https://github.com/Tuanxu5/tx-design-ui" target="_blank">
              <button className="button-github">Github</button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHomepage;
