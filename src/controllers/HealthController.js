function getPackageInfo() {
  return {
    name: process.env.npm_package_name,
    version: process.env.npm_package_version,
    description: process.env.npm_package_description,
  }
}

class HealthController {
  info(req, res) {
    res.json(getPackageInfo())
  }

  ping(req, res) {
    res.send('pong')
  }
}

module.exports = HealthController
