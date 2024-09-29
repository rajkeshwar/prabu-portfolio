import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import BootstrapJquery from "./components/BoostrapJquery";
import ContactSection from "./components/ContactSection";
import CounterDivision from "./components/CounterDivision";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import LayoutContainer from "./components/LayoutContainer";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import WorkSection from "./components/WorkSection";
import { getYamlContent } from "./utils/ssr";

const LandingPage = () => {
  const website = getYamlContent("website.yml");

  return (
    <LayoutContainer data={website.aside}>
      <HeroSection data={website.hero} />
      <AboutSection data={website.about} />
      <ServicesSection data={website.services} />
      <CounterDivision data={website.counter} />
      <SkillsSection data={website.skills} />
      <EducationSection data={website.education} />
      <ExperienceSection data={website.experience} />
      <WorkSection data={website.work} />
      <BlogSection data={website.blog} />
      <ContactSection data={website.contact} />
      <BootstrapJquery />
    </LayoutContainer>
  );
};

export default LandingPage;
