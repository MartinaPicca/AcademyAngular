import { Router } from "@angular/router";
import { HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Docente } from "../_models/docente";

@Injectable({ providedIn: 'root' })
export class DocenteService {


  constructor(
    private router: Router,
    private http: HttpClient
  ) {  }

  getAllDocenti() {
    return this.http.get<any>(`${environment.apiUrl}/docenti`)
  }

  createDocente(docente: Docente) {
    return this.http.post(`${environment.apiUrl}/docenti/nuovoDocente`, docente)
  }

  deleteDocente(id:any) {
    return this.http.delete<any>(`${environment.apiUrl}/docenti/${id}`)
  }

  updateCliente(docente:Docente) {
    return this.http.put(`${environment.apiUrl}/docenti/modificaDocente`, docente)
  }

}
