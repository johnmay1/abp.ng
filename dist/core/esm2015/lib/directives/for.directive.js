import { __decorate, __metadata } from "tslib";
import { Directive, Input, IterableDiffers, TemplateRef, ViewContainerRef, } from '@angular/core';
import compare from 'just-compare';
import clone from 'just-clone';
class AbpForContext {
    constructor($implicit, index, count, list) {
        this.$implicit = $implicit;
        this.index = index;
        this.count = count;
        this.list = list;
    }
}
class RecordView {
    constructor(record, view) {
        this.record = record;
        this.view = view;
    }
}
let ForDirective = class ForDirective {
    constructor(tempRef, vcRef, differs) {
        this.tempRef = tempRef;
        this.vcRef = vcRef;
        this.differs = differs;
    }
    get compareFn() {
        return this.compareBy || compare;
    }
    get trackByFn() {
        return this.trackBy || ((index, item) => item.id || index);
    }
    iterateOverAppliedOperations(changes) {
        const rw = [];
        changes.forEachOperation((record, previousIndex, currentIndex) => {
            if (record.previousIndex == null) {
                const view = this.vcRef.createEmbeddedView(this.tempRef, new AbpForContext(null, -1, -1, this.items), currentIndex);
                rw.push(new RecordView(record, view));
            }
            else if (currentIndex == null) {
                this.vcRef.remove(previousIndex);
            }
            else {
                const view = this.vcRef.get(previousIndex);
                this.vcRef.move(view, currentIndex);
                rw.push(new RecordView(record, view));
            }
        });
        for (let i = 0, l = rw.length; i < l; i++) {
            rw[i].view.context.$implicit = rw[i].record.item;
        }
    }
    iterateOverAttachedViews(changes) {
        for (let i = 0, l = this.vcRef.length; i < l; i++) {
            const viewRef = this.vcRef.get(i);
            viewRef.context.index = i;
            viewRef.context.count = l;
            viewRef.context.list = this.items;
        }
        changes.forEachIdentityChange((record) => {
            const viewRef = this.vcRef.get(record.currentIndex);
            viewRef.context.$implicit = record.item;
        });
    }
    projectItems(items) {
        if (!items.length && this.emptyRef) {
            this.vcRef.clear();
            // tslint:disable-next-line: no-unused-expression
            this.vcRef.createEmbeddedView(this.emptyRef).rootNodes;
            this.isShowEmptyRef = true;
            this.differ = null;
            return;
        }
        if (this.emptyRef && this.isShowEmptyRef) {
            this.vcRef.clear();
            this.isShowEmptyRef = false;
        }
        if (!this.differ && items) {
            this.differ = this.differs.find(items).create(this.trackByFn);
        }
        if (this.differ) {
            const changes = this.differ.diff(items);
            if (changes) {
                this.iterateOverAppliedOperations(changes);
                this.iterateOverAttachedViews(changes);
            }
        }
    }
    sortItems(items) {
        if (this.orderBy) {
            items.sort((a, b) => (a[this.orderBy] > b[this.orderBy] ? 1 : a[this.orderBy] < b[this.orderBy] ? -1 : 0));
        }
        else {
            items.sort();
        }
    }
    ngOnChanges() {
        let items = clone(this.items);
        if (!Array.isArray(items))
            return;
        const compareFn = this.compareFn;
        if (typeof this.filterBy !== 'undefined' && typeof this.filterVal !== 'undefined' && this.filterVal !== '') {
            items = items.filter(item => compareFn(item[this.filterBy], this.filterVal));
        }
        switch (this.orderDir) {
            case 'ASC':
                this.sortItems(items);
                this.projectItems(items);
                break;
            case 'DESC':
                this.sortItems(items);
                items.reverse();
                this.projectItems(items);
                break;
            default:
                this.projectItems(items);
        }
    }
};
__decorate([
    Input('abpForOf'),
    __metadata("design:type", Array)
], ForDirective.prototype, "items", void 0);
__decorate([
    Input('abpForOrderBy'),
    __metadata("design:type", String)
], ForDirective.prototype, "orderBy", void 0);
__decorate([
    Input('abpForOrderDir'),
    __metadata("design:type", String)
], ForDirective.prototype, "orderDir", void 0);
__decorate([
    Input('abpForFilterBy'),
    __metadata("design:type", String)
], ForDirective.prototype, "filterBy", void 0);
__decorate([
    Input('abpForFilterVal'),
    __metadata("design:type", Object)
], ForDirective.prototype, "filterVal", void 0);
__decorate([
    Input('abpForTrackBy'),
    __metadata("design:type", Object)
], ForDirective.prototype, "trackBy", void 0);
__decorate([
    Input('abpForCompareBy'),
    __metadata("design:type", Function)
], ForDirective.prototype, "compareBy", void 0);
__decorate([
    Input('abpForEmptyRef'),
    __metadata("design:type", TemplateRef)
], ForDirective.prototype, "emptyRef", void 0);
ForDirective = __decorate([
    Directive({
        selector: '[abpFor]',
    }),
    __metadata("design:paramtypes", [TemplateRef,
        ViewContainerRef,
        IterableDiffers])
], ForDirective);
export { ForDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9kaXJlY3RpdmVzL2Zvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUlMLGVBQWUsRUFFZixXQUFXLEVBRVgsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sT0FBTyxNQUFNLGNBQWMsQ0FBQztBQUNuQyxPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFJL0IsTUFBTSxhQUFhO0lBQ2pCLFlBQW1CLFNBQWMsRUFBUyxLQUFhLEVBQVMsS0FBYSxFQUFTLElBQVc7UUFBOUUsY0FBUyxHQUFULFNBQVMsQ0FBSztRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBTztJQUFHLENBQUM7Q0FDdEc7QUFFRCxNQUFNLFVBQVU7SUFDZCxZQUFtQixNQUFpQyxFQUFTLElBQW9DO1FBQTlFLFdBQU0sR0FBTixNQUFNLENBQTJCO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBZ0M7SUFBRyxDQUFDO0NBQ3RHO0FBS0QsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQXFDdkIsWUFDVSxPQUFtQyxFQUNuQyxLQUF1QixFQUN2QixPQUF3QjtRQUZ4QixZQUFPLEdBQVAsT0FBTyxDQUE0QjtRQUNuQyxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtJQUMvQixDQUFDO0lBWkosSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQztJQUNuQyxDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxLQUFhLEVBQUUsSUFBUyxFQUFF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QUFLLENBQUMsZUFBZSxDQUFDOzs2Q0FDUDtBQUdoQjtJQURDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzs7OENBQ0M7QUFHekI7SUFEQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7OzhDQUNQO0FBR2pCO0lBREMsS0FBSyxDQUFDLGlCQUFpQixDQUFDOzsrQ0FDVjtBQUdmO0lBREMsS0FBSyxDQUFDLGVBQWUsQ0FBQzs7NkNBQ2Y7QUFHUjtJQURDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQzs7K0NBQ0o7QUFHckI7SUFEQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7OEJBQ2QsV0FBVzs4Q0FBTTtBQXZCaEIsWUFBWTtJQUh4QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtLQUNyQixDQUFDO3FDQXVDbUIsV0FBVztRQUNiLGdCQUFnQjtRQUNkLGVBQWU7R0F4Q3ZCLFlBQVksQ0FvSnhCO1NBcEpZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgSW5wdXQsXHJcbiAgSXRlcmFibGVDaGFuZ2VSZWNvcmQsXHJcbiAgSXRlcmFibGVDaGFuZ2VzLFxyXG4gIEl0ZXJhYmxlRGlmZmVyLFxyXG4gIEl0ZXJhYmxlRGlmZmVycyxcclxuICBPbkNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVHJhY2tCeUZ1bmN0aW9uLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBjb21wYXJlIGZyb20gJ2p1c3QtY29tcGFyZSc7XHJcbmltcG9ydCBjbG9uZSBmcm9tICdqdXN0LWNsb25lJztcclxuXHJcbmV4cG9ydCB0eXBlIENvbXBhcmVGbjxUID0gYW55PiA9ICh2YWx1ZTogVCwgY29tcGFyaXNvbjogVCkgPT4gYm9vbGVhbjtcclxuXHJcbmNsYXNzIEFicEZvckNvbnRleHQge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyAkaW1wbGljaXQ6IGFueSwgcHVibGljIGluZGV4OiBudW1iZXIsIHB1YmxpYyBjb3VudDogbnVtYmVyLCBwdWJsaWMgbGlzdDogYW55W10pIHt9XHJcbn1cclxuXHJcbmNsYXNzIFJlY29yZFZpZXcge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWNvcmQ6IEl0ZXJhYmxlQ2hhbmdlUmVjb3JkPGFueT4sIHB1YmxpYyB2aWV3OiBFbWJlZGRlZFZpZXdSZWY8QWJwRm9yQ29udGV4dD4pIHt9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FicEZvcl0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoJ2FicEZvck9mJylcclxuICBpdGVtczogYW55W107XHJcblxyXG4gIEBJbnB1dCgnYWJwRm9yT3JkZXJCeScpXHJcbiAgb3JkZXJCeTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoJ2FicEZvck9yZGVyRGlyJylcclxuICBvcmRlckRpcjogJ0FTQycgfCAnREVTQyc7XHJcblxyXG4gIEBJbnB1dCgnYWJwRm9yRmlsdGVyQnknKVxyXG4gIGZpbHRlckJ5OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgnYWJwRm9yRmlsdGVyVmFsJylcclxuICBmaWx0ZXJWYWw6IGFueTtcclxuXHJcbiAgQElucHV0KCdhYnBGb3JUcmFja0J5JylcclxuICB0cmFja0J5O1xyXG5cclxuICBASW5wdXQoJ2FicEZvckNvbXBhcmVCeScpXHJcbiAgY29tcGFyZUJ5OiBDb21wYXJlRm47XHJcblxyXG4gIEBJbnB1dCgnYWJwRm9yRW1wdHlSZWYnKVxyXG4gIGVtcHR5UmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBwcml2YXRlIGRpZmZlcjogSXRlcmFibGVEaWZmZXI8YW55PjtcclxuXHJcbiAgcHJpdmF0ZSBpc1Nob3dFbXB0eVJlZjogYm9vbGVhbjtcclxuXHJcbiAgZ2V0IGNvbXBhcmVGbigpOiBDb21wYXJlRm4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZUJ5IHx8IGNvbXBhcmU7XHJcbiAgfVxyXG5cclxuICBnZXQgdHJhY2tCeUZuKCk6IFRyYWNrQnlGdW5jdGlvbjxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnRyYWNrQnkgfHwgKChpbmRleDogbnVtYmVyLCBpdGVtOiBhbnkpID0+IChpdGVtIGFzIGFueSkuaWQgfHwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHRlbXBSZWY6IFRlbXBsYXRlUmVmPEFicEZvckNvbnRleHQ+LFxyXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgZGlmZmVyczogSXRlcmFibGVEaWZmZXJzLFxyXG4gICkge31cclxuXHJcbiAgcHJpdmF0ZSBpdGVyYXRlT3ZlckFwcGxpZWRPcGVyYXRpb25zKGNoYW5nZXM6IEl0ZXJhYmxlQ2hhbmdlczxhbnk+KSB7XHJcbiAgICBjb25zdCBydzogUmVjb3JkVmlld1tdID0gW107XHJcblxyXG4gICAgY2hhbmdlcy5mb3JFYWNoT3BlcmF0aW9uKChyZWNvcmQ6IEl0ZXJhYmxlQ2hhbmdlUmVjb3JkPGFueT4sIHByZXZpb3VzSW5kZXg6IG51bWJlciwgY3VycmVudEluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgaWYgKHJlY29yZC5wcmV2aW91c0luZGV4ID09IG51bGwpIHtcclxuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy52Y1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcoXHJcbiAgICAgICAgICB0aGlzLnRlbXBSZWYsXHJcbiAgICAgICAgICBuZXcgQWJwRm9yQ29udGV4dChudWxsLCAtMSwgLTEsIHRoaXMuaXRlbXMpLFxyXG4gICAgICAgICAgY3VycmVudEluZGV4LFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJ3LnB1c2gobmV3IFJlY29yZFZpZXcocmVjb3JkLCB2aWV3KSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudEluZGV4ID09IG51bGwpIHtcclxuICAgICAgICB0aGlzLnZjUmVmLnJlbW92ZShwcmV2aW91c0luZGV4KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy52Y1JlZi5nZXQocHJldmlvdXNJbmRleCk7XHJcbiAgICAgICAgdGhpcy52Y1JlZi5tb3ZlKHZpZXcsIGN1cnJlbnRJbmRleCk7XHJcblxyXG4gICAgICAgIHJ3LnB1c2gobmV3IFJlY29yZFZpZXcocmVjb3JkLCB2aWV3IGFzIEVtYmVkZGVkVmlld1JlZjxBYnBGb3JDb250ZXh0PikpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHJ3Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICByd1tpXS52aWV3LmNvbnRleHQuJGltcGxpY2l0ID0gcndbaV0ucmVjb3JkLml0ZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGl0ZXJhdGVPdmVyQXR0YWNoZWRWaWV3cyhjaGFuZ2VzOiBJdGVyYWJsZUNoYW5nZXM8YW55Pikge1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnZjUmVmLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICBjb25zdCB2aWV3UmVmID0gdGhpcy52Y1JlZi5nZXQoaSkgYXMgRW1iZWRkZWRWaWV3UmVmPEFicEZvckNvbnRleHQ+O1xyXG4gICAgICB2aWV3UmVmLmNvbnRleHQuaW5kZXggPSBpO1xyXG4gICAgICB2aWV3UmVmLmNvbnRleHQuY291bnQgPSBsO1xyXG4gICAgICB2aWV3UmVmLmNvbnRleHQubGlzdCA9IHRoaXMuaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlcy5mb3JFYWNoSWRlbnRpdHlDaGFuZ2UoKHJlY29yZDogSXRlcmFibGVDaGFuZ2VSZWNvcmQ8YW55PikgPT4ge1xyXG4gICAgICBjb25zdCB2aWV3UmVmID0gdGhpcy52Y1JlZi5nZXQocmVjb3JkLmN1cnJlbnRJbmRleCkgYXMgRW1iZWRkZWRWaWV3UmVmPEFicEZvckNvbnRleHQ+O1xyXG4gICAgICB2aWV3UmVmLmNvbnRleHQuJGltcGxpY2l0ID0gcmVjb3JkLml0ZW07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJvamVjdEl0ZW1zKGl0ZW1zOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKCFpdGVtcy5sZW5ndGggJiYgdGhpcy5lbXB0eVJlZikge1xyXG4gICAgICB0aGlzLnZjUmVmLmNsZWFyKCk7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW51c2VkLWV4cHJlc3Npb25cclxuICAgICAgdGhpcy52Y1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5lbXB0eVJlZikucm9vdE5vZGVzO1xyXG4gICAgICB0aGlzLmlzU2hvd0VtcHR5UmVmID0gdHJ1ZTtcclxuICAgICAgdGhpcy5kaWZmZXIgPSBudWxsO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmVtcHR5UmVmICYmIHRoaXMuaXNTaG93RW1wdHlSZWYpIHtcclxuICAgICAgdGhpcy52Y1JlZi5jbGVhcigpO1xyXG4gICAgICB0aGlzLmlzU2hvd0VtcHR5UmVmID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmRpZmZlciAmJiBpdGVtcykge1xyXG4gICAgICB0aGlzLmRpZmZlciA9IHRoaXMuZGlmZmVycy5maW5kKGl0ZW1zKS5jcmVhdGUodGhpcy50cmFja0J5Rm4pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRpZmZlcikge1xyXG4gICAgICBjb25zdCBjaGFuZ2VzID0gdGhpcy5kaWZmZXIuZGlmZihpdGVtcyk7XHJcblxyXG4gICAgICBpZiAoY2hhbmdlcykge1xyXG4gICAgICAgIHRoaXMuaXRlcmF0ZU92ZXJBcHBsaWVkT3BlcmF0aW9ucyhjaGFuZ2VzKTtcclxuICAgICAgICB0aGlzLml0ZXJhdGVPdmVyQXR0YWNoZWRWaWV3cyhjaGFuZ2VzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzb3J0SXRlbXMoaXRlbXM6IGFueVtdKSB7XHJcbiAgICBpZiAodGhpcy5vcmRlckJ5KSB7XHJcbiAgICAgIGl0ZW1zLnNvcnQoKGEsIGIpID0+IChhW3RoaXMub3JkZXJCeV0gPiBiW3RoaXMub3JkZXJCeV0gPyAxIDogYVt0aGlzLm9yZGVyQnldIDwgYlt0aGlzLm9yZGVyQnldID8gLTEgOiAwKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpdGVtcy5zb3J0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGxldCBpdGVtcyA9IGNsb25lKHRoaXMuaXRlbXMpIGFzIGFueVtdO1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGNvbXBhcmVGbiA9IHRoaXMuY29tcGFyZUZuO1xyXG5cclxuICAgIGlmICh0eXBlb2YgdGhpcy5maWx0ZXJCeSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRoaXMuZmlsdGVyVmFsICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLmZpbHRlclZhbCAhPT0gJycpIHtcclxuICAgICAgaXRlbXMgPSBpdGVtcy5maWx0ZXIoaXRlbSA9PiBjb21wYXJlRm4oaXRlbVt0aGlzLmZpbHRlckJ5XSwgdGhpcy5maWx0ZXJWYWwpKTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKHRoaXMub3JkZXJEaXIpIHtcclxuICAgICAgY2FzZSAnQVNDJzpcclxuICAgICAgICB0aGlzLnNvcnRJdGVtcyhpdGVtcyk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0SXRlbXMoaXRlbXMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnREVTQyc6XHJcbiAgICAgICAgdGhpcy5zb3J0SXRlbXMoaXRlbXMpO1xyXG4gICAgICAgIGl0ZW1zLnJldmVyc2UoKTtcclxuICAgICAgICB0aGlzLnByb2plY3RJdGVtcyhpdGVtcyk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRoaXMucHJvamVjdEl0ZW1zKGl0ZW1zKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19