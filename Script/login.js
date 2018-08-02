function Login()
{
 
   //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://pssgui.copauat.travel.airservices.svcs.entsvcs.com/");
  
  //Enters text in the text box.
  Aliases.browser.pagePssguiCopauatTravelAirservic.formMyform.textboxUser.SetText(Project.Variables.reservar_vuelo.Value("user"));
  //Enters text in the text box.
  Aliases.browser.pagePssguiCopauatTravelAirservic.formMyform.passwordboxPassword.SetText(Project.Variables.reservar_vuelo.Value("pass"));
  //Clicks the 'submitbuttonLogIn' button.
  Aliases.browser.pagePssguiCopauatTravelAirservic.formMyform.submitbuttonLogIn.ClickButton();
  
  if(Aliases.browser.pagePssguiCopauatTravelAirservic4.css){ 
    Aliases.browser.pagePssguiCopauatTravelAirservic4.css.Click();
  }

}