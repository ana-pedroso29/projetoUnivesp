// components/ApadrinhamentoSection.tsx
import React from 'react';

export default function ApadrinhamentoSection() {
  return (
    <div className='bg-custom-fundo min-h-screen flex flex-col items-center'>
        <section className="flex flex-col items-center justify-center mt-40 px-6">
            <div className="flex items-center justify-around w-full max-w-4xl mb-10">
                <img src="/paw-solid.svg" alt="pata cachorro" className="w-9 h-9" />
                <h2 className="text-4xl font-bold text-center">
                Apadrinhe um <span className="text-red-500">amiguinho!</span>
                </h2>
                <img src="/paw-solid.svg" alt="pata cachorro" className="w-9 h-9" />
            </div>

            <div className="max-w-3xl bg-[#f4cfd5] p-6 rounded-lg border-2 border-dashed border-pink-300 shadow-lg text-center">
                <h3 className="text-lg font-bold text-pink-600">Apadrinhe</h3>
                <p>
                Caso não possa adotar, mas ama os bichinhos ou simplesmente quer ajudar, com o apadrinhamento, 
                você colaborará com as despesas de um amiguinho (ração, remédio, veterinário...), 
                podendo visitá-lo e receber fotos e notícias dele sempre que quiser!
                </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl">
                <div className="p-6 bg-[#f4cfd5] rounded-lg border-2 border-dashed border-pink-300 shadow-lg text-center">
                <h4 className="text-lg font-bold text-pink-600">Ajude com Ração</h4>
                <p>Contribua para garantir que nossos amiguinhos estejam sempre bem alimentados e saudáveis!</p>
                </div>
                <div className="p-6 bg-[#f4cfd5] rounded-lg border-2 border-dashed border-pink-300 shadow-lg text-center">
                <h4 className="text-lg font-bold text-pink-600">Ajude com Medicamentos</h4>
                <p>Auxilie na compra de medicamentos para tratar e prevenir doenças.</p>
                </div>
                <div className="p-6 bg-[#f4cfd5] rounded-lg border-2 border-dashed border-pink-300 shadow-lg text-center">
                <h4 className="text-lg font-bold text-pink-600">Cuidados Veterinários</h4>
                <p>Contribua para consultas veterinárias e tratamentos essenciais para a saúde deles.</p>
                </div>
            </div>
        </section>
    </div>
  );
};
