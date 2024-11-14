import { Animal } from "./Animal";

export interface IDoador {
    id?: number;
    nome?: string;
    cpf?: number;
    telefone?: string;
    endereco?: string;
    animais?: Animal[];
  }
 
export class Doador {
    public id: number;
    public nome: string;
    public cpf: number;
    public telefone: string;
    public endereco: string;
    public animais: Animal[];
 
    constructor( {
        id = 0,
        nome = '',
        cpf = 0,
        telefone = '',
        endereco = '',
        animais = []
    }: IDoador){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.endereco = endereco;
        this.animais = animais;
    }
}