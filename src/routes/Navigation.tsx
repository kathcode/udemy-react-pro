import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { routes } from './routes';


export const Navigation = () => {
  return (<Suspense fallback={<span>Loading...</span>}>
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <ul>
            {routes.map(({ to, name }) =>
              <li key={name}>
                <NavLink to={to}>{name}</NavLink>
              </li>
            )}
          </ul>
        </nav>
        <Routes>
          {routes.map(({ name, path, Component }) =>
            <Route key={name} path={path} element={<Component />} />
          )}

          <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  </Suspense>)
}