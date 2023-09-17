import {Component} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: { name: string, id: number }[] = [
    {
      name: 'ali',
      id: 1
    },
    {
      name: 'ali2',
      id: 2
    }
  ]
}
