import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element

interface IRoute {
  path: string,
  to: string,
  clasName: string,
  Component: JSXComponent | LazyExoticComponent<JSXComponent>,
  name: string
}

// Lazy load
const Lazy1 = lazy(() => import(/* webpackChunkName: LazyPage1 */'../01-lazyload/pages/LazyPage1'))
const Lazy2 = lazy(() => import(/* webpackChunkName: LazyPage2 */'../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(() => import(/* webpackChunkName: LazyPage3 */'../01-lazyload/pages/LazyPage3'))

// Routes of the application
export const routes: IRoute[] = [
  {
    path: 'lazy1',
    to: '/lazy1',
    clasName: '',
    Component: Lazy1,
    name: 'Lazy-1' // it will appear in the url
  },
  {
    path: 'lazy2',
    to: '/lazy2',
    clasName: '',
    Component: Lazy2,
    name: 'Lazy-2' // it will appear in the url
  },
  {
    path: 'lazy3',
    to: '/lazy3',
    clasName: '',
    Component: Lazy3,
    name: 'Lazy-3' // it will appear in the url
  }
]