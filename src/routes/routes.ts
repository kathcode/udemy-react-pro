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
const Shopping = lazy(() => import(/* webpackChunkName: LazyPage1 */'../02-component-patterns/pages/Shopping'))
//const Lazy2 = lazy(() => import(/* webpackChunkName: LazyPage2 */'../02-component-patterns/pages/LazyPage2'))
//const Lazy3 = lazy(() => import(/* webpackChunkName: LazyPage3 */'../02-component-patterns/pages/LazyPage3'))

// Routes of the application
export const routes: IRoute[] = [
  {
    path: 'home',
    to: '/home',
    clasName: '',
    Component: Shopping,
    name: 'Home' // it will appear in the url
  },
]