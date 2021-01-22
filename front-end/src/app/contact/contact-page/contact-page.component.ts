import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');

  // if (emailControl.pristine || confirmControl.pristine) {
  //   return null;
  // }

  // if (emailControl.value === confirmControl.value) {
  //   return null;
  // }
  return { match: true };
}

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  public isActive: boolean;
  public emailForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.isActive = true;
    this.emailForm = this.formBuilder.group({
      emailGroup: this.formBuilder.group(
        {
          email: ['', [Validators.required, Validators.email]],
          confirmEmail: ['', Validators.required],
        },
        { validator: emailMatcher }
      ),
    });
  }

  public onCancel(): void {
    this.isActive = false;
  }

  public onSumbit(): void {
    this.isActive = false;
  }
}
