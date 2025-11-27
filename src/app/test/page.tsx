'use client';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-2xl mb-4">GIF Test Page</h1>
        <img 
          src="/background.gif" 
          alt="Test GIF"
          className="w-96 h-64 object-cover rounded-lg"
          onLoad={() => console.log('GIF loaded successfully')}
          onError={(e) => console.error('GIF failed to load:', e)}
        />
        <p className="mt-4">If you can see the GIF above, it&apos;s working!</p>
      </div>
    </div>
  );
} 