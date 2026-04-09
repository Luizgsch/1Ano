import React from 'react';

const Navbar = () => {
  const menuItems = [''];

  return (
    <header
      className="fixed top-0 left-0 w-full px-6 sm:px-12 py-6 sm:py-10 flex justify-between items-start z-50 mix-blend-multiply"
    >
      <div className="flex flex-col">
        <span className="text-xl font-serif text-terracotta leading-none tracking-tight">CRIADO POR</span>
        <span className="text-[20px] font-sans text-clay mt-1 tracking-[0.2em]">LUIZGSCH</span>
      </div>

      <nav className="flex space-x-12">
        {menuItems.map((item) => (
          <a
            key={item}
            href="#"
            className="text-[10px] font-sans text-clay hover:text-terracotta transition-colors duration-300 tracking-[0.2em]"
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex items-center">
        <span className="text-[10px] font-sans text-terracotta border-b border-terracotta/40 tracking-[0.2em] cursor-pointer"></span>
      </div>
    </header>
  );
};

export default Navbar;
