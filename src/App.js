import {Route, Routes} from 'react-router-dom'
import Option1Suboption1 from './pages/option-1-suboption-1'
import Option1Suboption2 from './pages/option-1-suboption-2'
import Option1Suboption3 from './pages/option-1-suboption-3'
import Option2Suboption1 from './pages/option-2-suboption-1'
import Option2Suboption2 from './pages/option-2-suboption-2'
import Option2Suboption3 from './pages/option-2-suboption-3'
import Option3Suboption1 from './pages/option-3-suboption-1'
import Option3Suboption2 from './pages/option-3-suboption-2'
import Option3Suboption3 from './pages/option-3-suboption-3'
import SuccessPage from './SuccessPage'

import NavbarComponent from './Navbar'

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="option-1/suboption-1" element={<Option1Suboption1 />}/>
        <Route path="option-1/suboption-2" element={<Option1Suboption2 />}/>
        <Route path="option-1/suboption-3" element={<Option1Suboption3 />}/>
        <Route path="option-2/suboption-1" element={<Option2Suboption1 />}/>
        <Route path="option-2/suboption-2" element={<Option2Suboption2 />}/>
        <Route path="option-2/suboption-3" element={<Option2Suboption3 />}/>
        <Route path="option-3/suboption-1" element={<Option3Suboption1 />}/>
        <Route path="option-3/suboption-2" element={<Option3Suboption2 />}/>
        <Route path="option-3/suboption-3" element={<Option3Suboption3 />}/>
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
