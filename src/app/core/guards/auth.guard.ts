import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {

  //TODO: Auth state ngrx and action to get the current user or services (Example: OAuthService)
  const user = null;
  
  if (user)
    return true;
    
  const router = inject(Router);
  router.navigate(["/"]);
  return false;
};


