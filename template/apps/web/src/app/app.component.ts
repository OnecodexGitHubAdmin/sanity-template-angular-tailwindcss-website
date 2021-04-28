import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { SiteConfig } from './models/types/site-config';
import { SanityService } from './services/sanity.service';

@Component({
  selector: 'template-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  $contentObservable: Observable<SiteConfig>;
  backgroundImage: string;
  image: string;
  currentDate = new Date();

  constructor(service: SanityService, titleService: Title, router: Router) {
    this.$contentObservable = service.fetchSiteConfig().pipe(
      tap((config: SiteConfig) => {
        titleService.setTitle(config.title);
        document.documentElement.style.setProperty(
          '--primary',
          config.primaryColor
        );
        document.documentElement.style.setProperty(
          '--accent',
          config.accentColor
        );
      })
    );

    router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      switchMap(() => {
        let path = window.location.pathname;
        path = path.length > 1 ? path.substr(1) : path;
        return service.fetchPageBackgroundImage(path)
      })
    ).subscribe((url: string) => {
      this.backgroundImage = url;
    });
  }
}
