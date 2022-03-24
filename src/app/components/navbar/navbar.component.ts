import { Component, OnInit } from '@angular/core';
import { LOGO_VYM_CONSTANT } from 'src/assets/constants/img/img-constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logo_img_url = LOGO_VYM_CONSTANT;

  constructor() { }

  ngOnInit(): void {
  }

}
