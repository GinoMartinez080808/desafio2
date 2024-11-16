import { Routes } from '@angular/router';
import { DescriptionComponent } from './components/description/description.component';
import { CardsComponent } from './cards/cards.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
    {
        path: "",
        component: CardsComponent
    },
    {
        path: 'description/:id',
       component: DescriptionComponent   
    },
    {
        path: "header",
        component: HeaderComponent
    }
];
