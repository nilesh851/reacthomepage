import React from 'react'
import './App.css';
import Carousel from './components/Carousel';
import Customerservice from './components/Customerservice';
import Faq from './components/Faq';
import Navbar from './components/Navbar';
import Ourpartners from './components/Ourpartners';
import Testimonial from './components/Testimonial';
import Whychooseus from './components/Whychooseus';
function App() {
  return (
    <>
<Navbar tittle="Logo" abouttextutils="About Textutils"/>
<Carousel/>
<Whychooseus tittle="Why Choose us" subtittle="We are For Rural,By Rural &amp; of Rural"/>
<Customerservice/>
<Ourpartners/>
<Faq tittle="Frequently Asked Questions"/>
<Testimonial tittle="Testimonials"/>
    </>
  );
}

export default App;
