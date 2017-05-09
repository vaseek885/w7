package com.labwork.servlets;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by evgeniy on 09.05.17.
 */
public class AreaCheckServlet extends HttpServlet {

    private ServletConfig config;

    @Override
    public void init(ServletConfig config){
        this.config = config;
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {


    }

    @Override
    public void destroy(){}





}
