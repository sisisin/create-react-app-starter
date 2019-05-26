import React from 'react';
import { Dashboard } from 'src/components/Dashboard';
import { SharedFeatureActions } from 'src/features/sharedFeature/interface';
import { useActions } from 'typeless';
import { Link } from 'typeless-router';

export const Sample2View = () => {
  const { showSharedValue } = useActions(SharedFeatureActions);
  return (
    <Dashboard>
      Feature sample2 <br />
      <Link href="/">Go to sample feature 1</Link>
      <button onClick={showSharedValue}>show in sample1!</button>
    </Dashboard>
  );
};
