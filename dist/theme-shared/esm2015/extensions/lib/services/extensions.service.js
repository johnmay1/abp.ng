import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { EntityActionsFactory } from '../models/entity-actions';
import { EntityPropsFactory } from '../models/entity-props';
import { CreateFormPropsFactory, EditFormPropsFactory } from '../models/form-props';
import { ToolbarActionsFactory } from '../models/toolbar-actions';
import * as i0 from "@angular/core";
let ExtensionsService = class ExtensionsService {
    constructor() {
        this.entityActions = new EntityActionsFactory();
        this.toolbarActions = new ToolbarActionsFactory();
        this.entityProps = new EntityPropsFactory();
        this.createFormProps = new CreateFormPropsFactory();
        this.editFormProps = new EditFormPropsFactory();
    }
};
ExtensionsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ExtensionsService_Factory() { return new ExtensionsService(); }, token: ExtensionsService, providedIn: "root" });
ExtensionsService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ExtensionsService);
export { ExtensionsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUtc2hhcmVkL2V4dGVuc2lvbnMvc3JjL2xpYi9zZXJ2aWNlcy9leHRlbnNpb25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBS2xFLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBQTlCO1FBQ1csa0JBQWEsR0FBRyxJQUFJLG9CQUFvQixFQUFLLENBQUM7UUFDOUMsbUJBQWMsR0FBRyxJQUFJLHFCQUFxQixFQUFPLENBQUM7UUFDbEQsZ0JBQVcsR0FBRyxJQUFJLGtCQUFrQixFQUFLLENBQUM7UUFDMUMsb0JBQWUsR0FBRyxJQUFJLHNCQUFzQixFQUFLLENBQUM7UUFDbEQsa0JBQWEsR0FBRyxJQUFJLG9CQUFvQixFQUFLLENBQUM7S0FDeEQ7Q0FBQSxDQUFBOztBQU5ZLGlCQUFpQjtJQUg3QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csaUJBQWlCLENBTTdCO1NBTlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFbnRpdHlBY3Rpb25zRmFjdG9yeSB9IGZyb20gJy4uL21vZGVscy9lbnRpdHktYWN0aW9ucyc7XHJcbmltcG9ydCB7IEVudGl0eVByb3BzRmFjdG9yeSB9IGZyb20gJy4uL21vZGVscy9lbnRpdHktcHJvcHMnO1xyXG5pbXBvcnQgeyBDcmVhdGVGb3JtUHJvcHNGYWN0b3J5LCBFZGl0Rm9ybVByb3BzRmFjdG9yeSB9IGZyb20gJy4uL21vZGVscy9mb3JtLXByb3BzJztcclxuaW1wb3J0IHsgVG9vbGJhckFjdGlvbnNGYWN0b3J5IH0gZnJvbSAnLi4vbW9kZWxzL3Rvb2xiYXItYWN0aW9ucyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXh0ZW5zaW9uc1NlcnZpY2U8UiA9IGFueT4ge1xyXG4gIHJlYWRvbmx5IGVudGl0eUFjdGlvbnMgPSBuZXcgRW50aXR5QWN0aW9uc0ZhY3Rvcnk8Uj4oKTtcclxuICByZWFkb25seSB0b29sYmFyQWN0aW9ucyA9IG5ldyBUb29sYmFyQWN0aW9uc0ZhY3Rvcnk8UltdPigpO1xyXG4gIHJlYWRvbmx5IGVudGl0eVByb3BzID0gbmV3IEVudGl0eVByb3BzRmFjdG9yeTxSPigpO1xyXG4gIHJlYWRvbmx5IGNyZWF0ZUZvcm1Qcm9wcyA9IG5ldyBDcmVhdGVGb3JtUHJvcHNGYWN0b3J5PFI+KCk7XHJcbiAgcmVhZG9ubHkgZWRpdEZvcm1Qcm9wcyA9IG5ldyBFZGl0Rm9ybVByb3BzRmFjdG9yeTxSPigpO1xyXG59XHJcbiJdfQ==