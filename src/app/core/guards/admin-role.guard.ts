import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AdminRoleGuard: CanActivateFn = (route, state) => {
  const user = null;
  
  if (user)
    return true;

  const router = inject(Router);
  router.navigate(["/"]);
  return false;
};
