const path = require('path');

module.exports = ({ env }) => ({
  url: env("RENDER_EXTERNAL_URL"),
  dirs: {
    public: path.join(__dirname, '..', '..', 'public'), // Ajustez le chemin si nécessaire
  },
});