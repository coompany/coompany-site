import { Component, Input } from '@angular/core';
import { Project } from '../../shared';


@Component({
  selector: 'app-home-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class HomeProjectComponent {

  @Input() project: Project

}
