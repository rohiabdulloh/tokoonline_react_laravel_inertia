import React from 'react';
import { render } from 'react-dom';
import { InertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';

const app = document.getElementById('app');

InertiaProgress.init(); //buat progress bar di bagian atas saat perpindahan halaman

render(
  <InertiaApp
    initialPage={JSON.parse(app.dataset.page)}
    resolveComponent={name =>
      //import semua komponen dari folder Pages
      import(`./Pages/${name}`).then(module => module.default)
    }
  />,
  app
);