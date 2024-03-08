import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, FormGroup , FormBuilder } from '@angular/forms';
import { Training } from 'src/app/model/training.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
	selector: 'app-form-training-admin',
	templateUrl: './form-training-admin.component.html',
	styleUrls: ['./form-training-admin.component.css']
	})
	export class FormTrainingAdminComponent implements OnInit {

	constructor(public apiservise : ApiService , private router : Router , 
				private cartservice : CartService ,  private formbuilder : FormBuilder) 
	{ 
	}

	ngOnInit(): void {
	}

	modifTrainigAdm()
	{
	this.router.navigateByUrl('admin')
	}
  // onSaveCustomer(form : FormGroup)
	// {
	// 	if(form.valid)
	// 		{
	// 			this.cartService.saveCustomer(new Customer(form.value.name , form.value.firstName , 
	// 								form.value.address , form.value.phone , form.value.email))
	// 		}
	// 	this.router.navigateByUrl('order');
	// }
}
