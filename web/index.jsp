<%@page contentType="text/html" pageEncoding="UTF-8" language="java" import="java.util.List, java.util.ArrayList, Lab7.AreaCheckServlet"%>

<!DOCTYPE html>

<head>
    <link rel="stylesheet" href="main.css">
    <meta charset="UTF-8">
    <title>Form</title>
    <script src="iscript.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
</head>

<body>

<form action="" id="sender" method="post" onsubmit="return checkValues();">
    <table>
        <tr>
            <td>
                <label for="radius">X: </label>
                <select required id="x_coord" name="x_coord">
                  <option value="-4">-4</option>
                  <option value="-3">-3</option>
                  <option value="-2">-2</option>
                  <option value="-1">-1</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>

                </select>
            </td>
            <td>
                Y:<input id="y_coord" type="text" required name="y_coord" class="indent">

            </td>
        </tr>
        <tr>
            <td>
                R: <li>
                <ul><input type="checkbox" onclick="radioImitation(1)" name="chBox" value='1' checked>1 </ul>
                <ul><input type="checkbox" onclick="radioImitation(1.5)" name="chBox" value='1.5'>1.5 </ul>
                <ul><input type="checkbox" onclick="radioImitation(2)" name="chBox" value='2'>2 </ul>
                <ul><input type="checkbox" onclick="radioImitation(2.5)" name="chBox" value='2.5'>2.5 </ul>
                <ul><input type="checkbox" onclick="radioImitation(3)" name="chBox" value='3'>3 </ul>
            </li>

            </td>
            <td>
                <canvas class="brd" id="graph" onclick="setPoint(event)" width="600" height="600"></canvas>
                
            </td>
        </tr>
    </table>
    <input type="submit" value="Отправить">
</form>
<h3 class=" h3_first h3_second" align="center"> Points</h3>
<div style="height: calc(100vh - 200px); overflow-y: scroll;">
  <div id="for_adding" align="right">
  </div>
</div>

<%
        List<AreaCheckServlet.Point> list=(ArrayList<AreaCheckServlet.Point>)getServletConfig().getServletContext().getAttribute("list");

        if(list!=null){
    out.println("<table border=\"1\" bordercolor=\"red\" >");
    out.println("<tr>");
        out.println("<td>");
            out.println("X coordinate");
            out.println("</td>");
        out.println("<td>");
            out.println("Y coordinate");
            out.println("</td>");
        out.println("<td>");
            out.println("Radius");
            out.println("</td>");
        out.println("<td>");
            out.println("Entrance");
            out.println("</td>");
        out.println("</tr>");

        for(int i=0;i<list.size();i++){
    out.println("<tr>");
        out.println("<td>");
            out.println(list.get(i).x);
            out.println("</td>");
        out.println("<td>");
            out.println(list.get(i).y);
            out.println("</td>");
        out.println("<td>");
            out.println(list.get(i).R);
            out.println("</td>");
        out.println("<td>");

            if(list.get(i).isInArea){
            out.println("Yes");
            }
            else{
            out.println("No");
            }

            out.println("</td>");
        out.println("</tr>");
    }
    out.println("</table>");
    }
   %>
</body>

