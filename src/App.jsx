import './App.css'
import AboutScreen from './components/about/AboutScreen'
import HomeScreen from './components/home/HomeScreen'
import WorkScreen from './components/work/WorkScreen'
import ContactScreen from './components/contact/ContactScreen'
import FooterScreen from './components/footer/FooterScreen'

function App() {

  return (
    <div className="App">
      <HomeScreen />
      <div>
        <nav className='nav'>
          <h2>GR</h2>
        </nav>
        <AboutScreen />
        <WorkScreen />
        <ContactScreen />
        <FooterScreen />
      </div>
    </div>
  )
}

export default App
