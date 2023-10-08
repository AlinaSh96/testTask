import { ListPage } from '../../page/ListPage/ListPage';
import { MainPage } from '../../page/MainPage/MainPage';
import { NotFoundPage } from '../../page/NotFoundPage/NotFoundPage';
import { RouteProps } from 'react-router-dom';

enum AppRoutes {
    MAIN = 'main',
    LIST = 'list',
    NOT_FOUND =  'not_found',
}
 const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.LIST]: '/list',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.LIST]: {
        path: RoutePath.list,
        element: <ListPage />
    },
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
};