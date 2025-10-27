// karma.conf.js - CON COBERTURA DE CÓDIGO
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
      'src/components/__tests__/Contact.test.jsx': ['webpack'],
      // Añadir cobertura para el código fuente
      'src/pages/Contact.js': ['webpack', 'coverage'],
      'src/utils/validation.js': ['webpack', 'coverage'],
      'src/utils/api.js': ['webpack', 'coverage']
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
                ],
                plugins: ['istanbul'] // Plugin para cobertura
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
    
    // REPORTERS CON COBERTURA
    reporters: ['spec', 'html', 'junit', 'coverage'],
    
    // CONFIGURACIÓN DE COBERTURA DE CÓDIGO
    coverageReporter: {
      dir: 'test-reports/coverage',
      reporters: [
        { type: 'html', subdir: 'html' },        // Reporte HTML detallado
        { type: 'lcovonly', subdir: '.', file: 'lcov.info' }, // Para CI/CD
        { type: 'text-summary' },                // Resumen en consola
        { type: 'json', subdir: '.', file: 'coverage.json' }, // JSON
        { type: 'cobertura', subdir: '.', file: 'cobertura.xml' } // XML
      ],
      check: {
        global: {
          statements: 50,
          branches: 50,
          functions: 50,
          lines: 50
        }
      }
    },
    
    // CONFIGURACIÓN DEL REPORTE HTML
    htmlReporter: {
      outputDir: 'test-reports/html',
      reportName: 'contact-tests',
      pageTitle: 'Resultados Tests - Formulario Contacto',
      subPageTitle: 'Evaluación 2 - Grupo 4 - Tests con validation.js',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: false,
      showOnlyFailed: false
    },
    
    // CONFIGURACIÓN DEL REPORTE JUNIT (XML)
    junitReporter: {
      outputDir: 'test-reports/junit',
      outputFile: 'test-results.xml',
      suite: 'Contact Form Tests',
      useBrowserName: false
    },
    
    // CONFIGURACIÓN DEL REPORTE SPEC (CONSOLA)
    specReporter: {
      maxLogLines: 5,
      suppressErrorSummary: false,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: true,
      showSpecTiming: true,
      failFast: false,
      prefixes: {
        success: '✓ ',
        failure: '✗ ',
        skipped: '- '
      }
    },
    
    logLevel: config.LOG_INFO,
    browserDisconnectTolerance: 2,
    browserNoActivityTimeout: 50000,
    
    client: {
      captureConsole: true,
      jasmine: {
        random: false,
        showColors: true,
        defaultTimeoutInterval: 10000
      }
    },
    
    browserConsoleLogOptions: {
      level: 'log',
      format: '%b %T: %m',
      terminal: true
    },
    
    // PLUGINS ACTUALIZADOS CON COVERAGE
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher', 
      'karma-webpack',
      'karma-spec-reporter',
      'karma-html-reporter',
      'karma-junit-reporter',
      'karma-coverage'
    ],
    
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  });
};