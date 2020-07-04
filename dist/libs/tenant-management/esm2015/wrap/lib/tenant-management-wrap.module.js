import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { TenantManagementModule } from '@abp/ng.tenant-management';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { CoreModule } from '@abp/ng.core';
let TenantManagementWrapModule = class TenantManagementWrapModule {
};
TenantManagementWrapModule = __decorate([
    NgModule({
        imports: [TenantManagementModule],
        exports: [TenantManagementModule, CoreModule, NgxValidateCoreModule]
    })
], TenantManagementWrapModule);
export { TenantManagementWrapModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LW1hbmFnZW1lbnQtd3JhcC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL3RlbmFudC1tYW5hZ2VtZW50L3dyYXAvc3JjL2xpYi90ZW5hbnQtbWFuYWdlbWVudC13cmFwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBTTFDLElBQWEsMEJBQTBCLEdBQXZDLE1BQWEsMEJBQTBCO0NBQUksQ0FBQTtBQUE5QiwwQkFBMEI7SUFKdEMsUUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7UUFDakMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLHFCQUFxQixDQUFDO0tBQ3ZFLENBQUM7R0FDVywwQkFBMEIsQ0FBSTtTQUE5QiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUZW5hbnRNYW5hZ2VtZW50TW9kdWxlIH0gZnJvbSAnQGFicC9uZy50ZW5hbnQtbWFuYWdlbWVudCc7XHJcbmltcG9ydCB7IE5neFZhbGlkYXRlQ29yZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdmFsaWRhdGUvY29yZSc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtUZW5hbnRNYW5hZ2VtZW50TW9kdWxlXSxcclxuICAgIGV4cG9ydHM6IFtUZW5hbnRNYW5hZ2VtZW50TW9kdWxlLCBDb3JlTW9kdWxlLCBOZ3hWYWxpZGF0ZUNvcmVNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZW5hbnRNYW5hZ2VtZW50V3JhcE1vZHVsZSB7IH1cclxuIl19