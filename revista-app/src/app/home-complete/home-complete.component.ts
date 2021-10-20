import { ServiceHomeService } from 'service/service-home.service';
import { UserComplete } from 'src/objects/UserComplete';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-complete',
  templateUrl: './home-complete.component.html',
  styleUrls: ['./home-complete.component.css']
})
export class HomeCompleteComponent implements OnInit {
verSpan!:number;
  constructor(private ServiceHomeService:ServiceHomeService) { }

  ngOnInit(): void {
    localStorage.removeItem("userComplete");
    localStorage.removeItem("userS");
  }

  getSpan():number{
    this.verSpan=this.ServiceHomeService.getSpan()
    return this.verSpan
  }

}
