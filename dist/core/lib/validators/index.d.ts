import { Validators } from '@angular/forms';
import { validateMinAge } from './age.validator';
import { validateCreditCard } from './credit-card.validator';
import { validateRange } from './range.validator';
import { validateRequired } from './required.validator';
import { validateStringLength } from './string-length.validator';
import { validateUrl } from './url.validator';
export * from './age.validator';
export * from './credit-card.validator';
export * from './range.validator';
export * from './required.validator';
export * from './string-length.validator';
export * from './url.validator';
export declare const AbpValidators: {
    creditCard: typeof validateCreditCard;
    emailAddress: () => typeof Validators.email;
    minAge: typeof validateMinAge;
    range: typeof validateRange;
    required: typeof validateRequired;
    stringLength: typeof validateStringLength;
    url: typeof validateUrl;
};
