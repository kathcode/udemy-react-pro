import { lazy, LazyExoticComponent } from 'react';
import { NoLazyLoad } from '../01-lazyload/pages/NoLazyLoad';


type JSXComponent = () => JSX.Element

interface IRoute {
  path: string,
  to: string,
  clasName: string,
  Component: JSXComponent | LazyExoticComponent<JSXComponent>,
  name: string
}

// Lazy load
const LazyLayoutModule = lazy(() => import(/* webpackChunkName: LazyLayoutModule */'../01-lazyload/layout/LazyLayoutModule'))

// Routes of the application
export const routes: IRoute[] = [
  {
    path: 'lazy/*',
    to: '/lazy',
    clasName: '',
    Component: LazyLayoutModule,
    name: 'Lazy' // it will appear in the url
  },
  {
    path: 'no-lazy',
    to: '/no-lazy',
    clasName: '',
    Component: NoLazyLoad,
    name: 'No Lazy' // it will appear in the url
  },
]