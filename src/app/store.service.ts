import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor( private _HttpClient:HttpClient) { };

getproducts():Observable<any>
{
 return this._HttpClient.get('https://fakestoreapi.com/products')
}


}
