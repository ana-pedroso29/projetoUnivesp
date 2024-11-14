// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar(){
  return (
    <header>
      <nav className="bg-[#fdb9c4da] w-full h-28 flex items-center">
        <div className="container mx-auto flex items-center">
        <Link href="/">
          <img
                src="/Logo.png"
                alt="Logo"
                className="w-[150px] ml-24"
              />
        </Link>
            
          <button
            className="navbar-toggler block lg:hidden p-2 border rounded-md"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="hidden lg:flex w-full justify-center ml-20">
            <div className="flex space-x-8 items-center">
              <Link href="/sobre" className="text-lg font-semibold uppercase transition duration-300 hover:bg-[#fcb1b1]">
                Sobre
              </Link>
              <Link href="/animal" className="text-lg font-semibold uppercase transition duration-300 hover:bg-[#fcb1b1]">
                Quero Adotar
              </Link>
              <Link href="/animal/cadastro" className="text-lg font-semibold uppercase transition duration-300 hover:bg-[#fcb1b1]">
                Seja Parceiro!
              </Link>
              <Link href="#" className="text-lg font-semibold uppercase transition duration-300 hover:bg-[#fcb1b1]">
                Quero Apadrinhar
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

