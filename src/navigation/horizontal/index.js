export default [
  {
    title: 'Dashboard',
    route: 'dashboard',
    icon: 'HomeIcon',
    resource: 'Dashboard',
    action: 'read',
  },
  {
    title: 'Afiliación',
    icon: 'UserPlusIcon',
    route: 'afiliacion',
    resource: 'Leads',
    action: 'read',
  },
  {
    title: 'Leads',
    route: 'leads',
    icon: 'UsersIcon',
    resource: 'Leads',
    action: 'manage',
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
