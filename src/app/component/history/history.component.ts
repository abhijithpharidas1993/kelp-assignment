import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  userList: any = []

  constructor(private _router: Router) { }

  ngOnInit(): void {
    const history = localStorage.getItem('search-history')
    this.userList = history? JSON.parse(history): [];
  }

  clearHistory() {
    localStorage.setItem('search-history', '')
    this.userList = []
  }

  seeUserInfo(id: string) {
    this._router.navigate(['profile', id])
  }
}
