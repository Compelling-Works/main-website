module.exports = {
  apps: [
    {
      script: "npm start",
    },
  ],

  deploy: {
    production: {
      key: "cw-websites-ec2-keypair.pem",
      user: "ubuntu",
      host: "18.185.188.168",
      ref: "origin/main",
      repo: "git@github.com:Loorinho/fyp-millers.git",
      path: "/home/ubuntu/new-website",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
  },
};
