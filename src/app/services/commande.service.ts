import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../model/commande';
@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  
  constructor(private httpClient: HttpClient) { }
  readonly host = 'http://localhost:8181';

  public add_commande(objet:Commande){

    return this.httpClient.post<Commande>(this.host+"/commandes",objet);
    
    }



  public tous_commandes(){

return this.httpClient.get<Commande[]>(this.host+"/commandes");
  }
  


  public deletecommande(id:number){


    return this.httpClient.delete(this.host+"/commandes/"+id);
    
    }



}
