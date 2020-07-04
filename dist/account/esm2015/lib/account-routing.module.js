import { __decorate } from "tslib";
import { DynamicLayoutComponent, AuthGuard, ReplaceableRouteContainerComponent, } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';
import { RegisterComponent } from './components/register/register.component';
const ɵ0 = {
    replaceableComponent: {
        key: "Account.LoginComponent" /* Login */,
        defaultComponent: LoginComponent,
    },
}, ɵ1 = {
    replaceableComponent: {
        key: "Account.RegisterComponent" /* Register */,
        defaultComponent: RegisterComponent,
    },
}, ɵ2 = {
    replaceableComponent: {
        key: "Account.ManageProfileComponent" /* ManageProfile */,
        defaultComponent: ManageProfileComponent,
    },
};
const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
        path: '',
        component: DynamicLayoutComponent,
        children: [
            {
                path: 'login',
                component: ReplaceableRouteContainerComponent,
                data: ɵ0,
            },
            {
                path: 'register',
                component: ReplaceableRouteContainerComponent,
                data: ɵ1,
            },
            {
                path: 'manage-profile',
                component: ReplaceableRouteContainerComponent,
                canActivate: [AuthGuard],
                data: ɵ2,
            },
        ],
    },
];
let AccountRoutingModule = class AccountRoutingModule {
};
AccountRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], AccountRoutingModule);
export { AccountRoutingModule };
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL2FjY291bnQvc3JjL2xpYi9hY2NvdW50LXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLFNBQVMsRUFFVCxrQ0FBa0MsR0FDbkMsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO1dBWS9EO0lBQ0osb0JBQW9CLEVBQUU7UUFDcEIsR0FBRyxzQ0FBMEI7UUFDN0IsZ0JBQWdCLEVBQUUsY0FBYztLQUNrQjtDQUNyRCxPQUtLO0lBQ0osb0JBQW9CLEVBQUU7UUFDcEIsR0FBRyw0Q0FBNkI7UUFDaEMsZ0JBQWdCLEVBQUUsaUJBQWlCO0tBQ2tCO0NBQ3hELE9BTUs7SUFDSixvQkFBb0IsRUFBRTtRQUNwQixHQUFHLHNEQUFrQztRQUNyQyxnQkFBZ0IsRUFBRSxzQkFBc0I7S0FDa0I7Q0FDN0Q7QUFuQ1QsTUFBTSxNQUFNLEdBQVc7SUFDckIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRTtJQUNwRDtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLHNCQUFzQjtRQUNqQyxRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixTQUFTLEVBQUUsa0NBQWtDO2dCQUM3QyxJQUFJLElBS0g7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsa0NBQWtDO2dCQUM3QyxJQUFJLElBS0g7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLFNBQVMsRUFBRSxrQ0FBa0M7Z0JBQzdDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDeEIsSUFBSSxJQUtIO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQztBQU1GLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0NBQUcsQ0FBQTtBQUF2QixvQkFBb0I7SUFKaEMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7S0FDeEIsQ0FBQztHQUNXLG9CQUFvQixDQUFHO1NBQXZCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRHluYW1pY0xheW91dENvbXBvbmVudCxcclxuICBBdXRoR3VhcmQsXHJcbiAgUmVwbGFjZWFibGVDb21wb25lbnRzLFxyXG4gIFJlcGxhY2VhYmxlUm91dGVDb250YWluZXJDb21wb25lbnQsXHJcbn0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYW5hZ2VQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21hbmFnZS1wcm9maWxlL21hbmFnZS1wcm9maWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGVBY2NvdW50Q29tcG9uZW50cyB9IGZyb20gJy4vZW51bXMvY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7IHBhdGg6ICcnLCBwYXRoTWF0Y2g6ICdmdWxsJywgcmVkaXJlY3RUbzogJ2xvZ2luJyB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcnLFxyXG4gICAgY29tcG9uZW50OiBEeW5hbWljTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdsb2dpbicsXHJcbiAgICAgICAgY29tcG9uZW50OiBSZXBsYWNlYWJsZVJvdXRlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJlcGxhY2VhYmxlQ29tcG9uZW50OiB7XHJcbiAgICAgICAgICAgIGtleTogZUFjY291bnRDb21wb25lbnRzLkxvZ2luLFxyXG4gICAgICAgICAgICBkZWZhdWx0Q29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCxcclxuICAgICAgICAgIH0gYXMgUmVwbGFjZWFibGVDb21wb25lbnRzLlJvdXRlRGF0YTxMb2dpbkNvbXBvbmVudD4sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdyZWdpc3RlcicsXHJcbiAgICAgICAgY29tcG9uZW50OiBSZXBsYWNlYWJsZVJvdXRlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHJlcGxhY2VhYmxlQ29tcG9uZW50OiB7XHJcbiAgICAgICAgICAgIGtleTogZUFjY291bnRDb21wb25lbnRzLlJlZ2lzdGVyLFxyXG4gICAgICAgICAgICBkZWZhdWx0Q29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudCxcclxuICAgICAgICAgIH0gYXMgUmVwbGFjZWFibGVDb21wb25lbnRzLlJvdXRlRGF0YTxSZWdpc3RlckNvbXBvbmVudD4sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdtYW5hZ2UtcHJvZmlsZScsXHJcbiAgICAgICAgY29tcG9uZW50OiBSZXBsYWNlYWJsZVJvdXRlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByZXBsYWNlYWJsZUNvbXBvbmVudDoge1xyXG4gICAgICAgICAgICBrZXk6IGVBY2NvdW50Q29tcG9uZW50cy5NYW5hZ2VQcm9maWxlLFxyXG4gICAgICAgICAgICBkZWZhdWx0Q29tcG9uZW50OiBNYW5hZ2VQcm9maWxlQ29tcG9uZW50LFxyXG4gICAgICAgICAgfSBhcyBSZXBsYWNlYWJsZUNvbXBvbmVudHMuUm91dGVEYXRhPE1hbmFnZVByb2ZpbGVDb21wb25lbnQ+LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50Um91dGluZ01vZHVsZSB7fVxyXG4iXX0=