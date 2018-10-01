<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<spring:url value="/resources/logo.png" var="logo" />
<spring:url value="/resources/Site.css" var="siteCss" />
<spring:url value="/resources/menu.js" var="menuJs" />
<link href="${siteCss}" rel="stylesheet"/>
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="${menuJs}"></script>
<div id="header">
	<img id="logo" src="${logo}"/>
	<div id="menuContainer"></div>
</div>