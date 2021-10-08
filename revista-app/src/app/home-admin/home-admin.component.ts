import { Component, OnInit } from '@angular/core';
import { MenuAdminService } from 'service/menu-admin.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  constructor(private service:MenuAdminService) { }

  ngOnInit(): void {
  }

  getOpcionA():String{
    return this.service.Opcion;
  }
}
