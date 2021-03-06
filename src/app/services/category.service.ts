import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }
  readonly host = 'http://localhost:5003';

  public add_cat(objet:Category){

    return this.httpClient.post<Category>(this.host+"/category",objet);
    
    }



  public tous_cat(){

return this.httpClient.get<Category[]>(this.host+"/category");
  }
  

  public get1cat(id:number){
    return this.httpClient.get<Category>(this.host+"/category/"+id);
  }

  public deletecat(id:number){


    return this.httpClient.delete(this.host+"/category/"+id);
    
    }

    public modifier_cat(objet:Category){
      return this.httpClient.put<Category>(this.host+"/category/",objet);
    }


}
