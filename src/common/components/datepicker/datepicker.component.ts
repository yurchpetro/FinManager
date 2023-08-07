import { ChangeDetectionStrategy, Component, DestroyRef, forwardRef, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {
    FormBuilder,
    FormControl,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    ReactiveFormsModule,
    ValidationErrors,
} from '@angular/forms';
import { distinctUntilChanged, filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DatePipe, NgIf } from '@angular/common';
import { DatetimeChangeEventDetail as IIonDatetimeDatetimeChangeEventDetail } from '@ionic/core';
import { ISO2Number } from '@common/utils';

@Component({
    selector: 'app-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [IonicModule, ReactiveFormsModule, NgIf, DatePipe],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DatepickerComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: DatepickerComponent,
            multi: true,
        },
    ],
})
export class DatepickerComponent implements OnInit {
    @Input() public label: string;
    @Input() public selectedDate: number;
    @Input() public dateFormat: string = 'dd.MM.yyyy';
    @Input() public hourCycle: string = 'h24';

    public control: FormControl<number>;
    public isDatePickerShown: boolean = false;

    private onChange: (value: number) => void;
    private onTouched: () => void;

    constructor(
        private readonly destroyRef: DestroyRef,
        private readonly fb: FormBuilder
    ) {}

    public ngOnInit(): void {
        this.control = this.fb.nonNullable.control(this.selectedDate);

        this.control.valueChanges
            .pipe(
                filter(() => !!this.onChange),
                distinctUntilChanged(),
                takeUntilDestroyed(this.destroyRef)
            )
            .subscribe((newValue: number) => this.onChange(newValue));
    }

    public setDate(value: Event): void {
        this.selectedDate = ISO2Number(
            (value as CustomEvent<IIonDatetimeDatetimeChangeEventDetail>).detail.value as string
        );

        this.control.setValue(this.selectedDate);
        this.onClose();
    }

    public onShowDatePicker(): void {
        this.isDatePickerShown = true;
    }

    public onClose(): void {
        this.isDatePickerShown = false;
    }

    // ––––––––––––– Value Accessor –––––––––––––––
    public writeValue(value: number): void {
        if (value) {
            this.control.patchValue(value);
        } else {
            this.control.reset();
        }
    }

    public registerOnChange(fn: (value: number) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    public validate(): ValidationErrors | null {
        return this.control.valid ? null : { formInvalid: true };
    }
}
