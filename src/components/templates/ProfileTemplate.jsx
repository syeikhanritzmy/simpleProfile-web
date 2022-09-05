import React from 'react';
import CardComponent1 from '../UI/organisms/CardComponent1';
import CardComponet2 from '../UI/organisms/CardComponet2';
import Footer from '../UI/organisms/Footer';
import LineComponent from '../UI/organisms/LineComponent';
import Navbar from '../UI/organisms/Navbar';

function ProfileTemplate() {
  return (
    <div>
      <Navbar />
      <CardComponent1 />
      <LineComponent />
      <CardComponet2 />
      <Footer />
    </div>
  );
}

export default ProfileTemplate;
