import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  showAllUsers() {
    this._dataService.allUsers().subscribe(
      result => this.users = result
    )
  }

  getRandomUser() {
    this.clearUsers();
    this.users = [];
    this._dataService.random().subscribe(
      result => this.users.push(result)
    )
  }

  clearUsers() {
    this.users = null 
  }
}
