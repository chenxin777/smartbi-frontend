export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { name: '登录', path: '/user/login', component: './User/Login' },
      { name: '注册', path: '/user/register', component: './User/Register' },
    ],
  },
  {path: '/add_chart', name: 'AI图表', icon: 'BarChartOutlined', component: './AddChart'},
  {path: '/add_chart_async', name: 'AI图表异步', icon: 'BarChartOutlined', component: './AddChartAsync'},
  {path: '/my_chart', name: '我的图表', icon: 'pieChartOutlined', component: './MyChart'},
  { path: '/', redirect: '/add_chart' },
  { path: '*', layout: false, component: './404' },
];
