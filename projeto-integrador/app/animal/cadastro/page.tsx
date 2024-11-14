"use client"
import React, { useEffect, useState, ChangeEvent } from 'react';
import { Doador } from '@/models/Doador';
import { Animal } from '@/models/Animal';
import { AnimalService } from '@/services/AnimalService';
import { DoadorService } from '@/services/DoadorService';
import { useRouter } from 'next/navigation';



export default function CadastroAnimal() {
  const [animal, setAnimal] = useState<Animal>(new Animal({ doador: new Doador({}) }));
  const [doadores, setDoadores] = useState<Doador[]>([]);
  const animalService = new AnimalService();
  const doadorService = new DoadorService();
  const router = useRouter();

  const [isClient, setIsClient] = useState(false); // Estado para controlar se é cliente

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAnimal({ ...animal, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    animalService.save(animal).then(()=>{
      alert(`Animal ${animal.nome} salvo com sucesso!`)
      router.push("/animal")
    }) 
    // Aqui você pode adicionar a lógica de envio dos dados para a API
  };

  const fetchDoadores = async () => {
    const response = await doadorService.findAll();
    setDoadores(response.data);
  };

  const handleDoadorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const selectedDoador = doadores.find(d => d.nome === value);
    setAnimal(prevState => ({
      ...prevState,
      doador: selectedDoador as Doador
    }));
  };

  useEffect(() => {
    fetchDoadores(); // Apenas após a hidratação do cliente
  }, []);


  
  return (
      <section className="bg-custom-fundo min-h-screen flex flex-col items-center py-20">
        <div className="flex items-center justify-around w-full max-w-4xl space-x-4 mb-10">
          <img src="/paw-solid.svg" alt="pata cachorro" className="w-9 h-9" />
          <h2 className="text-4xl font-bold text-center">
            Cadastre um <span className="text-red-500">novo amigo!</span>
          </h2>
          <img src="/paw-solid.svg" alt="pata cachorro" className="w-9 h-9" />
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-lg p-6 bg-pink-100 rounded-lg border-2 border-dashed border-pink-300 shadow-lg space-y-4">
          <div className="flex flex-col">
            <label htmlFor="nome" className="text-lg font-bold text-pink-600">Nome do Animal</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={animal.nome || ''}
              onChange={handleChange}
              className="p-2 mt-1 border rounded"
              placeholder="Digite o nome do animal"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="idade" className="text-lg font-bold text-pink-600">Idade</label>
            <input
              type="number"
              id="idade"
              name="idade"
              value={animal.idade || 0}
              onChange={handleChange}
              className="p-2 mt-1 border rounded"
              placeholder="Digite a idade"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="porte" className="text-lg font-bold text-pink-600">Porte</label>
            <select
              id="porte"
              name="porte"
              value={animal.porte || ''}
              onChange={handleChange}
              className="p-2 mt-1 border rounded"
            >
              <option value="">Selecione o porte</option>
              <option value="pequeno">Pequeno</option>
              <option value="medio">Médio</option>
              <option value="grande">Grande</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="raca" className="text-lg font-bold text-pink-600">Raça</label>
            <input
              type="text"
              id="raca"
              name="raca"
              value={animal.raca}
              onChange={handleChange}
              className="p-2 mt-1 border rounded"
              placeholder="Digite a raça"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="genero" className="text-lg font-bold text-pink-600">Gênero</label>
            <select
              id="genero"
              name="genero"
              value={animal.genero || ''}
              onChange={handleChange}
              className="p-2 mt-1 border rounded"
            >
              <option value="">Selecione o gênero</option>
              <option value="macho">Macho</option>
              <option value="femea">Fêmea</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="doador" className="text-lg font-bold text-pink-600">Doador</label>
            <select
              id="doador"
              name="doador"
              value={animal.doador?.nome || ''}
              onChange={handleDoadorChange}
              className="p-2 mt-1 border rounded"
            >
              <option value="">Selecione o doador</option>
              {doadores.map(doador => (
                <option key={doador.id} value={doador.nome}>
                  {doador.nome}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="w-full p-3 mt-4 text-white bg-red-500 rounded hover:bg-pink-600 transition duration-300">
            Cadastrar Animal
          </button>
        </form>
      </section>
  );
}
