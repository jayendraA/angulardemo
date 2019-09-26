import { Component, OnInit, OnDestroy, Inject, Injector, ɵɵdirectiveInject, INJECTOR } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../directive/must-match.validator';
import { LoginService } from '../../service/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../dashboard/service/data.service';
import { Subscription, config } from 'rxjs';
import { ɵrenderComponent } from '@angular/core';
import { inject } from '@angular/core/testing';
import { IveComponent } from '../../../dashboard/components/ive/ive.component';
@HOC({
  path: '../../../dashboard/components/ive/ive.component',
  cmp: 'IveComponent', host: 'my-container'
})
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  userdata_obj: any = {};
  loginForm: FormGroup;
  message: string;
  releaseLoginData: Subscription;
  releasBehaviourSubject: Subscription;
  Is_submitted = false;
  constructor(
    private injector: Injector,
    private data: DataService,
    private myService: LoginService,
    private formBuilder: FormBuilder, private router: Router) { }

  ngOnDestroy() {
    if (this.releaseLoginData) {
      this.releaseLoginData.unsubscribe();
    }
    if (this.releasBehaviourSubject) {
      this.releasBehaviourSubject.unsubscribe();
    }
  }

  ngOnInit() {

    this.createForm()


  }
  get ValidateFields() { return this.loginForm.controls; }

  openFeature() {
    import('../../../dashboard/components/ive/ive.component').
      then(({ IveComponent }) => {
        ɵrenderComponent(IveComponent, { host: 'my-container', injector: this.injector });
      });
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.Is_submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    // this.data.changeMessage(this.userdata['email'])
    this.data.changeMessage("Hello from Sibling")

    this.releasBehaviourSubject = this.data.currentMessage.subscribe(message => this.message = message,
      err => {
        alert("somthing went wrong!!");
      },
      () => {
        alert('done');
      })



    this.releaseLoginData = this.myService.login(this.userdata_obj).subscribe(
      (res: any) => {
        if (res['token'] !== null) {
          sessionStorage.setItem('token', res.token);
          this.router.navigate(['dashboard']);
        }
      },
      err => {
        alert("somthing went wrong!!");
      },
      () => {
        alert('done');
      }


    );

  }
}
export function HOC(config: { path: string, cmp: string, host: string }) {
  return (cmpType) => {
    const originalFactory = cmpType.ngComponentDef.factory;
    cmpType.ngComponentDef.factory = (...args) => {
      const cmp = originalFactory(...args);
      console.log(cmp);

      const injector = ɵɵdirectiveInject(INJECTOR)
      import(`${config.path}`).then(res => {
        ɵrenderComponent(res[config.cmp], { host: config.host, injector })
      })
      return cmp;
    }
    return cmpType;
  }
}

