import { Injectable } from '@angular/core';

import { Project } from './shared';


@Injectable()
export class ProjectsService {

  private projects: [Project] = [
    new Project('coo2plan', 'http://placehold.it/550x450', 'http://placehold.it/1200x800?text=+',
      'http://placehold.it/800x450', 'http://placehold.it/800x450', 'http://placehold.it/800x450'),
    new Project('sos', 'http://placehold.it/550x450', 'http://placehold.it/1200x800?text=+',
      'http://placehold.it/800x450', 'http://placehold.it/800x450', 'http://placehold.it/800x450'),
    new Project('coo2plan', 'http://placehold.it/550x450', 'http://placehold.it/1200x800?text=+',
      'http://placehold.it/800x450', 'http://placehold.it/800x450', 'http://placehold.it/800x450')
  ]

  constructor() { }

  public getProjects(): [Project] {
    return this.projects;
  }

  public getProject(prefix: string): Promise<Project> {
    return new Promise((resolve, reject) => {
      let project = this.projects.find(p => p.prefix === prefix);
      if (project)
        resolve(project);
      else
        reject(`Unable to find desired project: ${prefix}`);
    })
  }

}
