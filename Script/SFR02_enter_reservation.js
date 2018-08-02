function SFR02_enter_reservation()
{
  var TestedPage, CSSSelector, res;
  
  TestedPage = Sys.Browser("Chrome").Page("https://pssgui.copauat.travel.airservices.svcs.entsvcs.com/pssgui/landing");
  CSSSelector = "body > div > div > div.pssgui-app-content.ng-scope.layout-column.flex > div > md-content > md-grid-list > md-grid-tile:nth-child(1)";; 
  
  // Call the function
  res=TestedPage.QuerySelector(CSSSelector);
  
  // Check the result
  if (!strictEqual(res, null))
      // If the element was found, output its HTML code
      res.Click();
  else
      // If the element was not found, post a warning to the log
      Log.Warning("El elemento no se encontro.");
}