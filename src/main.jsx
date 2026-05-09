import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import MobileApp from './mobile/MobileApp.jsx';

import { Analytics } from '@vercel/analytics/react';

function Root() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <StrictMode>
      {isMobile ? <MobileApp /> : <App />}
      <Analytics />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Root />);
