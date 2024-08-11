import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Like',
        icon: 'pi pi-heart'
      },
      {
        label: 'Your Profile',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Edit Your Profile',
            icon: 'pi pi-user-edit'
          },
          {
            label: 'My Donations',
            icon: 'pi pi-arrow-right'
          },
          {
            label: 'Log Out',
            icon: 'pi pi-sign-out'
          }
        ]
      },
      {
        label: 'Sign In',
        icon: 'pi pi-sign-in',
      },
    ]
  }

 }