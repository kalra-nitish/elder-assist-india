import React from 'react';
import Script from 'next/script';

const GoogleAnalytics = () => {
  return (
    <>
     <Script strategy='lazyOnload' async src="https://www.googletagmanager.com/gtag/js?id=G-X7SNCT9B5T"></Script>
      <Script id='' strategy='lazyOnload'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-X7SNCT9B5T');
        `}
      </Script>
    </>
)}

export default GoogleAnalytics;