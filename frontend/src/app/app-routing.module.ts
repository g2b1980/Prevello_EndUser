import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './service/auth/auth.guard';

// Auth pages (no layout chrome)
import { LoginPage }                       from './pages/page/login/page-login';
import { RegisterPage }                    from './pages/page/register/page-register';
import { ErrorPage }                       from './pages/page/error/page-error';

// Protected pages (with sidebar/header layout)
import { DashboardPage }                   from './pages/dashboard/dashboard';
import { AnalyticsPage }                   from './pages/analytics/analytics';

import { EmailInboxPage }                  from './pages/email/inbox/email-inbox';
import { EmailComposePage }                from './pages/email/compose/email-compose';
import { EmailDetailPage }                 from './pages/email/detail/email-detail';

import { WidgetsPage }                     from './pages/widgets/widgets';

import { ProfilePage }                     from './pages/profile/profile';
import { CalendarPage }                    from './pages/calendar/calendar';
import { SettingsPage }                    from './pages/settings/settings';
import { HelperPage }                      from './pages/helper/helper';

// UI Kit / Components (keep for reference/development)
import { UiBootstrapPage }                 from './pages/ui/bootstrap/ui-bootstrap';
import { UiButtonsPage }                   from './pages/ui/buttons/ui-buttons';
import { UiCardPage }                      from './pages/ui/card/ui-card';
import { UiIconsPage }                     from './pages/ui/icons/ui-icons';
import { UiModalNotificationsPage }        from './pages/ui/modal-notifications/ui-modal-notifications';
import { UiTypographyPage }                from './pages/ui/typography/ui-typography';
import { UiTabsAccordionsPage }            from './pages/ui/tabs-accordions/ui-tabs-accordions';

import { FormElementsPage }                from './pages/form/elements/form-elements';
import { FormPluginsPage }                 from './pages/form/plugins/form-plugins';
import { FormWizardsPage }                 from './pages/form/wizards/form-wizards';

import { TableElementsPage }               from './pages/table/elements/table-elements';
import { TablePluginsPage }                from './pages/table/plugins/table-plugins';

import { ChartJsPage }                     from './pages/chart/js/chart-js';
import { ChartApexPage }                   from './pages/chart/apex/chart-apex';

import { MapPage }                         from './pages/map/map';

// Layout demos
import { LayoutStarterPage }               from './pages/layout/starter/layout-starter';
import { LayoutFixedFooterPage }           from './pages/layout/fixed-footer/layout-fixed-footer';
import { LayoutFullHeightPage }            from './pages/layout/full-height/layout-full-height';
import { LayoutFullWidthPage }             from './pages/layout/full-width/layout-full-width';
import { LayoutBoxedLayoutPage }           from './pages/layout/boxed-layout/layout-boxed-layout';
import { LayoutMinifiedSidebarPage }       from './pages/layout/minified-sidebar/layout-minified-sidebar';
import { LayoutTopNavPage }                from './pages/layout/top-nav/layout-top-nav';
import { LayoutMixedNavPage }              from './pages/layout/mixed-nav/layout-mixed-nav';
import { LayoutMixedNavBoxedLayoutPage }   from './pages/layout/mixed-nav-boxed-layout/layout-mixed-nav-boxed-layout';

// Pages
import { ScrumBoardPage }                  from './pages/page/scrum-board/page-scrum-board';
import { ProductsPage }                    from './pages/page/products/page-products';
import { ProductDetailsPage }              from './pages/page/product-details/page-product-details';
import { OrdersPage }                      from './pages/page/orders/page-orders';
import { OrderDetailsPage }                from './pages/page/order-details/page-order-details';
import { GalleryPage }                     from './pages/page/gallery/page-gallery';
import { SearchResultsPage }               from './pages/page/search-results/page-search-results';
import { ComingSoonPage }                  from './pages/page/coming-soon/page-coming-soon';
import { MessengerPage }                   from './pages/page/messenger/page-messenger';
import { DataManagementPage }              from './pages/page/data-management/page-data-management';
import { FileManagerPage }                 from './pages/page/file-manager/page-file-manager';
import { PricingPage }                     from './pages/page/pricing/page-pricing';
import { LandingPage }                     from './pages/landing/landing';

