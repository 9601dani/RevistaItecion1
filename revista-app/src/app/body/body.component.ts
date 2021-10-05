import { ServiceHomeService } from 'service/service-home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private service: ServiceHomeService) { }

  ngOnInit(): void {
  }

  getOption(){
    return this.service.opcion;
  }

}
