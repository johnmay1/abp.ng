import { __decorate, __metadata } from "tslib";
import { ContentProjectionService, PROJECTION_STRATEGY } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { ModalContainerComponent } from '../components/modal/modal-container.component';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
let ModalService = class ModalService {
    constructor(contentProjectionService) {
        this.contentProjectionService = contentProjectionService;
        this.setContainer();
    }
    setContainer() {
        this.containerComponentRef = this.contentProjectionService.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(ModalContainerComponent));
        this.containerComponentRef.changeDetectorRef.detectChanges();
    }
    clearModal() {
        this.getContainer().clear();
        this.detectChanges();
    }
    detectChanges() {
        this.containerComponentRef.changeDetectorRef.detectChanges();
    }
    getContainer() {
        return this.containerComponentRef.instance.container;
    }
    renderTemplate(template, context) {
        const containerRef = this.getContainer();
        const strategy = PROJECTION_STRATEGY.ProjectTemplateToContainer(template, containerRef, context);
        this.contentProjectionService.projectContent(strategy);
    }
    ngOnDestroy() {
        this.containerComponentRef.destroy();
    }
};
ModalService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.ɵɵinject(i1.ContentProjectionService)); }, token: ModalService, providedIn: "root" });
ModalService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [ContentProjectionService])
], ModalService);
export { ModalService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9zcmMvbGliL3NlcnZpY2VzL21vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3RSxPQUFPLEVBQWdCLFVBQVUsRUFBNEMsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7OztBQUt4RixJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBR3ZCLFlBQW9CLHdCQUFrRDtRQUFsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ3BFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU8sWUFBWTtRQUNsQixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGNBQWMsQ0FDdkUsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsdUJBQXVCLENBQUMsQ0FDbkUsQ0FBQztRQUVGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDL0QsQ0FBQztJQUVELFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxjQUFjLENBQWdCLFFBQXdCLEVBQUUsT0FBVztRQUNqRSxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFekMsTUFBTSxRQUFRLEdBQUcsbUJBQW1CLENBQUMsMEJBQTBCLENBQzdELFFBQVEsRUFDUixZQUFZLEVBQ1osT0FBTyxDQUNSLENBQUM7UUFFRixJQUFJLENBQUMsd0JBQXdCLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Q0FDRixDQUFBOztBQTNDWSxZQUFZO0lBSHhCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7cUNBSThDLHdCQUF3QjtHQUgzRCxZQUFZLENBMkN4QjtTQTNDWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGVudFByb2plY3Rpb25TZXJ2aWNlLCBQUk9KRUNUSU9OX1NUUkFURUdZIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vZGFsQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbC9tb2RhbC1jb250YWluZXIuY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgY29udGFpbmVyQ29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8TW9kYWxDb250YWluZXJDb21wb25lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRlbnRQcm9qZWN0aW9uU2VydmljZTogQ29udGVudFByb2plY3Rpb25TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnNldENvbnRhaW5lcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDb250YWluZXIoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lckNvbXBvbmVudFJlZiA9IHRoaXMuY29udGVudFByb2plY3Rpb25TZXJ2aWNlLnByb2plY3RDb250ZW50KFxyXG4gICAgICBQUk9KRUNUSU9OX1NUUkFURUdZLkFwcGVuZENvbXBvbmVudFRvQm9keShNb2RhbENvbnRhaW5lckNvbXBvbmVudCksXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyQ29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIGNsZWFyTW9kYWwoKSB7XHJcbiAgICB0aGlzLmdldENvbnRhaW5lcigpLmNsZWFyKCk7XHJcbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIGRldGVjdENoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lckNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRDb250YWluZXIoKTogVmlld0NvbnRhaW5lclJlZiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXJDb21wb25lbnRSZWYuaW5zdGFuY2UuY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyVGVtcGxhdGU8VCBleHRlbmRzIGFueT4odGVtcGxhdGU6IFRlbXBsYXRlUmVmPFQ+LCBjb250ZXh0PzogVCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyUmVmID0gdGhpcy5nZXRDb250YWluZXIoKTtcclxuXHJcbiAgICBjb25zdCBzdHJhdGVneSA9IFBST0pFQ1RJT05fU1RSQVRFR1kuUHJvamVjdFRlbXBsYXRlVG9Db250YWluZXIoXHJcbiAgICAgIHRlbXBsYXRlLFxyXG4gICAgICBjb250YWluZXJSZWYsXHJcbiAgICAgIGNvbnRleHQsXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuY29udGVudFByb2plY3Rpb25TZXJ2aWNlLnByb2plY3RDb250ZW50KHN0cmF0ZWd5KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5jb250YWluZXJDb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG4iXX0=