import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import AddImagePage from './AddImagePage';
import AlbumDetailPage from './AlbumDetailPage';
import AlbunsPage from './AlbunsPage';
import CreateAlbumPage from './CreateAlbumPage';
import Home from "./Home/index";
import LoginPage from "./LoginPage/index";
import SignupPage from "./SignUpPage/index"

function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path = "/login">
                    <LoginPage/>
                </Route>
                <Route exact path = "/signup">
                    <SignupPage/>
                </Route>
                <Route exact path = "/albuns">
                    <AlbunsPage/>
                </Route>
                <Route exact path = "/albuns/new">
                    <CreateAlbumPage/>
                </Route>
                <Route exact path= "/album/:albumId">
                    <AlbumDetailPage />
                </Route>
                <Route exact path= "/album/:albumId/image">
                    <AddImagePage />
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router 