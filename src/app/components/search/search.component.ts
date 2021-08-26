import { DataService } from 'src/app/service/data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
  }
  search(searchTerm:string){
    if(searchTerm !== ""){
      this.dataservice.searchGifs(searchTerm);
     
  }


  }
}
