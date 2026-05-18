import Courses from "../components/boxes/courses";
import Experiences from "../components/boxes/experiences";
// import Extracurriculars from "../components/boxes/extracurriculars";
import Hero from "../components/boxes/hero";
import Projects from "../components/boxes/projects";

const Home = () => {
  return (
    <main className="min-h-screen flex items-center bg-background text-foreground font-sans">
      <div className="w-full mx-auto max-w-3xl px-4 md:px-8 lg:px-16 xl:px-32">
        <Hero />
        <Experiences />
        <Projects />
        <Courses />
        {/* <Extracurriculars /> */}
      </div>
    </main>
  );
};

export default Home;
