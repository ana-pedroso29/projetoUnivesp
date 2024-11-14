"use client"

// pages/SobrePage.tsx
import React from 'react';


export default function SobrePage() {
  return (
    <div className="bg-custom-fundo min-h-screen flex flex-col items-center py-10">
        <div className="flex flex-col items-center space-y-10 p-6">
        <header className="text-center mt-10">
            <h1 className="text-5xl font-bold text-black">Sobre a ONG AMAPATAS</h1>
            <p className="text-xl font-semibold mt-4 text-gray-800">
             Conheça nossa história e nossa missão para transformar a vida dos animais. 
            </p>
        </header>
        
        <section className="max-w-4xl text-justify bg-[#f4b7c1] p-8 rounded-lg shadow-md border border-pink-200">
            <h2 className="text-3xl font-semibold text-pink-600 mb-4">Nossa História</h2>
            <p className="text-gray-800 leading-relaxed">
            <strong> Nossa história começou na cidade de São Paulo, onde moramos durante 40 anos e cuidávamos de 15 cães de rua, alimentando-os, dando vacinas, remédios e tudo o que fosse necessário para que pudessem ter uma vida um pouco melhor, já que morávamos em um apartamento e não podíamos abrigá-los conosco. Esse número cresceu e ficou inviável continuar a cuidar deles na rua, por falta de estrutura. O que sempre sonhamos era ter um lugar amplo para que pudessem levá-los e acomodá-los de forma mais confortável, até que esse sonho se realizou e nos mudamos para Atibaia há 13 anos, para uma chácara e assim pudemos trazer os 15 amigos que tratávamos na rua que finalmente teriam um lar, e os outros que já haviam se tornado parte desse elenco. Com a nossa chegada aqui na cidade nos entrosamos com pessoas que também gostavam de animais e com entidades protetoras. Com o passar do tempo todos os filhotes que não eram adotados vinham para a nossa casa e o número foi crescendo e os problemas começaram a fugir do controle. Tivemos a perda do pai da Eloísa, com câncer, do emprego do chefe da casa, e sem fonte de renda o único rendimento era do INSS da Dona Haydée (mãe da Eloisa).Então, diante dessa crise financeira, aconteceu o previsto: perdemos a chácara, carros, nome, tudo enfim e fomos morar em Bom Jesus dos Perdões, num sítio alugado e nos mantivemos por 2 anos com a ajuda dos nossos filhos e mãe, para podermos sustentar os 100 cães e 70 gatos. Até que em 2006 conseguimos comprar outra chácara que hoje residimos e mantermos mais de 300 cães e gaos sem a ajuda de ninguém ou qualquer órgão ou entidade, mas como está se tornando inviável a manutenção de tantos animais, nasceu a ONG AMAPATAS, pois com ela funcionando e tendo padrinhos e ajuda, poderemos ajudar outros cães que necessitem de amparo tratamento e mantendo-os alojados em nosso abrigo, com mais conforto e assistência na sua velhice, pois muitos são idosos e temos também epiléticos, paraplégicos, com catarata e todos os problemas que aparecem com a idade. Essa história nasceu só por um motivo MUITO AMOR E COMPAIXÃO pelos seres inocentes que sofrem com o descaso e falta de resposabilidade de certas pessoas que não entendem que bicho é frágil, tem dor, tem frio, tem medo e só tem uma coisa diferente neles que nós humanos não temos: CAPACIDADE DE FIDELIDADE E AMOR INCONDICIONAL que nós levaremos muitos e muitos anos para aprender com eles como AMAR, RESPEITAR E SER FIEL A QUEM NOS AMA, SEM PEDIR NADA EM TROCA !!!! </strong> </p> 
        </section>
        </div>
    </div>
  );
}
