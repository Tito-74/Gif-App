import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit{
  gifs:any[]= [];
  subscription !:Subscription;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getTrendingGifs()
    this.subscription = this.dataService.getGifs()
    .subscribe((response:any)=>{
      this.gifs =response;
    })

    }
    OnDestroy(){
      this.subscription.unsubscribe();
    }

}
