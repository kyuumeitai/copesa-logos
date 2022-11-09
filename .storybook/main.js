module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  features: {
    storyStoreV7: true,
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
}
