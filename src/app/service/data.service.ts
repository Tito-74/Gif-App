import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { importType } from '@angular/compiler/src/output/output_ast';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
gifs = new BehaviorSubject<any>([]);
  constructor(private http:HttpClient) { }
  getTrendingGifs(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.gifApiKey}&limit=50&rating=g`)
    .subscribe((response:any)=>{
      this.gifs.next(response.data);
    });
  }
  searchGifs(gifName:string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${environment.gifApiKey}&q=${gifName}&limit=50&offset=0&rating=g&lang=en`)
    .subscribe((response:any)=>{
      this.gifs.next(response.data);
    });
    

  }
  getGifs(){
    return this.gifs.asObservable();
  }
}