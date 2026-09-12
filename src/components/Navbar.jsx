export function Navbar() {
  return (
    <header className="w-full h-[75px] fixed border-b border-slate-200 bg-brand-primary backdrop-blur-sm z-50">
      <div className="h-[inherit] flex items-center justify-between px-5 sm:px-16">
        <h2 className="text-xl text-white tracking-tight lg:text-2xl font-medium">
          NewsOnline
        </h2>
      </div>
    </header>
  );
}
