import React, { useCallback, useEffect, useState } from 'react';
import { Card } from './Card/card';

export default function ButtonBackMenu() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });    
  };
 
  if (!isVisible) return null

  return (
    <div className="cursor-pointer fixed bottom-4 right-4 z-20">
      <Card
        className="shadow-sm  rounded-lg bg-[#323237] text-white py-2 text-sm hover:bg-[#111718] transition-colors"
        onClick={scrollToTop}
      >
        Kembali Ke Portal
      </Card>
    </div>
  );
}

