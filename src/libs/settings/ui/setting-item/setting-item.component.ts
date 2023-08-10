import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    EventEmitter,
    forwardRef,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { SETTING_ITEM_ENUM, SettingItemType } from '@libs/settings/utils';
import { FormBuilder, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { SelectModel } from '@common/models';
import { distinctUntilChanged, filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-setting-item',
    templateUrl: './setting-item.component.html',
    styleUrls: ['./setting-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SettingItemComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: SettingItemComponent,
            multi: true,
        },
    ],
})
export class SettingItemComponent implements OnInit {
    @Input() public actionType: SettingItemType;
    @Input() public title: string;
    @Input() public selectOption: SelectModel[];
    @Input() public selectDefault: SelectModel;
    @Input() public toggleChacked: boolean;

    @Output() public submitData: EventEmitter<string> = new EventEmitter<string>();

    public readonly SETTING_ITEM_ENUM: typeof SETTING_ITEM_ENUM = SETTING_ITEM_ENUM;

    public control: FormControl<string>;
    private onChange: (value: string) => void;
    private onTouched: () => void;

    constructor(
        private readonly destroyRef: DestroyRef,
        private readonly fb: FormBuilder
    ) {}

    public ngOnInit(): void {
        this.control = this.fb.nonNullable.control(this.selectDefault.value);

        this.control.valueChanges
            .pipe(
                filter(() => !!this.onChange),
                distinctUntilChanged(),
                takeUntilDestroyed(this.destroyRef)
            )
            .subscribe((newValue: string) => this.onChange(newValue));
    }

    public onSelect(event: Event): void {
        const value: string = (event as CustomEvent).detail.value;
        this.control.setValue(value);
        this.submitData.emit(value);
    }

    // ––––––––––––– Value Accessor –––––––––––––––

    public writeValue(value: string): void {
        if (value) {
            this.control.patchValue(value);
        } else {
            this.control.reset();
        }
    }

    public registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    public validate(): ValidationErrors | null {
        return this.control.valid ? null : { formInvalid: true };
    }
}
