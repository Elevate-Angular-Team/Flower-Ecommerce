import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter';

@Injectable({
  providedIn: 'root'
})
export class HomeDataAdapterService implements Adapter {

  constructor() { }


  adapt(data:any){
    return {
      categories: data.categories,

    }
  }
}
