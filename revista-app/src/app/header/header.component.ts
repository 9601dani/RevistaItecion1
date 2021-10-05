import { Component, OnInit } from '@angular/core';
import { ServiceHomeService } from 'service/service-home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:ServiceHomeService) { }

  ngOnInit(): void {
  }


}
