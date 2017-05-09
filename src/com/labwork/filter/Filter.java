package com.labwork.filter;

import javax.servlet.*;
import java.io.IOException;

/**
 * Created by evgeniy on 09.05.17.
 */
public class Filter implements javax.servlet.Filter {
    public void init(FilterConfig arg0) throws ServletException {}

    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {

        request.getRequestDispatcher("index.html").forward(request,response);
        return;

    }
    public void destroy() {}

}
