import { Doador } from "@/models/Doador";
import axios from "axios";

 
export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080"
});
 
export class DoadorService {
 
    findAll() {
        return axiosInstance.get("/Doador/findAll");
    }
 
    save(doador: Doador) {
        return axiosInstance.post("/Doador/save", doador);
    }
 
    update(doador: Doador) {
        return axiosInstance.put("/Doador/update", doador);
    }
    findById(id: number) {
        return axiosInstance.get("/Doador/findById", {
            params: {
                id: id,
            }
        });
    }
 
    filter(filter: string){
        return axiosInstance.get("/Doador/find", {
            params: {
                filter: filter,
            }
        });
    }
 
    inactive(doador: Doador){
        return axiosInstance.delete(`doador/inactive/${doador.id}`);
    }
}