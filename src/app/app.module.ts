import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpLink } from 'apollo-angular/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';

import { AppComponent } from './app.component';
import { GraphqlComponent } from './components/graphql/graphql.component';
import { OpenapiComponent } from './components/openapi/openapi.component';
import { InMemoryCache } from '@apollo/client/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from './openapi/generated/api.module';

@NgModule({
  declarations: [
    AppComponent,
    GraphqlComponent,
    OpenapiComponent
  ],
  imports: [
    BrowserModule,
    ApolloModule,
    HttpClientModule,
    ApiModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache({
            addTypename: false
          }),
          link: httpLink.create({
            uri: 'https://countries.trevorblades.com',
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
