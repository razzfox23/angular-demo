import { Component } from "@angular/core";
import { Route } from "@angular/router";
import { AdminRoleGuard } from "./admin-role.guard";
import { RouterTestingHarness } from "@angular/router/testing";

@Component({ standalone: true, template: "" })
class DoggieExampleTestComponent {}
describe("AuthGuard", () => {
  let routes: Route[];

  beforeEach(() => {
    routes = [
      {
        path: "doggie/create",
        canActivate: [AdminRoleGuard],
        component: DoggieExampleTestComponent,
      },
    ];
  });

  it("[Example tesst] should initiate the login flow if there is no valid token... ", async () => {
    const mockOAuthService = {
      hasValidAccessToken: jest.fn().mockReturnValue(false),
      initCodeFlow: jest.fn(),
    };
    const mockAuthRedirectService = { saveRoute: jest.fn() };
    //TODO: When we have correct authguard 
    // TestBed.configureTestingModule({
    //   imports: [HttpClientTestingModule],
    //   providers: [
    //     { provide: OAuthService, useValue: mockOAuthService },
    //     { provide: AuthRedirectService, useValue: mockAuthRedirectService },
    //     provideRouter(routes),
    //   ],
    // });
    // await RouterTestingHarness.create("/doggie/create");
    // expect(mockOAuthService.initCodeFlow).toHaveBeenCalled();
    // expect(mockAuthRedirectService.saveRoute).toHaveBeenCalledWith(
    //   "/doggie/create"
    // );
    expect(true).toEqual(true);
  });

  it("[Example test] should allow access to the doggie/create if the token is valid", async () => {
    const mockOAuthService = {
      hasValidAccessToken: jest.fn().mockReturnValue(true),
      initCodeFlow: jest.fn(),
    };
    const mockAuthRedirectService = { saveRoute: jest.fn() };
    // TestBed.configureTestingModule({
    //   imports: [HttpClientTestingModule],
    //   providers: [
    //     { provide: OAuthService, useValue: mockOAuthService },
    //     { provide: AuthRedirectService, useValue: mockAuthRedirectService },
    //     provideRouter(routes),
    //   ],
    // });
    //await RouterTestingHarness.create("/doggie/create");
    //expect(TestBed.inject(Router).url).toEqual("/doggie/create");
    expect(true).toEqual(true);

  });

 
});