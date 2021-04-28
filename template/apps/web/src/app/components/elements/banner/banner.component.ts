import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DynamicComponent } from '../../../models/dynamic-component';
import { Banner } from '../../../models/types/banner';
import { Cta } from '../../../models/types/cta';
import { Route } from '../../../models/types/route';
import { SanityService } from '../../../services/sanity.service';

@Component({
  selector: 'template-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements DynamicComponent {
  imageUrl: string;
  banner: Banner;
  $routeObservable: Observable<Route[]>;

  @Input() set data(banner: Banner) {
    if (banner.image.asset) {
      this.imageUrl = this.service.buildImageUrl(banner.image.asset._ref);
    }

    this.banner = banner;

    if (this.banner.ctas.length) {
      const refs = banner.ctas.filter((cta: Cta) => !!cta.route).map((cta: Cta) => cta.route._ref);
      this.$routeObservable = this.service.fetchRoutes(refs).pipe(
        map((routes: Route[]) => {
          routes.forEach((route: Route) => {
            this.banner.ctas.forEach((cta: Cta) => {
              if (cta.route?._ref == route._id) {
                if (!route.slug.current.startsWith('/')) {
                  route.slug.current = `/${route.slug.current}`;
                }
                cta.link = route.slug.current;
              }
            });
          });
          return routes;
        })
      );
    }

  };

  constructor(private service: SanityService) {}
}
