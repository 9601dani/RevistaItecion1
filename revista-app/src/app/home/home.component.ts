import { Component, OnInit } from '@angular/core';
import { ServiceHomeService } from 'service/service-home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ServiceHomeService) { }

  ngOnInit(): void {
  }

  getOption(){
    console.log(this.service.opcion);
    return this.service.opcion;
  }

}
