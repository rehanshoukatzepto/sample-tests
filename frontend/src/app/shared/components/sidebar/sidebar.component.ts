import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  // side bar links - pages
  links = [
    {
      url: '/',
      label: 'Dashboard',
    },
    {
      url: '/add',
      label: 'Add Test',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
