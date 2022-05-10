module.exports = {
    stories: ['../stories/**/*.stories.js'],
    addons: [
      '@storybook/addon-actions',
      '@storybook/addon-links',
      '@storybook/addon-knobs',
      '@storybook/addon-docs',
      '@storybook/addon-a11y',
    ],
    webpackFinal: async config => {
        config.module.rules = [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.(stories|story)\.[tj]sx?$/,
                loader: require.resolve('@storybook/source-loader'),
                exclude: [/node_modules/],
                enforce: 'pre',
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
                        }
                    },
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ];
        config.resolve.extensions = ['.js', '.jsx'];

        return config;
    },
};