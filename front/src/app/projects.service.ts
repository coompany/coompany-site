import { Injectable } from '@angular/core';

import { Project } from './shared';


@Injectable()
export class ProjectsService {

  private projects: [Project] = [
    new Project('coo2plan', [true, true, false]),
    new Project('sos'),
    new Project('pechakucha', [true, true, false])
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
