import { Animal } from "@/models/Animal";
import axios from "axios";

 
export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080"
});
 
export class AnimalService {
 
    findAll() {
        return axiosInstance.get("/Animal/findAll");
    }
 
    save(animal: Animal) {
        return axiosInstance.post("/Animal/save", animal);
    }
 
    update(animal: Animal) {
        return axiosInstance.put("/Animal/update", animal);
    }
    findById(id: number) {
        return axiosInstance.get("/Animal/findById", {
            params: {
                id: id,
            }
        });
    }
 
    filter(filter: string){
        return axiosInstance.get("/Animal/find", {
            params: {
                filter: filter,
            }
        });
    }
 
    inactive(animal: Animal){
        return axiosInstance.delete(`Animal/inactive/${animal.id}`);
    }
}