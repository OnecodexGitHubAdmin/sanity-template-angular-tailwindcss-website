import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ActionReducerMap, MetaReducer, StoreModule } from '@ngrx/store';
import { ReactiveComponentModule } from '@ngrx/component';

import { AppComponent } from './app.component';
import { ComponentTemplateComponent } from './components/component-template/component-template.component';
import { ComponentHostDirective } from './directives/component-host.directive';
import { ContentComponent } from './components/content/content.component';
import { AppRoutingModule } from './app-routing.module';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { NotFoundComponent } from './components/elements/not-found/not-found.component';
import { BannerComponent } from './components/elements/banner/banner.component';
import { BlockComponent } from './components/elements/block/block.component';
import { FigureComponent } from './components/elements/figure/figure.component';
import { EmbedHtmlComponent } from './components/elements/embed-html/embed-html.component';
import { CustomerFeedbackComponent } from './components/elements/customer-feedback/customer-feedback.component';
import { BlogCardComponent } from './components/elements/blog-card/blog-card.component';
import { BlogCollectionComponent } from './components/elements/blog-collection/blog-collection.component';
import { BlogComponent } from './components/elements/blog/blog.component';
import { BadgeComponent } from './components/elements/badge/badge.component';
import { BlockChildComponent } from './components/elements/block-child/block-child.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { ButtonComponent } from './components/elements/button/button.component';
import { ProductCollectionComponent } from './components/elements/product-collection/product-collection.component';
import { ProductComponent } from './components/elements/product/product.component';
import { ProductCardComponent } from './components/elements/product-card/product-card.component';
import { shoppingCartReducer } from './store/reducers/shopping-cart.reducer';
import { ContactCardComponent } from './components/elements/contact-card/contact-card.component';
import { CardComponent } from './components/elements/card/card.component';
import { ShoppingCartComponent } from './components/elements/shopping-cart/shopping-cart.component';
import { storageShoppingCartMetaReducer } from './store/reducers/storage-shopping-cart-metareducer';
import { ShoppingCartStore } from './models/store/shopping-cart-store';
import { PortableTextComponent } from './components/elements/portable-text/portable-text.component';

export const reducers: ActionReducerMap<ShoppingCartStore> = {
  shoppingCart: shoppingCartReducer
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const metaReducers: MetaReducer<any>[] = [storageShoppingCartMetaReducer];

@NgModule({
  declarations: [
    AppComponent,
    ComponentTemplateComponent,
    ComponentHostDirective,
    ContentComponent,
    TopNavigationComponent,
    NotFoundComponent,
    BannerComponent,
    BlockComponent,
    FigureComponent,
    EmbedHtmlComponent,
    CustomerFeedbackComponent,
    BlogCardComponent,
    BlogCollectionComponent,
    BlogComponent,
    BadgeComponent,
    BlockChildComponent,
    SafeHtmlPipe,
    ButtonComponent,
    ProductCollectionComponent,
    ProductComponent,
    ProductCardComponent,
    ContactCardComponent,
    CardComponent,
    ShoppingCartComponent,
    PortableTextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScullyLibModule,
    FlexLayoutModule,
    ReactiveComponentModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}