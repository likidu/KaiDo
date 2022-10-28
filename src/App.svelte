<script lang="ts">
  import Router, { location, replace, pop } from 'svelte-spa-router';
  import { OnyxKeys } from 'onyx-keys';

  import { Onyx } from './ui/services';
  import OnyxApp from './ui/components/app/OnyxApp.svelte';

  import { Home, User, NotFound } from './app/routes';
  import { settings } from './app/stores/settings';

  import AppMenu from './app/components/AppMenu.svelte';

  const routes = {
    '/': Home,
    '/user': User,
    '*': NotFound,
  };

  const keyMan = OnyxKeys.subscribe(
    {
      onBackspace: async () => {
        // If on the main screen, let KaiOS minimize the app
        if ($location === '/') {
          console.log('exit app');
          return;
        }

        pop();
      },
    },
    { priority: 4 },
  );

  $: Onyx.settings.update($settings);
</script>

<OnyxApp>
  <AppMenu slot="app-menu" />
  <Router {routes} />
</OnyxApp>
