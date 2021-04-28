import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    data: {}
  },
  {
    path: ':fragment1',
    component: ContentComponent,
    data: {}
  },
  {
    path: ':fragment1/:fragment2',
    component: ContentComponent,
    data: {}
    //runGuardsAndResolvers: 'always',
  },
  {
    path: ':fragment1/:fragment2/**',
    component: ContentComponent,
    data: {}
  },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
