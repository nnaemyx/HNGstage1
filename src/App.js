import Profile from './components/Profilesection/Profile'
import Link from './components/Linksection/Link'
import Footer from './components/Footersection/Footer'
import Share from './components/Sharesection/Share'

function App() {
  return (
    <div className='stage1'>
      <Share/>
      <Profile />
      <Link />
      <Footer/>
    </div>
  );
}

export default App;
