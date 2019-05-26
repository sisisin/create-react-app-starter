import React from 'react';
import { Dashboard } from 'src/components/Dashboard';
import { SharedFeatureActions } from 'src/features/sharedFeature/interface';
import { useActions } from 'typeless';
import { Link } from 'typeless-router';

export const Sample1View = () => {
  const { showSharedValue } = useActions(SharedFeatureActions);
  return (
    <Dashboard>
      Feature sample1
      <br />
      <Link href="/sample2">
        Go to sample feature 2 (set "slow 3G" to see a spinner)
      </Link>
      <button onClick={showSharedValue}>show in sample1!</button>
    </Dashboard>
  );
};
