import { Injectable } from '@angular/core';
import { HomeApi } from './Base/homeApi';
import { HttpClient } from '@angular/common/http';
import { HomeDataAdapterService } from './adapter/homeData.adapter.ts';
import { homeEndpoint } from './enums/homeData.endpoint';
import { Observable , map , catchError , of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService implements HomeApi {

  constructor(private _HttpClient:HttpClient , private _HomeDataAdapterService:HomeDataAdapterService) { }

  categories():Observable<any> {
    return this._HttpClient.get(  homeEndpoint.Categories ).pipe(
      map(res=>this._HomeDataAdapterService.adapt(res)),
      catchError(err=>of([err]))
    )
  }
  
}
