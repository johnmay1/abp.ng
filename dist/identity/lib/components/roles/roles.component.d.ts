import { ListService } from '@abp/ng.core';
import { ePermissionManagementComponents } from '@abp/ng.permission-management';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Identity } from '../../models/identity';
export declare class RolesComponent implements OnInit {
    readonly list: ListService;
    private confirmationService;
    private fb;
    private store;
    data$: Observable<Identity.RoleItem[]>;
    totalCount$: Observable<number>;
    form: FormGroup;
    selected: Identity.RoleItem;
    isModalVisible: boolean;
    visiblePermissions: boolean;
    providerKey: string;
    modalBusy: boolean;
    permissionManagementKey: ePermissionManagementComponents;
    formRef: ElementRef<HTMLFormElement>;
    onVisiblePermissionChange: (event: any) => void;
    constructor(list: ListService, confirmationService: ConfirmationService, fb: FormBuilder, store: Store);
    ngOnInit(): void;
    buildForm(): void;
    openModal(): void;
    add(): void;
    edit(id: string): void;
    save(): void;
    delete(id: string, name: string): void;
    private hookToQuery;
    onClickSaveButton(): void;
    openPermissionsModal(providerKey: string): void;
    sort(data: any): void;
}
