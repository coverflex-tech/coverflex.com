exports.onCreateWebpackConfig = ({
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(md)$/,
          use: [
            'html-loader',
            {
              loader: 'markdown-loader',
            },
          ],
        },
      ],
    },
  })
}
