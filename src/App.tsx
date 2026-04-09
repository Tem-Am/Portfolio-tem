import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';


export default function App() {
  return (
    <div className="bg-[#0a0b10] min-h-screen">
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
