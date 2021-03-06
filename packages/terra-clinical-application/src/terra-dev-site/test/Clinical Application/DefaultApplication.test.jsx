import React from 'react';
import AppDelegate from 'terra-app-delegate';

import Application from '../../../Application';
import ContainerComponent from './ContainerComponent';

export default () => (
  <Application app={AppDelegate.create({})} id="Application">
    <ContainerComponent />
  </Application>
);
