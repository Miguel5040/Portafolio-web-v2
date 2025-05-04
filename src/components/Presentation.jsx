import { useState, useEffect } from 'react';

const Presentation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [highlight, setHighlight] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    const highlightTimer = setTimeout(() => {
      setHighlight(true);
    }, 2000);
    
    return () => {
      clearTimeout(highlightTimer);
    };
  }, []);

  return (
    <div className={`max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg font-inter text-gray-800 transform transition-all duration-800 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
    }`}>
      <div className="mb-8">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 mb-6">
          {"if you don't spend enough time getting to know yourself, you'll end up absorbing everyone else's definition of you"}
        </h1>
      </div>
      
      <div className="relative mb-8 rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-1">
        <img 
          src="https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg" 
          alt="Busy city street at night with people crossing" 
          className="w-full h-auto block"
        />
        <div className="absolute bottom-0 w-full text-center text-xs text-white/80 bg-black/30 py-1">
          https://pin.it/4csdk7j
        </div>
      </div>
      
      <div className="space-y-6">
        <p className="text-xl">
          I saw a video on TikTok the other day, and it said, <span className={`transition-all duration-1000 ${
            highlight ? 'bg-yellow-100' : ''
          }`}>{"If you don't spend enough time getting to know yourself, you'll end up absorbing everyone else's definition of you."}</span> And it hit me—how often do we let that happen? How often do we let the world, our friends, our families, even strangers, tell us who we are?
        </p>
        
        <p className="text-lg font-semibold italic text-gray-600">Think about it.</p>
        
        <p className="text-lg">
          {`If you don't take the time to figure out what you love, what you stand for, and what makes you come alive, someone else will decide it for you. And the scary part is, you might not even notice it happening. One day you'll wake up and realize you've been living a life shaped by everyone else's opinions—except your own.`}
        </p>
        
        <p className="text-lg">
          {`It doesn't happen all at once. When someone tells you, "You're too sensitive," so you stop expressing your emotions. Or when they say, "You're so quiet," so you force yourself to speak even when you don't want to. Or when they imply you're not enough as you are, so you spend years trying to be someone else.`}
        </p>
        
        <div className="flex items-center">
          <p className="italic">And for what? To please them? To fit in? To feel worthy?</p>
          <div className="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full ml-3 text-sm text-gray-600">2</div>
        </div>
        
        <p className="text-xl font-medium">
          {`Let me tell you this: <strong className="font-bold text-black">no one else gets to define you.</strong> Not your friends, not your parents, not society. Only you can do that. But here's the thing—it takes work. It takes sitting with yourself, asking hard questions, and being brutally honest about what you want and who you are. It's not easy. It's messy, uncomfortable, and sometimes lonely. But it's worth it.`}
        </p>
        
        <p className="text-lg">
          {`Because the alternative? It's living your life like a mirror, reflecting everyone else's expectations but never showing your true self. It's waking up one day and realizing you don't even know who you are anymore.`}
        </p>
        
        <p className="text-xl font-medium text-gray-900">
          {`So, I'm asking you, right here and now: When was the last time you spent time getting to know yourself? When was the last time you asked yourself, "What do I really want? What makes me happy? What do I believe in?"`}
        </p>
      </div>
      
      <div className="flex items-center mt-8 pt-4 border-t border-gray-100 text-gray-600 text-sm">
        <div className="flex items-center justify-center w-8 h-8 bg-gray-50 rounded-full mr-3 text-gray-700">13</div>
        <span>Top highlight</span>
      </div>
    </div>
  );
};

export default Presentation;