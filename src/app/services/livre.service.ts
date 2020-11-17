import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livre } from '../model/livre';
@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor(private httpClient: HttpClient) { }
  readonly host = 'http://localhost:8700';

  public add_livre(objet:Livre){

    return this.httpClient.post<Livre>(this.host+"/books",objet);
    
    }



  public tous_livres(){

return this.httpClient.get<Livre[]>(this.host+"/books");
  }
  

  public get1livre (id:number){
    return this.httpClient.get<Livre>(this.host+"/books/"+id);
  }

  public deletelivre(id:number){


    return this.httpClient.delete(this.host+"/books/"+id);
    
    }

    public modifier_l(objet:Livre){
      return this.httpClient.put<Livre>(this.host+"/books/",objet);
    }





}
