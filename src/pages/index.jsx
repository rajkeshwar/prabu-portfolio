import AboutSection from "../app/components/AboutSection";
import BlogSection from "../app/components/BlogSection";
import BootstrapJquery from "../app/components/BoostrapJquery";
import ContactSection from "../app/components/ContactSection";
import CounterDivision from "../app/components/CounterDivision";
import EducationSection from "../app/components/EducationSection";
import ExperienceSection from "../app/components/ExperienceSection";
import HeroSection from "../app/components/HeroSection";
import LayoutContainer from "../app/components/LayoutContainer";
import ServicesSection from "../app/components/ServicesSection";
import SkillsSection from "../app/components/SkillsSection";
import WorkSection from "../app/components/WorkSection";
import { getYamlContent } from "../app/utils/ssr";

const LandingPage = ({website}) => {
  return (
    <LayoutContainer data={website.sidenav}>
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

export async function getStaticProps() {
  const website = getYamlContent("website.yml");
  return { props: {website} }
}
