import React from 'react';
import Navbar from './ui/Navbar';
import Project from './ui/Project';
import Footer from './ui/Footer';

// Functional component
const Research = () => (
  <div>
    <Navbar className="active text-white" />
    <Project />
    <Footer />
  </div>
);

export default Research;
