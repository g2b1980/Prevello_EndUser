import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AppMenuService {
  getAppMenus() {
    return [
      { 'text': 'Navigation', 'is_header': true },
      { 'path': '/dashboard', 'icon': 'fa fa-laptop', 'text': 'Dashboard' },
      { 'path': '/analytics', 'icon': 'fa fa-chart-pie', 'text': 'Analytics' },
      { 'path': '/email/', 'icon': 'fa fa-envelope', 'text': 'Email', 'label': '6',
        'children': [
          { 'path': '/email/inbox', 'text': 'Inbox' },
          { 'path': '/email/compose', 'text': 'Compose' },
          { 'path': '/email/detail', 'text': 'Detail' }
        ]
      },
      { 'is_divider': true },
      { 'text': 'Components', 'is_header': true },
      { 'path': '/widgets', 'icon': 'fa fa-qrcode', 'text': 'Widgets' },
      {
        'path': '/ui/', 'icon': 'fa fa-heart', 'text': 'UI Kits',
        'children': [
          { 'path': '/ui/bootstrap', 'text': 'Bootstrap' },
          { 'path': '/ui/buttons', 'text': 'Buttons' },
          { 'path': '/ui/card', 'text': 'Card' },
          { 'path': '/ui/icons', 'text': 'Icons' },
          { 'path': '/ui/modal-notifications', 'text': 'Modal & Notifications' },
          { 'path': '/ui/typography', 'text': 'Typography' },
          { 'path': '/ui/tabs-accordions', 'text': 'Tabs & Accordions' }
        ]
      },
      {
        'path': '/form/', 'icon': 'fa fa-file-alt', 'text': 'Forms',
        'children': [
          { 'path': '/form/elements', 'text': 'Form Elements' },
          { 'path': '/form/plugins', 'text': 'Form Plugins' },
          { 'path': '/form/wizards', 'text': 'Wizards' }
        ]
      },
      { 'path': '/table/', 'icon': 'fa fa-table', 'text': 'Tables',
        'children': [
          { 'path': '/table/elements', 'text': 'Table Elements' },
          { 'path': '/table/plugins', 'text': 'Table Plugins' }
        ]
      },
      { 'path': '/chart/', 'icon': 'fa fa-chart-bar', 'text': 'Charts',
        'children': [
          { 'path': '/chart/js', 'text': 'Chart.js' },
          { 'path': '/chart/apex', 'text': 'Apexcharts.js' }
        ]
      },
      { 'path': '/map', 'icon': 'fa fa-map-marker-alt', 'text': 'Map' },
      { 'is_divider': true },
      { 'text': 'Users', 'is_header': true },
      { 'path': '/profile', 'icon': 'fa fa-user-circle', 'text': 'Profile' },
      { 'path': '/calendar', 'icon': 'fa fa-calendar', 'text': 'Calendar' },
      { 'path': '/settings', 'icon': 'fa fa-cog', 'text': 'Settings' },
      { 'path': '/helper', 'icon': 'fa fa-question-circle', 'text': 'Helper' }
    ];
  }
}
