import { Injectable } from '@angular/core';
import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, from } from 'rxjs';
import { LeaveService } from './leave.service';
@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private leaveService:LeaveService, private router:Router)
  {

  }
  canActivate()
    {
      if(this.leaveService.isAdmin )
      {
        return  true;

      }
      else
      {
        this.router.navigate(['/home'])
      }
      // return Observable.Of(this.leaveService.isAdmin);
      
    }
    
  
    
  
}
