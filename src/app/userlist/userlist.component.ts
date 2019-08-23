import { Component, OnInit } from '@angular/core';
import{UserService} from '../user.service'
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
 public Users = [];
  constructor(private user:UserService) { }

  ngOnInit() {
    
    this.Users=this.user.getUsers();
  }

}
