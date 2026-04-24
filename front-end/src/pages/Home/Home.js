import NavBar from "../../components/NavBar/NavBar";
import { translate } from "../../utils/translate";
import image from "../../assets/images/profile.png";
import "./Home.css";
import useLanguage from "../../hooks/useLanguage";
import useResponsive from "../../hooks/useResponsive";
import config from "../../config.json";

function Home() {
  const { lang } = useLanguage();  
  const { up, between } = useResponsive();

  const mailHref = `mailto:${config.email}`;

  const isDesktop = up("lg");
  const columnsClass = up("lg")
    ? "grid-desktop"
    : between("md", "lg")
    ? "grid-tablet"
    : "grid-mobile";

  return (
    <div className="home">
      <NavBar selectedButton="home" />

      <div className="cv">
        <div className="top-section">
          <img src={image} alt="Profile" className="profile-pic" />

          <div className="hero-copy">
            <h1 className="title">{translate(lang, "home.title")}</h1>
            <p className="description">{translate(lang, "home.description")}</p>
          </div>
        </div>

        <div className="horizontal-line" />

        <div className={`main-columns ${columnsClass}`}>
          <section className="education-column">
            <h2 className="title">{translate(lang, "home.education")}</h2>
            <br/>
            <ul className="list">
              <li className="education-list-item">
                <h3 className="title">{translate(lang, "home.educationItem2")}</h3>
                <p>{translate(lang, "home.educationItem2Description")}</p>
                <p>{translate(lang, "home.educationItem2Year")}</p>
              </li>
              <li className="education-list-item">
                <h3 className="title">{translate(lang, "home.educationItem1")}</h3>
                <p>{translate(lang, "home.educationItem1Description")}</p>
                <p>{translate(lang, "home.educationItem1Year")}</p>
              </li>
            </ul>
          </section>

          <div className="vertical-line" aria-hidden="true" />
          { isDesktop ? null : <div className="horizontal-line" />}

          <section className="contact-column">
            <h2 className="title">{translate(lang, "home.contact")}</h2>
            <div className="contact-section">
              <br/>

              <div className="contact-item">
                <h3 className="title">{translate(lang, "home.email")}</h3>
                <a href={mailHref} className="link">
                  {config.email}
                </a>
              </div>

              <br/>

              <div className="contact-item">
                <h3 className="title">{translate(lang, "home.linkedIn")}</h3>
                <a
                  href={config.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  {translate(lang, "home.linkedInLink")}
                </a>
              </div>
            </div>
          </section>

          <div className="vertical-line" aria-hidden="true" />
          { isDesktop ? null : <div className="horizontal-line" />}

          <section className="experiences-column">
            <h2 className="title">{translate(lang, "home.experiences")}</h2>
            <br/>
            <ul className="list">
              <li className="sized-list-item">
                <h3 className="title">{translate(lang, "home.experienceItem4")}</h3>
                <p>{translate(lang, "home.experienceItem4Year")}</p>
                <p>{translate(lang, "home.experienceItem4Location")}</p>
                <p className="experience-description">
                  {translate(lang, "home.experienceItem4Description")}
                </p>
              </li>

              <li className="sized-list-item">
                <h3 className="title">{translate(lang, "home.experienceItem3")}</h3>
                <p>{translate(lang, "home.experienceItem3Year")}</p>
                <p>{translate(lang, "home.experienceItem3Location")}</p>
                <p className="experience-description">
                  {translate(lang, "home.experienceItem3Description")}
                </p>
              </li>

              <li className="sized-list-item">
                <h3 className="title">{translate(lang, "home.experienceItem2")}</h3>
                <p>{translate(lang, "home.experienceItem2Year")}</p>
                <p>{translate(lang, "home.experienceItem2Location")}</p>
                <p className="experience-description">
                  {translate(lang, "home.experienceItem2Description")}
                </p>
              </li>

              <li className="sized-list-item">
                <h3 className="title">{translate(lang, "home.experienceItem1")}</h3>
                <p>{translate(lang, "home.experienceItem1Year")}</p>
                <p>{translate(lang, "home.experienceItem1Location")}</p>
                <p className="experience-description">
                  {translate(lang, "home.experienceItem1Description")}
                </p>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}

export default Home;
