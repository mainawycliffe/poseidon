import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { COLLECTION_SCHEMA_TYPE } from '@poseidon/schemas';

const collectionsSchemas: COLLECTION_SCHEMA_TYPE[] = [];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    // Provide the collection schemas to the app
    { provide: 'COLLECTION_SCHEMAS', useValue: collectionsSchemas },
    // Provide Firebase config to the app
  ],
};
