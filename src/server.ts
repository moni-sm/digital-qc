import 'zone.js/node';
import express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';
import { renderApplication } from '@angular/platform-server';
import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

const DIST_FOLDER = join(process.cwd(), 'dist/digital-qc/browser');
const indexHtml = readFileSync(join(DIST_FOLDER, 'index.html')).toString();

const app = express();

<<<<<<< HEAD
import cors from 'cors';
app.use(cors({ origin: true, credentials: true }));

app.post('/api/submit', express.json(), (req, res) => {
  console.log('Received form data:', req.body);

  // Do something with the data, e.g., save to DB or file
  res.status(200).json({ message: 'Data received successfully' });
});



=======
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5
// Serve static files
app.get('*.*', express.static(DIST_FOLDER, { maxAge: '1y' }));

// Serve application routes
app.get('*', async (req, res) => {
  const html = await renderApplication(
    () => bootstrapApplication(AppComponent, {
      ...appConfig,
      providers: [
        ...(appConfig.providers || []),
        provideClientHydration() // Add hydration provider
      ]
    }),
    {
      document: indexHtml,
      url: req.url,
    }
  );
  res.send(html);
});

<<<<<<< HEAD


=======
>>>>>>> 03f36db711af413af539a96028dc74b3739fc9b5
const port = process.env['PORT'] ?? 4000;

app.listen(port, () => {
  console.log(`Node server listening on http://localhost:${port}`);
});
