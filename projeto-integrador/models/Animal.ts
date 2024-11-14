import { Doador } from "./Doador";

export interface IAnimal {
    id?: number;
    nome?: string;
    idade?: number;
    porte?: string;
    raca?: string;
    genero?: string;
    doador?: Doador;
  }
 
export class Animal {
    public id: number;
    public nome: string;
    public idade: number;
    public porte: string;
    public raca: string;
    public genero: string;
    public doador: Doador;
 
    constructor( {
        id = 0,
        nome = '',
        idade = 0,
        porte = '',
        raca = '',
        genero = '',
        doador = new Doador({})
    }: IAnimal){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.porte = porte;
        this.raca = raca;
        this.genero = genero;
        this.doador = doador;
    }
}