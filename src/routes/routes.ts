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
const Lazy1 = lazy(() => import(/* webpackChunkName: LazyPage1 */'../pages/LazyPage1'))
const Lazy2 = lazy(() => import(/* webpackChunkName: LazyPage2 */'../pages/LazyPage2'))
const Lazy3 = lazy(() => import(/* webpackChunkName: LazyPage3 */'../pages/LazyPage3'))

// Routes of the application
export const routes: IRoute[] = [
  {
    path: 'home',
    to: '/home',
    clasName: '',
    Component: Lazy1,
    name: 'Home' // it will appear in the url
  },
  {
    path: 'about',
    to: '/about',
    clasName: '',
    Component: Lazy2,
    name: 'About' // it will appear in the url
  },
  {
    path: 'users',
    to: '/users',
    clasName: '',
    Component: Lazy3,
    name: 'Users' // it will appear in the url
  }
]