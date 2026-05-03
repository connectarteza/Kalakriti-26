export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-border bg-bg overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 flex flex-col items-center gap-4 text-center">
        {/* Brand */}
        <span className="font-display text-lg font-bold text-white tracking-[5px] uppercase">
          Kalakriti<span className="text-accent">&apos;26</span>
        </span>

        {/* Divider */}
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

        {/* Tagline */}
        <p className="text-[0.8rem] text-text-muted font-body tracking-wide">
          Curated by <span className="text-orange-light font-medium">Arteza</span> &bull; Meghnad Saha Institute of Technology
        </p>

        {/* Credits */}
        <p className="text-[0.7rem] text-text-dim/50 font-body mt-2">
          &copy; 2026 Kalakriti. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
