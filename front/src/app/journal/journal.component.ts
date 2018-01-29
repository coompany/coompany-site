import { Component, OnInit } from '@angular/core';

import { JournalService } from './journal.service';
import { Post } from './post';


@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {

  public posts: Promise<[Post]>

  constructor(private journalService: JournalService) { }

  ngOnInit() {
    this.posts = this.journalService.getPosts();
  }

}
