module.exports = {
  apps : [{
    name: 'express-pouch-ts-server',
    script: './bin/www',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT:3000
    },
    env_production: {
      NODE_ENV: 'production',
      PORT:8080
    }
  }]
};
