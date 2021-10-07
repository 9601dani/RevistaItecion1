import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuUserService } from 'service/menu-user.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
public id:any;
  constructor(private route: ActivatedRoute, private service: MenuUserService) { }

  ngOnInit() : void {
    this.route.paramMap.subscribe( (paramMap : any) => {
      const{params}= paramMap
      console.log(params.variable);
    })
  }
  getOp(){
    return this.service.Op;
  }

}
