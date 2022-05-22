import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div className="container-layout">
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'/>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  ); 
}