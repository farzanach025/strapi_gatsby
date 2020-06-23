module.exports = {
    apps : [{
      name: "front",
      script: 'npm',
      args : ['start','serve'],
      watch: false,
      env :{
          NODE_ENV: "development",
      },
      env :{
        NODE_ENV: "production",
    }
    }]
  }
