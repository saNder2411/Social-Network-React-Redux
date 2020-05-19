import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Profile from '../pages/profile/profile';
import Dialogs from '../pages/dialogs/dialogs';
import News from '../pages/news/news';
import Music from '../pages/music/music';
import Settings from '../pages/settings/settings';


const Routes = () => {

  return (
    <Switch>
      <Route path="/" exact component={Profile} />
      <Route path="/dialogs/" component={Dialogs} />
      <Route path="/news/" component={News} />
      <Route path="/music/" component={Music} />
      <Route path="/settings/" component={Settings} />
    </Switch>
  );
};

export default Routes;