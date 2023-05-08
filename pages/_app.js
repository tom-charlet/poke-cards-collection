import React from 'react';
import '../styles/styles.css';

function MyApp({ Component, pageProps }) {
  // Vous pouvez ajouter des logiques supplémentaires ici

  return <Component {...pageProps} />;
}

export default MyApp;