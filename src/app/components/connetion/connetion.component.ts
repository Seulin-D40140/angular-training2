import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-connetion',
  templateUrl: './connetion.component.html',
  styleUrls: ['./connetion.component.css']
})
export class ConnetionComponent implements OnInit {

  myForm : FormGroup;

	constructor(public cartservice : CartService , private router : Router , private formbuilder : FormBuilder) 
	{  
		let user = this.cartservice.getUser()
		this.myForm = this.formbuilder.group(
			{
				password: [user.password , Validators.required],
				email: [user.email , [Validators.required , Validators.pattern('[a-z0-9.@]*')]]
			})
	}

  ngOnInit(): void {
  }

  onSaveCustomer(form : FormGroup)
	{
		if(form.valid)
			{
				this.cartservice.saveUser(new User(form.value.email , form.value.password))
			}
	}
}
