import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../shared';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  private project: Project;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { project: Project }) => {
      this.project = data.project;
    });
  }

}
