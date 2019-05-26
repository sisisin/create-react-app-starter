import * as Rx from 'src/rx';
import { handle, SharedFeatureActions } from './interface';

handle.epic().on(SharedFeatureActions.showSharedValue, () => {
  console.log('showSharedValue!');
  return Rx.empty();
});

handle.reducer({});
export const useSharedFeatureModule = () => handle();
