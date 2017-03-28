using System.Web.Mvc;
using System.Web.Routing;

namespace Widgets.NG2
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            // Web side only shows the Help Pages
            routes.MapRoute(
                name: "Default",
                url: "",
                defaults: new { controller = "Help", action = "Index" }
            ).DataTokens = new RouteValueDictionary(new { area = "HelpPage" });
        }
    }
}
