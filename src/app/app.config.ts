import {InjectionToken} from '@angular/core';
import {environment} from '../environments/environment';

export const APP_PARAMS = {
  baseApi: 'heroku.com',
  title: 'app config injection'
};

export const BaseAPI = new InjectionToken<string>('base-api');
export const BaseAPIToken = { provide: BaseAPI, useValue: APP_PARAMS };

export const SampleName = new InjectionToken<string>('sample-name');
export const SampleNameToken = { provide: SampleName, useValue: environment.sampleName };