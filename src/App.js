import CoursesSection from './components/CoursesSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import NavigationComponent from './components/NavigationComponent';
import PersonalSection from './components/PersonalSection';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <>
      <NavigationComponent />
      <div class="container-fluid p-0">
        
        <PersonalSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <CoursesSection />
      </div>
    </>
    
  );
}

export default App;
