import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training.model';
import { User } from 'src/app/model/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  listTrainingsAdmin : Training[] | undefined;  
	error = null

  constructor( public apiservice : ApiService) { }

  ngOnInit(): void 
  {
    this.getAllTrainingsAdmin()
  }

  getAllTrainingsAdmin()
	{
		this.apiservice.getTrainings().subscribe(
		{
		next : (data) => {this.listTrainingsAdmin = data},
		error : (err) => {this.error = err.message},
		complete : () => {this.error = null}
		})
	}
}
