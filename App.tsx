
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    if (currentPath.startsWith('#/menu/')) {
      const slug = currentPath.replace('#/menu/', '');
      return <ProductDetail slug={slug} />;
    }
    
    // Default to Home for any other hash
    return <Home />;
  };

  return (
    <div className="relative min-h-screen bg-background-dark selection:bg-primary selection:text-black">
      {/* Background Ambient Blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] opacity-20"></div>
      </div>

      <Navbar />
      
      {renderContent()}

      <Footer />
    </div>
  );
};

export default App;
