import { Injectable } from '@angular/core';
import { DevModel } from '../models/devs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevsService {

  constructor(private http:HttpClient) { }

  getDevs():Observable<DevModel>{
    return this.http.get<DevModel>("https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json")
  }

  
}
