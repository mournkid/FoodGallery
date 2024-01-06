<%@ page contentType="text/html; charset=iso-8859-1" language="java" errorPage="" %>
<%@ page session="true" %>
<%
if (request.getParameter("term")!=null)
{
	if (request.getParameter("term").equals("1"))
	{
		out.print("[{\"label\": \"FU 12599\", \"path\": \"./FU 12599.mov\"},{\"label\": \"FU 10706\", \"path\": \"./FU 10706.mov\"}]");
	}
	else if (request.getParameter("term").equals("12"))
	{
		out.print("[{\"label\": \"FU 12599\", \"path\": \"./FU 12599.mov\"}]");
	}
	else if (request.getParameter("term").equals("10"))
	{
		out.print("[{\"label\": \"FU 10706\", \"path\": \"./FU 10706.mov\"}]");
	}
	else if (request.getParameter("term").equals("125"))
	{
		out.print("[{\"label\": \"FU 12599\", \"path\": \"./FU 12599.mov\"}]");
	}
	else if (request.getParameter("term").equals("1259"))
	{
		out.print("[{\"label\": \"FU 12599\", \"path\": \"./FU 12599.mov\"}]");
	}
	else if (request.getParameter("term").equals("12599"))
	{
		out.print("[{\"label\": \"FU 12599\", \"path\": \"./FU 12599.mov\"}]");
	}
	else if (request.getParameter("term").equals("107"))
	{
		out.print("[{\"label\": \"FU 10706\", \"path\": \"./FU 10706.mov\"}]");
	}
	else if (request.getParameter("term").equals("1070"))
	{
		out.print("[{\"label\": \"FU 10706\", \"path\": \"./FU 10706.mov\"}]");
	}
	else if (request.getParameter("term").equals("10706"))
	{
		out.print("[{\"label\": \"FU 10706\", \"path\": \"./FU 10706.mov\"}]");
	}
	else if (request.getParameter("term").equals("8"))
	{
		out.print("[{\"label\": \"FU 8486\", \"path\": \"./FU 8486.mov\"}]");
	}
	else if (request.getParameter("term").equals("84"))
	{
		out.print("[{\"label\": \"FU 8486\", \"path\": \"./FU 8486.mov\"}]");
	}
	else if (request.getParameter("term").equals("848"))
	{
		out.print("[{\"label\": \"FU 8486\", \"path\": \"./FU 8486.mov\"}]");
	}
	else if (request.getParameter("term").equals("8486"))
	{
		out.print("[{\"label\": \"FU 8486\", \"path\": \"./FU 8486.mov\"}]");
	}
	else if (request.getParameter("term").equals("7"))
	{
		out.print("[{\"label\": \"FU 7623\", \"path\": \"./FU 7623.mov\"}]");
	}
	else if (request.getParameter("term").equals("76"))
	{
		out.print("[{\"label\": \"FU 7623\", \"path\": \"./FU 7623.mov\"}]");
	}
	else if (request.getParameter("term").equals("762"))
	{
		out.print("[{\"label\": \"FU 7623\", \"path\": \"./FU 7623.mov\"}]");
	}
	else if (request.getParameter("term").equals("7623"))
	{
		out.print("[{\"label\": \"FU 7623\", \"path\": \"./FU 7623.mov\"}]");
	}
	else if (request.getParameter("term").equals("4"))
	{
		out.print("[{\"label\": \"FU 4468\", \"path\": \"./FU 4468.mov\"}]");
	}
	else if (request.getParameter("term").equals("44"))
	{
		out.print("[{\"label\": \"FU 4468\", \"path\": \"./FU 4468.mov\"}]");
	}
	else if (request.getParameter("term").equals("446"))
	{
		out.print("[{\"label\": \"FU 4468\", \"path\": \"./FU 4468.mov\"}]");
	}
	else if (request.getParameter("term").equals("4468"))
	{
		out.print("[{\"label\": \"FU 4468\", \"path\": \"./FU 4468.mov\"}]");
	}
	else if (request.getParameter("term").equals("2"))
	{
		out.print("[{\"label\": \"FU 2912\", \"path\": \"./FU 2912.mov\"}]");
	}
	else if (request.getParameter("term").equals("29"))
	{
		out.print("[{\"label\": \"FU 2912\", \"path\": \"./FU 2912.mov\"}]");
	}
	else if (request.getParameter("term").equals("291"))
	{
		out.print("[{\"label\": \"FU 2912\", \"path\": \"./FU 2912.mov\"}]");
	}
	else if (request.getParameter("term").equals("2912"))
	{
		out.print("[{\"label\": \"FU 2912\", \"path\": \"./FU 2912.mov\"}]");
	}
	else
	{
		out.print("[{\"label\": \"NAO ENCONTRADO\"}]");
	}
}
%>