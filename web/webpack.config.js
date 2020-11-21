const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const isAnalyze = process.env.NODE_ENV === 'analyze';

const optimization = () => {
  const config = {
    minimize: true,
    splitChunks: {
      chunks: 'all',
    },
  };

  if (isProd) {
    config.minimizer = [
      new TerserWebpackPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCssAssetsWebpackPlugin(),
    ];
  }
  return config;
};

const getStyleLoaders = (scss = false) => {
  const styleLoaders = [];
  const defaultLoaders = [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    'css-loader',
    'postcss-loader',
  ];
  const scssLoaders = [
    {
      loader: 'resolve-url-loader',
      options: {
        removeCR: true,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
      },
    },
    {
      loader: 'sass-resources-loader',
      options: {
        resources: ['src/styles/_vars.scss'],
      },
    },
  ];

  styleLoaders.push(...defaultLoaders);
  if (scss) {
    styleLoaders.push(...scssLoaders);
  }

  return styleLoaders;
};

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'static/js/[name].bundle.js',
    publicPath: '/',
  },
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'eval-cheap-module-source-map' : false,
  stats: {
    /* Remove webpack child logs */
    children: false,
  },
  watch: isDev,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/,
  },
  devServer: {
    port: 5000,
    clientLogLevel: 'error',
    historyApiFallback: true,
    compress: true,
    hot: isDev,
    // open: true,
    overlay: {
      errors: true,
    },
    progress: true,
    // proxy: {
    //   // прокси для обхода CORS
    //   '/api': {
    //     // С какого адреса webpack dev server'a будут проксироваться запросы на адрес локального сервера.
    //     // Например: http://anyships.site:3000/user запрос на http://anyships.site/user (адрес из target ниже)
    //     target: 'http://6ac1c6b0eeec.ngrok.io', // Целевой адрес локального сервера, куда будут проксироваться запросы с дев сервера
    //     changeOrigin: true,
    //   },
    // },
  },
  optimization: optimization(),
  resolve: {
    alias: {
      icons: path.resolve(__dirname, 'src/static/icons'),
      img: path.resolve(__dirname, 'src/static/img'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['cache-loader', 'babel-loader'],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[ext]',
          // publicPath: '/', // for file-loader correct path resolve
        },
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: 'static/img/[name].[ext]',
        },
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: {
          test: /\.jsx?$/,
        },
        use: [
          'babel-loader',
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: {
                  removeViewBox: false,
                },
              },
            },
          },
          'url-loader',
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.scss/,
        use: getStyleLoaders(true),
      },
      {
        test: /\.css$/,
        use: getStyleLoaders(),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
    new ProgressBarPlugin(),
    ...(isProd
      ? [
          new MiniCssExtractPlugin({
            filename: 'static/css/[name]-[contenthash].css',
          }),
          /* new webpack.DefinePlugin({
       // for global variables
          /!* disable React DevTools in production *!/
          /!*__REACT_DEVTOOLS_GLOBAL_HOOK__: '({ isDisabled: true })',*!/
          /!*'process.env.BASE_PATH': JSON.stringify(basePath),*!/
        }), */
        ]
      : []),
    /* Bundle analyzer */
    ...(isAnalyze ? [new BundleAnalyzerPlugin()] : []),
  ],
};
