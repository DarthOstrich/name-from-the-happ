import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// components
import App from './../../ui/components/App';
import Login from './../../ui/components/Login';
import Signup from './../../ui/components/Signup';
import Sections from './../../ui/components/Sections/Sections';
import PresentationList from './../../ui/components/Presentations/PresentationList';
import Presentations from './../../ui/components/Presentations/Presentations';
import PresentationView from './../../ui/components/Presentations/PresentationView';
import AddPresentation from './../../ui/components/Presentations/AddPresentation';
import PresentationEdit from './../../ui/components/Presentations/PresentationEdit';
import NotFound from './../../ui/components/NotFound';

const publicPages = ['/', '/signup'];
const privatePages = ['/sections'];

const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/sections');
  }
};
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/');
  }
};

const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isPublicPage = publicPages.includes(pathname);
  const isPrivatePage = privatePages.includes(pathname);

  // if public page and logged in - let them in
  if (isPublicPage && isAuthenticated) {
    browserHistory.replace('/sections');
  } else if (isPrivatePage && !isAuthenticated) {
    // if private page and not logged in - kick them out
    browserHistory.replace('/');
  }
};

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Login } onEnter={ onEnterPublicPage }/>
        <Route path="/signup" component={ Signup} onEnter={ onEnterPublicPage } />
        <Route path="/sections" component={ Sections } onEnter={onEnterPrivatePage} />
        <Route
          path="/presentationlist"
          component={ PresentationList }
        />
        <Route
          path="/presentationview"
          component={ PresentationView }
          onEnter={onEnterPrivatePage}
        />
        <Route
          path="/presentationadd"
          component={ AddPresentation }
          onEnter={onEnterPrivatePage}
        />
        <Route
          path="/presentationedit"
          component={PresentationEdit}
          onEnter={onEnterPrivatePage}
        />
        <Route
          path="/sections/:_id"
          component={Presentations}
          onEnter={onEnterPrivatePage}
        />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root'),
  );
});

export default onAuthChange;
