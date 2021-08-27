import * as $ from 'jquery';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/service/data.service';

// declare var $:any;

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
    });
    // $(function(){
      $('.gif').slice(0, 25).show();
      $('#load').on("click", function(){
        // $('.gifs').slice(0,25).show();
      });
    // });


    }
    OnDestroy(){
      this.subscription.unsubscribe();
    }
    // loadMore(){

    // }

}
