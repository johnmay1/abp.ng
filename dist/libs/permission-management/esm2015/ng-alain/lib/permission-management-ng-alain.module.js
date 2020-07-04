import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { PermissionManagementComponent } from './components/permission-management.component';
import { CoreModule } from '@abp/ng.core';
import { PermissionManagementWrapModule } from '@fs/permission-management/wrap';
let PermissionManagementNgAlainModule = class PermissionManagementNgAlainModule {
};
PermissionManagementNgAlainModule = __decorate([
    NgModule({
        declarations: [PermissionManagementComponent],
        entryComponents: [PermissionManagementComponent],
        imports: [
            CoreModule,
            NgAlainBasicModule,
            PermissionManagementWrapModule
        ],
        exports: [
            PermissionManagementComponent
        ]
    })
], PermissionManagementNgAlainModule);
export { PermissionManagementNgAlainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi1tYW5hZ2VtZW50LW5nLWFsYWluLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvcGVybWlzc2lvbi1tYW5hZ2VtZW50L25nLWFsYWluL3NyYy9saWIvcGVybWlzc2lvbi1tYW5hZ2VtZW50LW5nLWFsYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM3RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBY2hGLElBQWEsaUNBQWlDLEdBQTlDLE1BQWEsaUNBQWlDO0NBVzdDLENBQUE7QUFYWSxpQ0FBaUM7SUFaN0MsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFLENBQUMsNkJBQTZCLENBQUM7UUFDN0MsZUFBZSxFQUFFLENBQUMsNkJBQTZCLENBQUM7UUFDaEQsT0FBTyxFQUFFO1lBQ1AsVUFBVTtZQUNWLGtCQUFrQjtZQUNsQiw4QkFBOEI7U0FDL0I7UUFDRCxPQUFPLEVBQUM7WUFDTiw2QkFBNkI7U0FDOUI7S0FDRixDQUFDO0dBQ1csaUNBQWlDLENBVzdDO1NBWFksaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQWxhaW5CYXNpY01vZHVsZSB9IGZyb20gJ0Bmcy9uZy1hbGFpbi9iYXNpYyc7XHJcbmltcG9ydCB7IFBlcm1pc3Npb25NYW5hZ2VtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Blcm1pc3Npb24tbWFuYWdlbWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgUGVybWlzc2lvbk1hbmFnZW1lbnRXcmFwTW9kdWxlIH0gZnJvbSAnQGZzL3Blcm1pc3Npb24tbWFuYWdlbWVudC93cmFwJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbUGVybWlzc2lvbk1hbmFnZW1lbnRDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1Blcm1pc3Npb25NYW5hZ2VtZW50Q29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb3JlTW9kdWxlLFxyXG4gICAgTmdBbGFpbkJhc2ljTW9kdWxlLFxyXG4gICAgUGVybWlzc2lvbk1hbmFnZW1lbnRXcmFwTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOltcclxuICAgIFBlcm1pc3Npb25NYW5hZ2VtZW50Q29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbk1hbmFnZW1lbnROZ0FsYWluTW9kdWxlIHtcclxuICAvLyBzdGF0aWMgZm9yQ2hpbGQoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxQZXJtaXNzaW9uTWFuYWdlbWVudE5nQWxhaW5Nb2R1bGU+IHtcclxuICAvLyAgIHJldHVybiB7XHJcbiAgLy8gICAgIG5nTW9kdWxlOiBQZXJtaXNzaW9uTWFuYWdlbWVudE5nQWxhaW5Nb2R1bGUsXHJcbiAgLy8gICAgIHByb3ZpZGVyczogW10sXHJcbiAgLy8gICB9O1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gc3RhdGljIGZvckxhenkoKTogTmdNb2R1bGVGYWN0b3J5PFBlcm1pc3Npb25NYW5hZ2VtZW50TmdBbGFpbk1vZHVsZT4ge1xyXG4gIC8vICAgcmV0dXJuIG5ldyBMYXp5TW9kdWxlRmFjdG9yeShQZXJtaXNzaW9uTWFuYWdlbWVudE5nQWxhaW5Nb2R1bGUuZm9yQ2hpbGQoKSk7XHJcbiAgLy8gfVxyXG59XHJcbiJdfQ==