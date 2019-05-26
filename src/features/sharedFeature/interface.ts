import { createModule } from 'typeless';
import { SharedFeatureSymbol } from './symbol';

export const [handle, SharedFeatureActions] = createModule(SharedFeatureSymbol)
  .withActions({
    $mounted: null,
    $unmounting: null, // show in logs
    showSharedValue: null,
  })
  .withState<{}>();
