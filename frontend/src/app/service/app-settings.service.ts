import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppSettings {
	public appTheme: string = '';
	public appDarkMode: boolean = false;
	
	public appThemePanelNone: boolean = false;
	public appBoxedLayout: boolean = false;
  public appHeaderNone: boolean = false;
  public appTopNav: boolean = false;
  public appFooter: boolean = false;
  
  public appSidebarNone: boolean = false;
  public appSidebarMinified: boolean = false;
  public appSidebarMobileToggled: boolean = false;
  
  public appContentClass: string = '';
  public appContentFullHeight: boolean = false;
  public appContentFullWidth: boolean = false;
  
  public appVh100:boolean = false;
}