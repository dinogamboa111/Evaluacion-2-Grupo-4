// karma.conf.js - SILENCIAR HTML EN ERRORES
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    
    files: [
      'src/components/__tests__/Contact.test.jsx'
    ],
    
    exclude: [
      'src/App.test.js',
      'src/**/*.test.js',
      'src/setupTests.js'
    ],
    
    preprocessors: {
      'src/components/__tests__/Contact.test.jsx': ['webpack']
    },
    
    webpack: {
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react'
                ]
              }
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx']
      }
    },
    
    // REPORTER MÍNIMO
    reporters: ['progress'],
    
    // CONFIGURACIÓN PARA SILENCIAR HTML
    logLevel: config.LOG_ERROR, // SOLO errores
    browserDisconnectTolerance: 2,
    browserNoActivityTimeout: 50000,
    
    // SILENCIAR CONSOLA DEL NAVEGADOR COMPLETAMENTE
    client: {
      captureConsole: false,
      // CONFIGURACIÓN EXTRA PARA SILENCIAR HTML
      jasmine: {
        random: false,
        showColors: true,
        defaultTimeoutInterval: 10000
      }
    },
    
    // CONFIGURACIÓN ADICIONAL PARA SILENCIAR LOGS
    browserConsoleLogOptions: {
      level: 'error',
      format: '%b %T: %m',
      terminal: false // Cambiar a false para silenciar aún más
    },
    
    // EVITAR QUE MUESTRE EL HTML EN LOS REPORTES
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher', 
      'karma-webpack',
      'karma-spec-reporter'
    ],
    
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  });
};