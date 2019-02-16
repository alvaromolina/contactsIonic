import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'contacts',
        children: [
          {
            path: '',
            loadChildren: '../contacts/contacts.module#ContactsPageModule'
          },
          {
            path: 'chat',
            loadChildren: '../chat/chat.module#ChatPageModule'
          },
          {
            path: 'profile',
            loadChildren: '../profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            loadChildren: '../status/status.module#StatusPageModule'
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: '../settings/settings.module#SettingsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/contacts',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/contacts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
