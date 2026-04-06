import { Component, Output, HostBinding, AfterViewInit, EventEmitter } 		 from '@angular/core';
import { AppVariablesService } from '../../service/app-variables.service';
import { AppSettings } from '../../service/app-settings.service';

declare var bootstrap: any;

@Component({
  selector: 'theme-panel',
  templateUrl: './theme-panel.component.html',
  host: {
  	'class': 'theme-panel'
  },
  standalone: false
})

export class ThemePanelComponent implements AfterViewInit {
	@HostBinding('class.active') get hostClasses() { return this.active; }
	@Output() appDarkModeChanged = new EventEmitter<boolean>();
	@Output() appThemeChanged = new EventEmitter<boolean>();
	
	active: boolean = false;
	appVariables = this.appVariablesService.getAppVariables();
	appThemeDarkModeCheckbox: boolean = false;
	appRtlModeCheckbox: boolean = false;
	
	themeList = [
	 { name: 'Pink', bgClass: 'bg-pink', themeClass: 'theme-pink' },
	 { name: 'Red', bgClass: 'bg-red', themeClass: 'theme-red' },
	 { name: 'Orange', bgClass: 'bg-warning', themeClass: 'theme-warning' },
	 { name: 'Yellow', bgClass: 'bg-yellow', themeClass: 'theme-yellow' },
	 { name: 'Lime', bgClass: 'bg-lime', themeClass: 'theme-lime' },
	 { name: 'Green', bgClass: 'bg-green', themeClass: 'theme-green' },
	 { name: 'Teal', bgClass: 'bg-teal', themeClass: 'theme-teal' },
	 { name: 'Cyan', bgClass: 'bg-info', themeClass: 'theme-info' },
	 { name: 'Default', bgClass: 'bg-primary', themeClass: 'theme-primary' },
	 { name: 'Purple', bgClass: 'bg-purple', themeClass: 'theme-purple' },
	 { name: 'Indigo', bgClass: 'bg-indigo', themeClass: 'theme-indigo' },
	 { name: 'Gray', bgClass: 'bg-gray-200', themeClass: 'theme-gray-200' }
	];
	
	constructor(public appSettings: AppSettings, private appVariablesService: AppVariablesService) { }
	
	ngAfterViewInit() {
		var elm = document.querySelectorAll('[data-bs-toggle="tooltip"]');
		
		for (var i = 0; i < elm.length; i++) {
			new bootstrap.Tooltip(elm[i]);
		}
		if (localStorage) {
			if (localStorage['appDarkMode'] && localStorage['appDarkMode'] === 'true') {
				this.appThemeDarkModeCheckbox = true;
				this.appDarkModeChanged.emit(true);
			}
			if (localStorage['appTheme']) {
				this.handleSetTheme(localStorage['appTheme']);
			}
			if (localStorage['appThemePanelActive']) {
				this.active = (localStorage['appThemePanelActive'] == 'true') ? true : false;
			}
			if (localStorage['appRtlMode'] === 'true') {
				this.appRtlModeCheckbox = true;
				document.documentElement.setAttribute('dir', 'rtl');
			}
		}
	}
	
	handleToggleThemePanel(event: MouseEvent) {
		event.preventDefault();
		
		if (localStorage) {
			localStorage['appThemePanelActive'] = !this.active;
		}
		this.active = !this.active;
	}
	
	handleToggleTheme(event: MouseEvent, themeClass: string) {
		event.preventDefault();
		this.handleSetTheme(themeClass);
	}
	
	
	handleToggleDarkMode(e) {
		this.appSettings.appDarkMode = e.srcElement.checked;
		this.appDarkModeChanged.emit(true);
		if (localStorage) {
			localStorage['appDarkMode'] = e.srcElement.checked;
		}
	}

	handleSetTheme(themeClass: string) {
		this.appSettings.appTheme = themeClass;
		if (localStorage) {
			localStorage['appTheme'] = themeClass;
		}
		for (var x = 0; x < document.body.classList.length; x++) {
			var targetClass = document.body.classList[x];
			if (targetClass.search('theme-') > -1) {
				document.body.classList.remove(targetClass);
			}
		}
	
		document.body.classList.add(themeClass);
		this.appVariables = this.appVariablesService.getAppVariables();
		this.appVariablesService.variablesReload.emit();
	}
	
	handleToggleRtlMode(e: any) {
		const isRtl = e.srcElement.checked;
		if (isRtl) {
			document.documentElement.setAttribute('dir', 'rtl');
		} else {
			document.documentElement.removeAttribute('dir');
		}
		if (localStorage) {
			localStorage.setItem('appRtlMode', isRtl.toString());
		}
	}
}
