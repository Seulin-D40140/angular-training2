import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanActivate 
{
	constructor(private userservice : UserService , private router : Router) {   }
	canActivate(
	route: ActivatedRouteSnapshot,
	state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
	{
		if(this.userservice.isAdmin)
		{
			return true
		}
		else
		{
			this.router.navigateByUrl('/connection')
			return false
		}
	}
}
