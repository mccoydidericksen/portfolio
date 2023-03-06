import Header from './components/header';
import Project from './components/project';
import Timeline from './components/timeline';

function App() {
  return (
    <div className="bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
      <Header />
      <Project />
      <Timeline />
    </div>
  );
}
export default App;
