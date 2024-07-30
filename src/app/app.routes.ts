import { Routes } from '@angular/router';
import { ContactsComponent } from './main-page/contacts/contacts.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'contacts', component: ContactsComponent},
];
