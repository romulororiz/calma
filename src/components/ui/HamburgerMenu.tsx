interface HamburgerButtonProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (isOpen: boolean) => void
}

export default function HamburgerButton({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: HamburgerButtonProps) {
  return (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="relative z-[1001] flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-all duration-300 hover:bg-white/10 lg:hidden"
      aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
    >
      <div className="relative h-[18px] w-[20px]">
        {/* Top line */}
        <span
          className={`absolute left-0 h-[2px] w-full bg-white transition-all duration-300 ${
            isMobileMenuOpen ? 'top-[8px] rotate-45' : 'top-0 rotate-0'
          }`}
        />

        {/* Middle line */}
        <span
          className={`absolute top-[8px] left-0 h-[2px] w-full bg-white transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Bottom line */}
        <span
          className={`absolute left-0 h-[2px] w-full bg-white transition-all duration-300 ${
            isMobileMenuOpen ? 'top-[8px] -rotate-45' : 'top-[16px] rotate-0'
          }`}
        />
      </div>
    </button>
  )
}
