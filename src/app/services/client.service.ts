import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../model/client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }
  readonly host = 'http://localhost:5000';
  public add_client(objet:Client){

    return this.httpClient.post<Client>(this.host+"/clients",objet);
    
    }



  public tous_clients(){

return this.httpClient.get<Client[]>(this.host+"/clients");
  }

  public get1client (id:number){
    return this.httpClient.get<Client>(this.host+"/clients/"+id);
  }

  public deleteclient(id:number){


    return this.httpClient.delete(this.host+"/clients/"+id);
    
    }

    public modifier_l(objet:Client){
      return this.httpClient.put<Client>(this.host+"/clients/",objet);
    }



  
}
