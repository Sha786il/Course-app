import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
      addcourse=(course:any)=>{
      return this.http.post<any>("https://mylinkurcodesapp.herokuapp.com/addcourse",course)
    }
  
}
