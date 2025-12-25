document.querySelectorAll(".bkmrk ul > li > a").forEach(a =>
{
    try
    {
        if (a.hasAttribute("icon"))
        {
            a.style.setProperty("background-image", "url('" + a.getAttribute("icon") + "')");
            a.removeAttribute("icon");
        }

    } catch (e) { }
});