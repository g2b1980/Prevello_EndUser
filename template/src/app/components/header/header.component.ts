import { Component, Input, Output, EventEmitter, Renderer2, OnDestroy } from '@angular/core';
import { AppSettings } from '../../service/app-settings.service';

declare var slideToggle: any;

interface NotificationData {
  icon: string;
  img: string;
  title: string;
  time: string;
}

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  host: {
  	class: 'app-header'
  },
  standalone: false
})
export class HeaderComponent {
	notificationData : NotificationData[] = [{
		icon: 'fa fa-receipt fa-lg fa-fw text-success',
		img: '',
		title: 'Your store has a new order for 2 items totaling $1,299.00',
		time: 'just now'
	},{
		icon: 'far fa-user-circle fa-lg fa-fw text-muted',
		img: '',
		title: '3 new customer account is created',
		time: '2 minutes ago'
	},{
		icon: '',
		img: '/assets/img/icon/android.svg',
		title: 'Your android application has been approved',
		time: '5 minutes ago'
	},{
		icon: '',
		img: '/assets/img/icon/paypal.svg',
		title: 'Paypal payment method has been enabled for your store',
		time: '10 minutes ago'
	}];
	
	
	constructor(public appSettings: AppSettings) { }
	
	handleToggleSidebarMinify(event: MouseEvent) {
		event.preventDefault();
		
		if (!this.appSettings.appSidebarNone) {
			this.appSettings.appSidebarMinified = !this.appSettings.appSidebarMinified;
		}
	}
	
	handleToggleMobileSidebar(event: MouseEvent) {
		event.preventDefault();
		
		if (!(this.appSettings.appSidebarNone && this.appSettings.appTopNav)) {
			this.appSettings.appSidebarMobileToggled = !this.appSettings.appSidebarMobileToggled;
		} else {
			slideToggle(document.querySelector('.app-top-nav'));
			window.scrollTo(0, 0);
		}
	}
	
	handleAppToggleClass(event: MouseEvent, className: string) {
		event.preventDefault();
		
		var elm = document.getElementById('app');
		if (elm) {
			elm.classList.toggle(className);
		}
	}
}
