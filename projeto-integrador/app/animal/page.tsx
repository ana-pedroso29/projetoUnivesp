"use client"

import { Animal } from "@/models/Animal";
import { AnimalService } from "@/services/AnimalService";
import { useEffect, useState } from "react"


export default function Page() {

    const [animais, setAnimais] = useState<Animal[]>([]);
    const animalService = new AnimalService();

    const fetchData = async () => {
        animalService.findAll().then((response) => {
            setAnimais(response.data)
        })
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="bg-custom-fundo min-h-screen flex flex-col items-center py-10">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-5xl font-bold tracking-tight text-center text-gray-900">Nossos amigos</h2>

                <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {animais.map((animal) => (
                        <div key={animal.id} className="group relative">
                            <h3 className="text-3xl text-center font-medium text-black mb-3">
                                <span aria-hidden="true" className="absolute inset-0" />
                                {animal.nome}
                            </h3>
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={`animal${animal.id}.jpeg`}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between bg-gray-100 p-4 rounded-lg shadow">
                                <div>
                                    <p className="text-lg font-semibold text-gray-800 mb-1">{animal.genero}</p>
                                    <p className="text-lg font-medium text-gray-700">
                                    <span className="font-semibold text-gray-900">Doador:</span> {animal.doador.nome}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
