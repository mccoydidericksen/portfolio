import Header from './components/header';
import Project from './components/project';
import Timeline from './components/timeline';
import Footer from './components/footer';

function App() {
  return (
		<div className="bg-stone-900 text-stone-300 min-h-screen font-inter">
			<div className="max-w-5xl w-11/12 mx-auto">
				<Header />
				<Project />
				<Timeline />
				<Footer />
			</div>
		</div>
  )
}
export default App;
