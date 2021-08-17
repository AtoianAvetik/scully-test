import { Component } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'scully-test';
    isAdminPage$: Observable<boolean> = this.router.events.pipe(
        filter((evt: any) => {
            return evt instanceof NavigationEnd;
        }),
        map((evt: NavigationEnd) => {
            return evt.url.includes('/admin');
        }),
    );

    constructor(public scully: ScullyRoutesService,
                private router: Router) {
    }
}
