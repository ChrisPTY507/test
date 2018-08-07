function SFR03_nueva_orden()
{

  //Browsers.Item(btChrome).Navigate("https://pssgui.copauat.travel.airservices.svcs.entsvcs.com/pssgui/home/res-dashboard");
  
  Aliases.browser.pagePssguiCopauatTravelAirservic5.panel.panel.panel2.panel.panel.textnode.Click();
  Aliases.browser.pagePssguiCopauatTravelAirservic5.panel.panel.panel2.panel.panel.panel.innerHTML = "PTY - PTY ATO";
  Aliases.browser.pagePssguiCopauatTravelAirservic5.panel2.panel.panel.panel.panel2.panel.innerHTML = "PTY ATO";
  Aliases.browser.pagePssguiCopauatTravelAirservic5.panel2.panel.panel.panel.panel.panel.innerHTML = "USD";
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.pagePssguiCopauatTravelAirservic5.panel2.panel.panel.buttonOk.Click();
  //Sets the text 'PTY' in the 'searchboxFlInput81' text editor.
  Aliases.browser.pagePssguiCopauatTravelAirservic5.panel.panel.panel.panel.panel.panel.formScheduleForm.panel.panel.panel.panel.panel.panel.panel.panel.searchboxFlInput81.SetText("PTY");
  //Enters '[Enter]' in the 'searchboxFlInput81' object.
  Aliases.browser.pagePssguiCopauatTravelAirservic5.panel.panel.panel.panel.panel.panel.formScheduleForm.panel.panel.panel.panel.panel.panel.panel.panel.searchboxFlInput81.Keys("[Enter]");
  //Sets the text 'MIA' in the 'searchboxFlInput' text editor.
  Aliases.browser.pagePssguiCopauatTravelAirservic5.panel.panel.panel.panel.panel.panel.formScheduleForm.panel.panel.panel.panel.panel.panel.panel.panel.panel.searchboxFlInput.SetText("MIA");
  //Enters '[Enter]' in the 'searchboxFlInput' object.
  Aliases.browser.pagePssguiCopauatTravelAirservic5.panel.panel.panel.panel.panel.panel.formScheduleForm.panel.panel.panel.panel.panel.panel.panel.panel.panel.searchboxFlInput.Keys("[Enter]");
  //Sets the text '9/6/2018' in the 'textbox' text editor.
  Aliases.browser.pagePssguiCopauatTravelAirservic5.panel.panel.panel.panel.panel.panel.formScheduleForm.panel.panel.panel.panel.panel.panel.panel.textbox.SetText("9/6/2018");
  Aliases.browser.pagePssguiCopauatTravelAirservic5.panel.panel.panel.panel.panel.panel.panel2.buttonSearch.scrollIntoView();
  //Clicks at point (935, 586) of the 'buttonSearch' object.
  Aliases.browser.pagePssguiCopauatTravelAirservic5.panel.panel.panel.panel.panel.panel.panel2.buttonSearch.Click(935, 586);

}