// components/ContentSection.tsx
import React from 'react';

export default function ContentSection() {
  return (
    <section className=" flex flex-col justify-center items-center mt-40">
      <div className="flex items-center justify-around w-full max-w-4xl mb-10">
        <img  src="/paw-solid.svg" alt="pata cachorro" className="w-9 h-9" />
        <h2 className="text-4xl font-bold text-center">
          Encontre seu <span className="text-red-500">melhor amigo!</span>
        </h2>
        <img  src="/paw-solid.svg" alt="pata cachorro" className="w-9 h-9" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl">
        <div className="p-6 bg-[#f4cfd5] rounded-lg border-2 border-dashed border-pink-300 shadow-lg text-center">
          <h3 className="text-lg font-bold text-pink-600">Adotar é gratuito!</h3>
          <p>Porque gastar dinheiro quando se pode adotar um amigo gratuitamente? Além de te dar felicidade também ajudará a diminuir a quantidade de cães e gatos desabrigados e famintos no mundo!</p>
        </div>
        <div className="p-6 bg-[#f4cfd5] rounded-lg border-2 border-dashed border-pink-300 shadow-lg text-center">
          <h3 className="text-lg font-bold text-pink-600">Animais resgatados</h3>
          <p>Já resgatamos e doamos ao longo desses anos mais de 5mil animais e atualmente estamos com mais de 100 deles esperando uma família 💕</p>
        </div>
        <div className="p-6 bg-[#f4cfd5] rounded-lg border-2 border-dashed border-pink-300 shadow-lg text-center">
          <h3 className="text-lg font-bold text-pink-600">Aceitamos doações como:</h3>
          <p>Toalhas</p>
          <p>Produtos de limpeza</p>
          <p>Ração</p>
          <p>Medicamentos</p>
          <p>Shampoo de cachorro</p>
          <p>Doações monetárias de qualquer valor</p>
        </div>
        <div className="p-6 bg-[#f4cfd5] rounded-lg border-2 border-dashed border-pink-300 shadow-lg text-center">
          <h3 className="text-lg font-bold text-pink-600">Apadrinhe</h3>
          <p>Caso não possa adotar, mas ama os bichinhos ou simplesmente quer ajudar, com o apadrinhamento, você colocabora com as despesas de um amiguinho (ração, remédio, veterinário...), podendo visitá-lo e receber fotos e notícias dele sempre que quiser!</p>
        </div>
      </div>
    </section>
  );
};

