import { ToasterService } from '@abp/ng.theme.shared';
import { TemplateRef } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AccountService } from '@abp/ng.account';
import { TenantBoxComponent as AbpTenantBoxComponent, Account } from '@abp/ng.account';
import * as i0 from "@angular/core";
export declare class TenantBoxComponent extends AbpTenantBoxComponent implements Account.TenantBoxComponentInputs, Account.TenantBoxComponentOutputs {
    private _store;
    private _toasterService;
    private _accountService;
    mainContentRef: TemplateRef<any>;
    isMultiTenancyEnabled$: Observable<boolean>;
    constructor(_store: Store, _toasterService: ToasterService, _accountService: AccountService);
    static ɵfac: i0.ɵɵFactoryDef<TenantBoxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TenantBoxComponent, "ng-alain-tenant-box", never, { "mainContentRef": "mainContentRef"; }, {}, never, ["*"]>;
}
