import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../shared';
import { BackendService } from '../backend.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public project: Project;
  public signupFormData: { model: string, text: string, class: string };

  constructor(private route: ActivatedRoute,
              private backendService: BackendService) {
    this.resetSignupForm();
  }

  ngOnInit() {
    this.route.data.subscribe((data: { project: Project }) => {
      this.project = data.project;
    });
  }

  private resetSignupForm() {
    this.signupFormData = {
      model: '',
      text: 'projects.signup.btn.signup',
      class: 'btn-outline-coom-primary'
    };
  }

  signupToProject() {
    const delay = 3000;
    this.signupFormData.text = 'projects.signup.btn.signing';
    this.backendService.signup(this.signupFormData.model, this.project).subscribe(() => {
      this.signupFormData.text = 'projects.signup.btn.signed';
      this.signupFormData.class = 'btn-outline-coom-success';
      window.setTimeout(() => { this.resetSignupForm() }, delay);
    }, error => {
      this.signupFormData.text = 'projects.signup.btn.failed';
      this.signupFormData.class = 'btn-outline-coom-danger';
      window.setTimeout(() => { this.resetSignupForm() }, delay);
    });
  }

}
