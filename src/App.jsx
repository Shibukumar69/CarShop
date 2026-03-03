import React from 'react'
import Navbar from './component/Navbar';
import SectionA from './component/sectionA';
import SectionB from './component/SectionB';
import SectionC from './component/SectionC';
import SectionD from './component/SectionD';
import Footer from './component/Footer';
function App() {
  return (
    <div>
      <Navbar/>
      <SectionA/>
      <SectionB/>
      <SectionC/>
      <SectionD/>
      <Footer/>
    </div>
  )
}

export default App