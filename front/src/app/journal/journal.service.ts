import { Injectable } from '@angular/core';

import { Post } from './post';


@Injectable()
export class JournalService {

  constructor() { }

  public getPosts(): Promise<[Post]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          new Post('post1', new Date),
          new Post('post2', new Date)
        ]);
      }, 2000);
    });
  }

}
