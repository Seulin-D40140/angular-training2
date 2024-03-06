import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable(
	{
		providedIn: 'root'
	})
export class UserService {

	constructor() { }


	getUser() : User
	{
	let user = localStorage.getItem('users');
	if(user)  return  JSON.parse(user);
	return new User("","");
	}

	saveUser(user : User) 
	{
	localStorage.setItem('user',JSON.stringify(user));
	}
}
