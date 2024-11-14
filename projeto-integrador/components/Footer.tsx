// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="rodape w-full flex justify-around flex-row bg-[#fdb9c4da] mt-48 py-12 border-3 border-dashed border-[#fb7a7a] rounded-lg">
        <div className="rodape-1 flex flex-col ml-[-10px]">
          <img
            src="/Logo.png"
            alt="Logo"
            className="navbar-brand mt-[-20px] w-1/2"
          />
          <p className="mt-[-20px] mb-2 text-lg font-bold ">
            Cuidando e protegendo os nossos amiguinhos!
          </p>
          <div className="social-media-buttons flex flex-row gap-7 pt-2 pl-16">
            <a href="" target="_blank" rel="noreferrer" className="text-black hover:text-white transition-all duration-300 ease-in">
              <img src="/whatsapp-brands-solid.svg" alt="" className=" text-2xl text-red-500 w-9 h-9"   />
            </a>
              
            <a href="https://www.facebook.com/amapatas?mibextid=LQQJ4d&rdid=h5Nv4Ur2f7xXlS4a&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FbU7dHTPBhZ3gsXh2%2F%3Fmibextid%3DLQQJ4d#" target="_blank" className="text-black hover:text-white transition-all duration-300 ease-in">
              <img src="/facebook-brands-solid.svg" alt="" className=" text-2xl text-red-500 w-9 h-9"   />
            </a>
            <a href="https://www.instagram.com/amapatas?igsh=MTVvYWN6eDE0eXZneQ==" target="_blank" className="text-black hover:text-white transition-all duration-300 ease-in">
              <img src="/instagram-brands-solid.svg" alt="" className=" text-2xl text-red-500 w-9 h-9"   />
            </a>
          </div>
        </div>

        <div className="saiba-mais ml-[-24px]">
          <h3 className="text-lg font-semibold">Saiba mais:</h3>
          <Link href="/sobre" className="text-gray-800 text-base no-underline hover:text-red-500">
            Sobre a Ama Patas
          </Link>
        </div>

        <div className="flex flex-col items-start space-y-2">
          <h3 className="text-lg font-semibold">Como ajudar?</h3>
          <Link href="/animal" className="text-gray-800 text-base no-underline hover:text-red-500">
            Quero Adotar
          </Link>
          <Link href="/animal/cadastro" className="text-gray-800 text-base no-underline hover:text-red-500">
            Quero Doar
          </Link>
          <Link href="/Apadrinhar" className="text-gray-800 text-base no-underline hover:text-red-500">
            Quero Apadrinhar
          </Link>
        </div>

        <div className="fique-por-dentro w-1/4 ml-[-18px]">
          <h3 className="text-lg font-semibold">Fique por dentro!</h3>
          <p className="text-base">
            Cadastre seu e-mail para receber notificações sobre eventos e novos animais para adoção!
          </p>
          <div className="input-group mt-2 flex mb-3">
            <input
              type="text"
              className="form-control bg-white text-black border rounded-l-lg p-2 flex-grow"
              placeholder="Coloque seu e-mail"
            />
            <button className="btn bg-[#ff869a] text-white rounded-r-lg px-4 py-2 transition-all duration-300 ease-in hover:bg-pink-300">
              <img src="/envelope-regular.svg" className='w-8 h-8'/>
            </button>
          </div>
        </div>
      </div>

      <div className="footer h-8 bg-[#ed6279] flex items-center justify-center py-4">
        <p className="text-base font-bold">© 2024 - www.amapatas.com.br</p>
      </div>
    </footer>
  );
}
