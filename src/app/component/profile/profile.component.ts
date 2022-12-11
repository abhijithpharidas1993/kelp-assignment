import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private _activatedRoute: ActivatedRoute,
    private _apiService: ApiService) {
      this.user = null
     }

  ngOnInit(): void {
    const id = this._activatedRoute.snapshot.paramMap.get('id') || '';
    this.getUser(id);
  }

  getUser(id: string ) {
    this._apiService.getUser(id).subscribe( data=> this.user = data);
  }
}
