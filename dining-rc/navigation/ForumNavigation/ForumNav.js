import React from 'react';

import { AuthenticatedUserProvider } from '../AuthenticatedUserProvider';
import ForumNavigator from './ForumNavigation';

export default function ForumNavigate() {
  return (
    <AuthenticatedUserProvider>
      <ForumNavigator />
    </AuthenticatedUserProvider>
  );
}