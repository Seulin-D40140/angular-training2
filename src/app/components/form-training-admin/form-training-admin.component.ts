import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, FormGroup , FormBuilder } from '@angular/forms';
import { Training } from 'src/app/model/training.model';
import { CartService } from 'src/app/services/cart.service';
import { Traininadd } from 'src/app/model/traininadd.model'

@Component({
	selector: 'app-form-training-admin',
	templateUrl: './form-training-admin.component.html',
	styleUrls: ['./form-training-admin.component.css']
	})
	export class FormTrainingAdminComponent implements OnInit {

	training : Traininadd = new Traininadd ("" , "" , "" , 1)
	myForm : FormGroup;
	error = null

	constructor(public apiservise : ApiService , private router : Router , 
				private cartservice : CartService ,  private formbuilder : FormBuilder) 
	{ 
		this.myForm = this.formbuilder.group(
			{
				name: [this.training.name],
				description: [this.training.description],
				price: [this.training.price ],
				quantity: [this.training.quantity]
			})
	}

	ngOnInit(): void {
	}

	addTrainigAdm(form : FormGroup)
	{
		if(form.valid)
		{
			this.training = new Traininadd(form.value.name, form.value.description , form.value.price, 1 )
			this.apiservise.addTrainingAdmin(this.training).subscribe(
				{
					next : () => {},
					error : (err) => {this.error = err.message},
					complete : () => {this.error = null}
				})
		}
		this.router.navigateByUrl('admin')
	}

	// addTraining(training : Traininadd)
	// {
	// 	this.apiservise.addTrainingAdmin(training).subscribe(
	// 		{
	// 			next : () => {},
	// 			error : (err) => {this.error = err.message},
	// 			complete : () => {this.error = null}
	// 		})
	// }

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
