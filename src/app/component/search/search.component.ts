import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UserAbstractSearch, UserAbstract } from '../../modals/data-modals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  userList: UserAbstract[] = [];
  search: string = ''
  constructor(private _apiService: ApiService,
    private _router: Router) { }

  ngOnInit(): void {
    
  }

  searchUser(){
    console.log("search : "+ this.search)
    if(this.search.trim().length > 0){
      this._apiService.searchUser(this.search).subscribe(
        (data: UserAbstractSearch)=>{
          console.error(data);
          this.userList = data && data.items
        }
      )
    }
    
  }

  seeUserInfo(user: UserAbstract) {
    const history = localStorage.getItem('search-history')
    const userList = history? JSON.parse(history): [];
    if(userList.length > 0) {
      const index = userList.findIndex( (userItem: UserAbstract) => user.login === userItem.login )
      console.log("index", index)
      if(index < 0){
      localStorage.setItem('search-history',JSON.stringify([...userList, user]))
      }
    } else {
      localStorage.setItem('search-history',JSON.stringify([user]))
    }
    this._router.navigate(['profile', user.login])
  }

}
