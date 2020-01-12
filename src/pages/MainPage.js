import React from 'react';

// Layout
import Layout from '../components/layout/Layout';

// Sections
import Header from '../sections/header/Header';
import Features from '../sections/features/Features';
import Introduction from '../sections/introduction/Introduction';
import Gallery from '../sections/gallery/Gallery';
import Description from '../sections/description/Description';
import Reviews from '../sections/reviews/Reviews';
import Footer from '../sections/footer/Footer';

const MainPage = () => (
  <Layout>
    <Header />
    <Features />
    <Introduction />
    <Gallery />
  </Layout>
);

export default MainPage;
