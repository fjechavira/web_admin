export default [
  {
    title: 'Dashboard',
    route: 'dashboard',
    icon: 'HomeIcon',
    resource: 'Dashboard',
    action: 'read',
  },
  {
    title: 'CRM',
    icon: 'UsersIcon',
    route: 'crm',
    resource: 'Leads',
    action: 'read',
  },
  {
    title: 'Productos',
    icon: 'ShoppingCartIcon',
  },
  {
    title: 'Reportes',
    icon: 'PieChartIcon',
  },
  {
    title: 'Configuración',
    icon: 'SettingsIcon',
    children: [
      {
        title: 'Agentes',
        route: 'agentes',
        action: 'read',
        resource: 'Auth',
      },
    ],
  },
]
