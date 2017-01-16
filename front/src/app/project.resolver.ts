import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { ProjectsService } from './projects.service';
import { Project } from './shared';


@Injectable()
export class ProjectResolver implements Resolve<Project> {

  constructor(private projectsService: ProjectsService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Promise<Project> {
    return this.projectsService.getProject(route.params['name']).catch(err => {
      console.debug(err);
      this.router.navigate(['home']);
    });
  }

}
