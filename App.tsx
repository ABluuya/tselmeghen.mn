import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Memories from './components/Memories';
import LoveNotes from './components/LoveNotes';
import DayCounter from './components/DayCounter';
import Footer from './components/Footer';

function App() {
  // You can change this to the actual date you first met
  const firstMeetingDate = '2023-01-01';

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <OurStory />
      <Memories />
      <DayCounter startDate={firstMeetingDate} />
      <LoveNotes />
      <Footer />
    </div>
  );
}

export default App;