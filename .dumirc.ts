import { defineConfig } from 'dumi'
import p from './package.json'

const repo = process.env.PUBLIC_PATH || ''
const publicPath = repo ? `/${repo}` : '/'

export default defineConfig({
  favicons: [
    'https://raw.githubusercontent.com/hjfruit/react-native-xiaoshu/main/logo-xiaoshu.svg',
  ],
  define: {
    'process.env.BAILU_VERSION': p.version,
  },
  base: `/${repo}`,
  publicPath,
  outputPath: 'docs-dist',
  apiParser: {},
  resolve: {
    entryFile: './src/index.ts',
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: 'src' }],
  },
  theme: {
    '@c-primary': '#0065FE',
    '@c-warning': '#FFA238',
    '@c-success': '#34B545',
    '@c-error': '#F92F2F',
  },
  alias: {
    'react-native$': 'react-native-web',
    'react-native-svg$': 'react-native-svg-web',
    'react-native-safe-area-context':
      'expo-dev-menu/vendored/react-native-safe-area-context/src',
    '../Utilities/Platform': 'react-native-web/dist/exports/Platform',
    '../../Utilities/Platform': 'react-native-web/dist/exports/Platform',
    './Platform': 'react-native-web/dist/exports/Platform',
  },
  themeConfig: {
    name: '小暑',
    logo: 'https://raw.githubusercontent.com/hjfruit/react-native-xiaoshu/main/logo-xiaoshu.svg',
    footer: false,
    socialLinks: {
      github: 'https://github.com/hjfruit/react-native-xiaoshu',
    },
    deviceWidth: 375,
    nav: [
      {
        title: '指南',
        link: '/guide',
      },
      {
        title: 'Components',
        link: '/components',
      },
      {
        title: '案例',
        link: '/case',
      },
      {
        title: '维护团队',
        link: 'https://techblog.hjgpscm.com',
      },
      {
        title: '更新日志',
        link: 'https://github.com/hjfruit/react-native-xiaoshu/releases',
      },
      {
        title: 'Android 预览',
        link: `https://www.onlyling.com/apks/${p.name}-v${p.version}.apk`,
      },
    ],
  },
})
