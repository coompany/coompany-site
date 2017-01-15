import { Component } from '@angular/core';

import { Project, Client } from '../shared';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private projects: [Project] = [
    new Project('coo2plan', 'http://placehold.it/550x450'),
    new Project('sos', 'http://placehold.it/550x450'),
    new Project('coo2plan', 'http://placehold.it/550x450')
  ]

  private clients: [Client] = [
    { name: 'Client', img: 'http://placehold.it/350x300', href: '#' },
    { name: 'Client', img: 'http://placehold.it/350x300', href: '#' },
    { name: 'Client', img: 'http://placehold.it/350x300', href: '#' },
    { name: 'Client', img: 'http://placehold.it/350x300', href: '#' },
    { name: 'Client', img: 'http://placehold.it/350x300', href: '#' },
    { name: 'Client', img: 'http://placehold.it/350x300', href: '#' },
    { name: 'Client', img: 'http://placehold.it/350x300', href: '#' },
    { name: 'Client', img: 'http://placehold.it/350x300', href: '#' },
    { name: 'Client', img: 'http://placehold.it/350x300', href: '#' }
  ]

}
