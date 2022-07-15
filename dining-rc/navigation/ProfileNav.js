import React from 'react';

import { AuthenticatedUserProvider } from './AuthenticatedUserProvider';
import ProfileNavigator from './ProfileNavigation';

export default function ProfileNavigate() {
  return (
    <AuthenticatedUserProvider>
      <ProfileNavigator />
    </AuthenticatedUserProvider>
  );
}