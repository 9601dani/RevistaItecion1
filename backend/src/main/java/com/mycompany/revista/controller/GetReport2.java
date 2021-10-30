/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.revista.controller;

import com.mycompany.revista.clases.ABeans;
import com.mycompany.revista.clases.Usuario;
import com.mycompany.revista.converter.RespuestaConverter;
import static com.mycompany.revista.dao.RevistaDaoImpl.toJsonABeansOficial;
import com.mycompany.revista.modelsE.Report2User;
import com.mycompany.revista.modelsE.Respuesta;
import com.mycompany.revista.reports.ReportService;
import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDate;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.jasperreports.engine.JRException;

/**
 *
 * @author daniel
 */
@WebServlet("/report2User")
public class GetReport2 extends HttpServlet {

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       try {
            Report2User reportService = null;
            
            response.setContentType("application/pdf");
            response.setHeader("Content-disposition", "attachment; filename=reporte.pdf");
            
            String report = request.getParameter("report");
            System.out.println("---"+request.getParameter("user"));
            reportService = new Report2User();
            String fechaI = request.getParameter("fechaI");
            String fechaF = request.getParameter("fechaF");
             if (fechaI.equals(null)) {
                    fechaI = "1900-01-01";
                }
                if (fechaF.equals(null)) {
                    fechaF = "2031-01-01";
                }
                
            String rep=   reportService.ReportSusForRev(new Usuario(request.getParameter("user")),LocalDate.parse(fechaI), LocalDate.parse(fechaF));
            System.out.println(rep);
            response.getWriter().append(new RespuestaConverter(Respuesta.class).toJson(new Respuesta(rep)));
            
        } catch (IOException ex){
            System.out.println("error2");
             response.getWriter().append(new RespuestaConverter(Respuesta.class).toJson(new Respuesta("no")));
        }
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            Report2User reportService = null;
            
            response.setContentType("application/pdf");
            response.setHeader("Content-disposition", "attachment; filename=reporte.pdf");
            
            String report = request.getParameter("report");
            System.out.println("---"+request.getParameter("user"));
            reportService = new Report2User();
            String fechaI = request.getParameter("fechaI");
            String fechaF = request.getParameter("fechaF");
             if (fechaI.equals(null)) {
                    fechaI = "1900-01-01";
                }
                if (fechaF.equals(null)) {
                    fechaF = "2031-01-01";
                }
                
            ArrayList<ABeans> result = reportService.ReportSusForRevHtml(new Usuario(request.getParameter("user")),LocalDate.parse(fechaI), LocalDate.parse(fechaF));
            response.getWriter().append(toJsonABeansOficial(result));
            
        } catch (IOException ex){
            System.out.println("error2");
             response.getWriter().append(new RespuestaConverter(Respuesta.class).toJson(new Respuesta("no")));
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
