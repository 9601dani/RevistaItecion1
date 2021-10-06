import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
public id:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() : void {
    this.route.paramMap.subscribe( (paramMap : any) => {
      const{params}= paramMap
      console.log(params.variable);
    })
  }

}
