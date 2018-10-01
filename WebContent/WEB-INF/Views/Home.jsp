<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<spring:url value="/resources/Site.css" var="siteCss" />
<spring:url value="/resources/menu1.js" var="menuJs" />

<html>
<head>
<meta charset="ISO-8859-1"/>
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="${menuJs}"></script>
<link href="${siteCss}" rel="stylesheet"/>

<title>Finley McIlwaine Photography</title>
</head>

<body>
<%@ include file="Header.jsp" %>
<div id="reactContainer"></div>
</body>
</html>