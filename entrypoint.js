import { KeepAwake, registerRootComponent } from 'expo';
import { AppContainer } from 'environments';

if (__DEV__) {
  KeepAwake.activate();
}

registerRootComponent(AppContainer);

