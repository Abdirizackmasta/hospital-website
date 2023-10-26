import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './components/Home/Home'
// import About from './components/About/About'
// import Services from './components/Servics/Services'
import Booking_Appointment from './components/Booking/BookingAppointment'
// import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Navbar/>
      <Home/>
      <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
      {/* <Route path='/about' element={<About/>}/> */}
      {/* <Route path='/service' element={<Services/>}/> */}
      {/* <Route path='/contact' element={<Contact/>}/> */}
      {/* <Route path='/' element={<Home/>}/> */}
      {/* <Route path='/appointment' element={<Booking_Appointment/>}/> */}

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
