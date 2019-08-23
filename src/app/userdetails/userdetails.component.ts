import { Component, OnInit } from '@angular/core';
import{UserService} from '../user.service'

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  public Users = [];
  constructor(private user:UserService) { }
 ngOnInit() {
    this.Users=this.user.getUsers();
  }
}
