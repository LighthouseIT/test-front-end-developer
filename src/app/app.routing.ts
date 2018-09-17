import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'ciclovendas', component: SobreComponent },
    { path: 'marketing', component: SobreComponent },
    { path: 'calendario', component: SobreComponent },
    { path: 'atividades', component: SobreComponent },
    { path: 'tarefa', component: SobreComponent },
    { path: 'email', component: SobreComponent },
    { path: 'contato', component: SobreComponent },
    { path: 'lead', component: SobreComponent },
    { path: 'questao', component: SobreComponent },
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);
