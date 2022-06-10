import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'youtube',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab1/tab1.module').then( m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'twitter',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab2/tab2.module').then( m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'facebook',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab3/tab3.module').then( m => m.Tab3PageModule)
          }
        ]
      },{
        path: '',
        redirectTo: 'youtube',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
