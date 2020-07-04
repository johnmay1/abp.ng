import { __decorate, __metadata, __param } from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject, of, ReplaySubject } from 'rxjs';
import { catchError, debounceTime, filter, shareReplay, switchMap, tap } from 'rxjs/operators';
import { LIST_QUERY_DEBOUNCE_TIME } from '../tokens/list.token';
import { takeUntilDestroy } from '../utils/rxjs-utils';
let ListService = class ListService {
    constructor(delay) {
        this.delay = delay;
        this._filter = '';
        this._maxResultCount = 10;
        this._page = 0;
        this._sortKey = '';
        this._sortOrder = '';
        this._query$ = new ReplaySubject(1);
        this._isLoading$ = new BehaviorSubject(false);
        this.get = () => {
            this._query$.next({
                filter: this._filter || undefined,
                maxResultCount: this._maxResultCount,
                skipCount: this._page * this._maxResultCount,
                sorting: this._sortOrder ? `${this._sortKey} ${this._sortOrder}` : undefined,
            });
        };
        this.get();
    }
    set filter(value) {
        this._filter = value;
        this.get();
    }
    get filter() {
        return this._filter;
    }
    set maxResultCount(value) {
        this._maxResultCount = value;
        this.get();
    }
    get maxResultCount() {
        return this._maxResultCount;
    }
    set page(value) {
        if (value === this._page)
            return;
        this._page = value;
        this.get();
    }
    get page() {
        return this._page;
    }
    set sortKey(value) {
        this._sortKey = value;
        this.get();
    }
    get sortKey() {
        return this._sortKey;
    }
    set sortOrder(value) {
        this._sortOrder = value;
        this.get();
    }
    get sortOrder() {
        return this._sortOrder;
    }
    get query$() {
        return this._query$
            .asObservable()
            .pipe(debounceTime(this.delay || 300), shareReplay({ bufferSize: 1, refCount: true }));
    }
    get isLoading$() {
        return this._isLoading$.asObservable();
    }
    hookToQuery(streamCreatorCallback) {
        this._isLoading$.next(true);
        return this.query$.pipe(switchMap(query => streamCreatorCallback(query).pipe(catchError(() => of(null)))), filter(Boolean), tap(() => this._isLoading$.next(false)), shareReplay({ bufferSize: 1, refCount: true }), takeUntilDestroy(this));
    }
    ngOnDestroy() { }
};
ListService = __decorate([
    Injectable(),
    __param(0, Optional()), __param(0, Inject(LIST_QUERY_DEBOUNCE_TIME)),
    __metadata("design:paramtypes", [Number])
], ListService);
export { ListService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL3NlcnZpY2VzL2xpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQWEsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQWMsRUFBRSxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUcvRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUd2RCxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0lBdUV0QixZQUFrRSxLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQXRFdkUsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQVNiLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBU3JCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFXVixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBU2QsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQVNoQixZQUFPLEdBQUcsSUFBSSxhQUFhLENBQWtCLENBQUMsQ0FBQyxDQUFDO1FBUWhELGdCQUFXLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFNakQsUUFBRyxHQUFHLEdBQUcsRUFBRTtZQUNULElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFFO2dCQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sSUFBSSxTQUFTO2dCQUNqQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGVBQWU7Z0JBQ3BDLFNB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LEtBQUksQ0FBQztDQUNqQixDQUFBO0FBMUZZLFdBQVc7SUFEdkIsVUFBVSxFQUFFO0lBd0VFLFdBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBOztHQXZFOUMsV0FBVyxDQTBGdkI7U0ExRlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT25EZXN0cm95LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGRlYm91bmNlVGltZSwgZmlsdGVyLCBzaGFyZVJlcGxheSwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEFCUCB9IGZyb20gJy4uL21vZGVscy9jb21tb24nO1xyXG5pbXBvcnQgeyBQYWdlZFJlc3VsdER0byB9IGZyb20gJy4uL21vZGVscy9kdG9zJztcclxuaW1wb3J0IHsgTElTVF9RVUVSWV9ERUJPVU5DRV9USU1FIH0gZnJvbSAnLi4vdG9rZW5zL2xpc3QudG9rZW4nO1xyXG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95IH0gZnJvbSAnLi4vdXRpbHMvcnhqcy11dGlscyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMaXN0U2VydmljZTxRdWVyeVBhcmFtc1R5cGUgPSBBQlAuUGFnZVF1ZXJ5UGFyYW1zPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBfZmlsdGVyID0gJyc7XHJcbiAgc2V0IGZpbHRlcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9maWx0ZXIgPSB2YWx1ZTtcclxuICAgIHRoaXMuZ2V0KCk7XHJcbiAgfVxyXG4gIGdldCBmaWx0ZXIoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9maWx0ZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9tYXhSZXN1bHRDb3VudCA9IDEwO1xyXG4gIHNldCBtYXhSZXN1bHRDb3VudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9tYXhSZXN1bHRDb3VudCA9IHZhbHVlO1xyXG4gICAgdGhpcy5nZXQoKTtcclxuICB9XHJcbiAgZ2V0IG1heFJlc3VsdENvdW50KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWF4UmVzdWx0Q291bnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9wYWdlID0gMDtcclxuICBzZXQgcGFnZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IHRoaXMuX3BhZ2UpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLl9wYWdlID0gdmFsdWU7XHJcbiAgICB0aGlzLmdldCgpO1xyXG4gIH1cclxuICBnZXQgcGFnZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zb3J0S2V5ID0gJyc7XHJcbiAgc2V0IHNvcnRLZXkodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fc29ydEtleSA9IHZhbHVlO1xyXG4gICAgdGhpcy5nZXQoKTtcclxuICB9XHJcbiAgZ2V0IHNvcnRLZXkoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zb3J0S2V5O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc29ydE9yZGVyID0gJyc7XHJcbiAgc2V0IHNvcnRPcmRlcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9zb3J0T3JkZXIgPSB2YWx1ZTtcclxuICAgIHRoaXMuZ2V0KCk7XHJcbiAgfVxyXG4gIGdldCBzb3J0T3JkZXIoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zb3J0T3JkZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9xdWVyeSQgPSBuZXcgUmVwbGF5U3ViamVjdDxRdWVyeVBhcmFtc1R5cGU+KDEpO1xyXG5cclxuICBnZXQgcXVlcnkkKCk6IE9ic2VydmFibGU8UXVlcnlQYXJhbXNUeXBlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcXVlcnkkXHJcbiAgICAgIC5hc09ic2VydmFibGUoKVxyXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUodGhpcy5kZWxheSB8fCAzMDApLCBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2lzTG9hZGluZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHJcbiAgZ2V0IGlzTG9hZGluZyQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNMb2FkaW5nJC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGdldCA9ICgpID0+IHtcclxuICAgIHRoaXMuX3F1ZXJ5JC5uZXh0KCh7XHJcbiAgICAgIGZpbHRlcjogdGhpcy5fZmlsdGVyIHx8IHVuZGVmaW5lZCxcclxuICAgICAgbWF4UmVzdWx0Q291bnQ6IHRoaXMuX21heFJlc3VsdENvdW50LFxyXG4gICAgICBza2lwQ291bnQ6IHRoaXMuX3BhZ2UgKiB0aGlzLl9tYXhSZXN1bHRDb3VudCxcclxuICAgICAgc29ydGluZzogdGhpcy5fc29ydE9yZGVyID8gYCR7dGhpcy5fc29ydEtleX0gJHt0aGlzLl9zb3J0T3JkZXJ9YCA6IHVuZGVmaW5lZCxcclxuICAgIH0gYXMgYW55KSBhcyBRdWVyeVBhcmFtc1R5cGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoTElTVF9RVUVSWV9ERUJPVU5DRV9USU1FKSBwcml2YXRlIGRlbGF5OiBudW1iZXIpIHtcclxuICAgIHRoaXMuZ2V0KCk7XHJcbiAgfVxyXG5cclxuICBob29rVG9RdWVyeTxUIGV4dGVuZHMgYW55PihcclxuICAgIHN0cmVhbUNyZWF0b3JDYWxsYmFjazogUXVlcnlTdHJlYW1DcmVhdG9yQ2FsbGJhY2s8VCwgUXVlcnlQYXJhbXNUeXBlPixcclxuICApOiBPYnNlcnZhYmxlPFBhZ2VkUmVzdWx0RHRvPFQ+PiB7XHJcbiAgICB0aGlzLl9pc0xvYWRpbmckLm5leHQodHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucXVlcnkkLnBpcGUoXHJcbiAgICAgIHN3aXRjaE1hcChxdWVyeSA9PiBzdHJlYW1DcmVhdG9yQ2FsbGJhY2socXVlcnkpLnBpcGUoY2F0Y2hFcnJvcigoKSA9PiBvZihudWxsKSkpKSxcclxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxyXG4gICAgICB0YXAoKCkgPT4gdGhpcy5faXNMb2FkaW5nJC5uZXh0KGZhbHNlKSksXHJcbiAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSksXHJcbiAgICAgIHRha2VVbnRpbERlc3Ryb3kodGhpcyksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBRdWVyeVN0cmVhbUNyZWF0b3JDYWxsYmFjazxULCBRdWVyeVBhcmFtc1R5cGUgPSBBQlAuUGFnZVF1ZXJ5UGFyYW1zPiA9IChcclxuICBxdWVyeTogUXVlcnlQYXJhbXNUeXBlLFxyXG4pID0+IE9ic2VydmFibGU8UGFnZWRSZXN1bHREdG88VD4+O1xyXG4iXX0=