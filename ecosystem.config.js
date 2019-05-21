module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-35-174-166-238.compute-1.amazonaws.com',
      key: '~/.ssh/tutorial.pem',
      ref: 'origin/master',
      repo: 'https://github.com/anthon78/Tutorial.git',
      path: '/home/ubuntu/tutorial',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