// AI
import { AiChatPage }                      from './pages/ai/chat/ai-chat';
import { AiImageGeneratorPage }            from './pages/ai/image-generator/ai-image-generator';

// POS
import { PosCustomerOrderPage }            from './pages/pos/customer-order/pos-customer-order';
import { PosKitchenOrderPage }             from './pages/pos/kitchen-order/pos-kitchen-order';
import { PosCounterCheckoutPage }          from './pages/pos/counter-checkout/pos-counter-checkout';
import { PosTableBookingPage }             from './pages/pos/table-booking/pos-table-booking';
import { PosMenuStockPage }                from './pages/pos/menu-stock/pos-menu-stock';

const routes: Routes = [
  // ----- Public routes (no auth required) -----
  { path: 'login', component: LoginPage, data: { title: 'Login'} },
  { path: 'register', component: RegisterPage, data: { title: 'Register'} },
  { path: 'landing', component: LandingPage, data: { title: 'Landing Page'} },

  // ----- Protected routes (auth required) -----
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  
  { path: 'dashboard', component: DashboardPage, canActivate: [AuthGuard], data: { title: 'Dashboard'} },
  { path: 'analytics', component: AnalyticsPage, canActivate: [AuthGuard], data: { title: 'Analytics'} },
  
  { path: 'email/inbox', component: EmailInboxPage, canActivate: [AuthGuard], data: { title: 'Email Inbox'} },
  { path: 'email/compose', component: EmailComposePage, canActivate: [AuthGuard], data: { title: 'Email Compose'} },
  { path: 'email/detail', component: EmailDetailPage, canActivate: [AuthGuard], data: { title: 'Email Detail'} },
  
  { path: 'widgets', component: WidgetsPage, canActivate: [AuthGuard], data: { title: 'Widgets'} },
  
  { path: 'ai/chat', component: AiChatPage, canActivate: [AuthGuard], data: { title: 'AI Chat'} },
  { path: 'ai/image-generator', component: AiImageGeneratorPage, canActivate: [AuthGuard], data: { title: 'AI Image Generator'} },
  
  { path: 'pos/customer-order', component: PosCustomerOrderPage, canActivate: [AuthGuard], data: { title: 'Pos Customer Order'} },
  { path: 'pos/kitchen-order', component: PosKitchenOrderPage, canActivate: [AuthGuard], data: { title: 'Pos Kitchen Order'} },
  { path: 'pos/counter-checkout', component: PosCounterCheckoutPage, canActivate: [AuthGuard], data: { title: 'Pos Counter Checkout'} },
  { path: 'pos/table-booking', component: PosTableBookingPage, canActivate: [AuthGuard], data: { title: 'Pos Table Booking'} },
  { path: 'pos/menu-stock', component: PosMenuStockPage, canActivate: [AuthGuard], data: { title: 'Pos Menu Stock'} },
  
  { path: 'ui/bootstrap', component: UiBootstrapPage, canActivate: [AuthGuard], data: { title: 'UI Bootstrap'} },
  { path: 'ui/buttons', component: UiButtonsPage, canActivate: [AuthGuard], data: { title: 'UI Buttons'} },
  { path: 'ui/card', component: UiCardPage, canActivate: [AuthGuard], data: { title: 'UI Card'} },
  { path: 'ui/icons', component: UiIconsPage, canActivate: [AuthGuard], data: { title: 'UI Icons'} },
  { path: 'ui/modal-notifications', component: UiModalNotificationsPage, canActivate: [AuthGuard], data: { title: 'UI Modal & Notifications'} },
  { path: 'ui/typography', component: UiTypographyPage, canActivate: [AuthGuard], data: { title: 'UI Typography'} },
  { path: 'ui/tabs-accordions', component: UiTabsAccordionsPage, canActivate: [AuthGuard], data: { title: 'UI Tabs & Accordions'} },
  
  { path: 'form/elements', component: FormElementsPage, canActivate: [AuthGuard], data: { title: 'Form Elements'} },
  { path: 'form/plugins', component: FormPluginsPage, canActivate: [AuthGuard], data: { title: 'Form Plugins'} },
  { path: 'form/wizards', component: FormWizardsPage, canActivate: [AuthGuard], data: { title: 'Form Wizards'} },
  
  { path: 'table/elements', component: TableElementsPage, canActivate: [AuthGuard], data: { title: 'Table Elements'} },
  { path: 'table/plugins', component: TablePluginsPage, canActivate: [AuthGuard], data: { title: 'Table Plugins'} },
  
  { path: 'chart/js', component: ChartJsPage, canActivate: [AuthGuard], data: { title: 'Chart JS'} },
  { path: 'chart/apex', component: ChartApexPage, canActivate: [AuthGuard], data: { title: 'Chart Apex'} },
  
  { path: 'map', component: MapPage, canActivate: [AuthGuard], data: { title: 'Map'} },
  
  { path: 'layout/starter', component: LayoutStarterPage, canActivate: [AuthGuard], data: { title: 'Starter Page'} },
  { path: 'layout/fixed-footer', component: LayoutFixedFooterPage, canActivate: [AuthGuard], data: { title: 'Fixed Footer Page'} },
  { path: 'layout/full-height', component: LayoutFullHeightPage, canActivate: [AuthGuard], data: { title: 'Full Height Page'} },
  { path: 'layout/full-width', component: LayoutFullWidthPage, canActivate: [AuthGuard], data: { title: 'Full Width Page'} },
  { path: 'layout/boxed-layout', component: LayoutBoxedLayoutPage, canActivate: [AuthGuard], data: { title: 'Boxed Layout Page'} },
  { path: 'layout/minified-sidebar', component: LayoutMinifiedSidebarPage, canActivate: [AuthGuard], data: { title: 'Minified Sidebar Page'} },
  { path: 'layout/top-nav', component: LayoutTopNavPage, canActivate: [AuthGuard], data: { title: 'Top Nav Page'} },
  { path: 'layout/mixed-nav', component: LayoutMixedNavPage, canActivate: [AuthGuard], data: { title: 'Mixed Nav Page'} },
  { path: 'layout/mixed-nav-boxed-layout', component: LayoutMixedNavBoxedLayoutPage, canActivate: [AuthGuard], data: { title: 'Mixed Nav Boxed Layout Page'} },
  
  { path: 'page/scrum-board', component: ScrumBoardPage, canActivate: [AuthGuard], data: { title: 'Scrum Board Page'} },
  { path: 'page/products', component: ProductsPage, canActivate: [AuthGuard], data: { title: 'Products Page'} },
  { path: 'page/product-details', component: ProductDetailsPage, canActivate: [AuthGuard], data: { title: 'Product Details Page'} },
  { path: 'page/orders', component: OrdersPage, canActivate: [AuthGuard], data: { title: 'Orders Page'} },
  { path: 'page/order-details', component: OrderDetailsPage, canActivate: [AuthGuard], data: { title: 'Order Details Page'} },
  { path: 'page/gallery', component: GalleryPage, canActivate: [AuthGuard], data: { title: 'Gallery Page'} },
  { path: 'page/search-results', component: SearchResultsPage, canActivate: [AuthGuard], data: { title: 'Search Results Page'} },
  { path: 'page/coming-soon', component: ComingSoonPage, canActivate: [AuthGuard], data: { title: 'Coming Soon Page'} },
  { path: 'page/messenger', component: MessengerPage, canActivate: [AuthGuard], data: { title: 'Messenger Page'} },
  { path: 'page/data-management', component: DataManagementPage, canActivate: [AuthGuard], data: { title: 'Data Management Page'} },
  { path: 'page/file-manager', component: FileManagerPage, canActivate: [AuthGuard], data: { title: 'File Manager Page'} },
  { path: 'page/pricing', component: PricingPage, canActivate: [AuthGuard], data: { title: 'Pricing Page'} },
  
  { path: 'profile', component: ProfilePage, canActivate: [AuthGuard], data: { title: 'Profile'} },
  { path: 'calendar', component: CalendarPage, canActivate: [AuthGuard], data: { title: 'Calendar'} },
  { path: 'settings', component: SettingsPage, canActivate: [AuthGuard], data: { title: 'Settings'} },
  { path: 'helper', component: HelperPage, canActivate: [AuthGuard], data: { title: 'Helper'} },
  
  // Catch-all
  { path: '**', pathMatch: 'full', component: ErrorPage, data: { title: 'Error Page'} },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})


export class AppRoutingModule { }
