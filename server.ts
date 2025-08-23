// server.ts - Next.js Standalone + Socket.IO
import { setupSocket } from '@/lib/socket';
import { createServer } from 'http';
import { Server } from 'socket.io';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const currentPort = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const hostname = dev ? 'localhost' : '0.0.0.0';

async function createCustomServer() {
  try {
    const nextApp = next({ 
      dev,
      dir: process.cwd(),
      conf: dev ? undefined : { distDir: './.next' }
    });
    
    await nextApp.prepare();
    const handle = nextApp.getRequestHandler();

    const server = createServer((req, res) => {
      // Skip socket.io requests from Next.js handler
      if (req.url?.startsWith('/api/socketio')) {
        return;
      }
      
      // Handle locale redirection
      const url = req.url || '';
      const locales = ['en', 'id'];
      const defaultLocale = 'en';
      
      // Check if URL starts with a locale
      const hasLocale = locales.some(locale => 
        url.startsWith(`/${locale}/`) || url === `/${locale}`
      );
      
      // If no locale and not static files/API, redirect to default locale
      if (!hasLocale && !url.startsWith('/_next') && !url.startsWith('/api') && 
          !url.includes('.') && url.length >= 1) {
        // Special case for root path
        if (url === '/') {
          res.writeHead(307, { Location: `/${defaultLocale}` });
          res.end();
          return;
        }
        // Other non-localized paths
        if (url.length > 1) {
          const redirectUrl = `/${defaultLocale}${url}`;
          res.writeHead(307, { Location: redirectUrl });
          res.end();
          return;
        }
      }
      
      handle(req, res);
    });

    // Setup Socket.IO
    const io = new Server(server, {
      path: '/api/socketio',
      cors: {
        origin: dev ? "http://localhost:3000" : "*",
        methods: ["GET", "POST"]
      }
    });
    
    setupSocket(io);

    server.listen(currentPort, hostname, () => {
      console.log(`> Ready on http://${hostname}:${currentPort}`);
      console.log(`> Socket.IO server running at ws://${hostname}:${currentPort}/api/socketio`);
    });
  } catch (err) {
    console.error('Server startup error:', err);
    process.exit(1);
  }
}

createCustomServer();