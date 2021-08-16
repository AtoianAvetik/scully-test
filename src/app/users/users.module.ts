import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserComponent } from './user.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [
        UsersComponent,
        UserComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        MatButtonModule
    ]
})
export class UsersModule {
}
