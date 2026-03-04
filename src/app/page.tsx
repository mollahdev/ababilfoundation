import React from 'react';

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden font-sans selection:bg-emerald-500/30">
      {/* Background gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#fff 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
          maskImage: 'linear-gradient(180deg, white, rgba(255,255,255,0))',
          WebkitMaskImage: 'linear-gradient(180deg, white, rgba(255,255,255,0))'
        }}
      />

      {/* Main Content Card */}
      <main className="relative z-10 w-full max-w-2xl p-8 md:p-12 mx-4 flex flex-col items-center text-center bg-white/2 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
        {/* Badge */}
        <div className="mb-8 px-5 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm font-semibold uppercase tracking-widest backdrop-blur-md shadow-inner shadow-white/5">
          Coming Soon
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-br from-white via-white to-white/40 mb-6 drop-shadow-sm">
          Ababil Foundation
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-zinc-400 max-w-lg mb-10 leading-relaxed font-light">
          Ababil Foundation is a non-political, volunteer-driven organization committed to spreading the message of Dawah.
        </p>

        {/* Social Links */}
        <div className="mt-8 flex items-center gap-6 text-zinc-500 text-sm font-medium tracking-wide border-t border-white/10 pt-6 px-12">
          <a href="https://www.facebook.com/TheAbabilFoundation" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:scale-105 transition-all">Facebook</a>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          <a href="https://www.youtube.com/@Ababilfoundatin" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 hover:scale-105 transition-all">YouTube</a>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          <a href="mailto:rajbaridawahcircle@gmail.com" className="hover:text-emerald-400 hover:scale-105 transition-all">Contact</a>
        </div>
      </main>
    </div>
  );
}
