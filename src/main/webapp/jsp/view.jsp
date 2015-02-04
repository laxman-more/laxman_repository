<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
<%@ page import="javax.portlet.PortletSession" %>
<%@ page import="com.liferay.portal.model.Role" %>
<%@ page import="java.util.List" %>
<%@ page import="com.liferay.portal.kernel.util.WebKeys" %>
<%@ page import="com.liferay.portal.theme.ThemeDisplay" %>

<portlet:defineObjects />

<div ng-app="agentRegistrationPortletApp">
	<div ng-view=""></div>
</div>

<% out.println("<script>"); %>
	var liferayPortletPath = '<%= renderResponse.encodeURL(renderRequest.getContextPath()) %>' + '/app';
	
<% out.println("</script>"); %>

<% 
	ThemeDisplay themeDisplay = (ThemeDisplay) renderRequest.getAttribute(WebKeys.THEME_DISPLAY);
        
    List<Role> listRole = themeDisplay.getUser().getRoles();
   
   boolean isAdministrator = false;
	for(Role role : listRole )
	{
		String typeOfRole = role.getDescriptiveName();
		
		if ( typeOfRole.equals("Administrator") )
			isAdministrator = true;
		
	}
	
	if (!isAdministrator)	{
%>

<% out.println("<script>"); %>
	var liferayUserContext = '<%= renderRequest.getPortletSession().getAttribute("userContext", PortletSession.APPLICATION_SCOPE) %>';
<% out.println("</script>"); %>

<%
	}
%>

<%-- <A href="<portlet:renderURL><portlet:param name="jspPage" value="/app/views/EnterAgentDetails_VIEW2.html" /></portlet:renderURL>"
	target="_blank">Other JSP</A> --%>