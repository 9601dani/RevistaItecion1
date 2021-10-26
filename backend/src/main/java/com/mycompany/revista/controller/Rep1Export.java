/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.revista.controller;

import com.mycompany.revista.converter.RespuestaConverter;
import com.mycompany.revista.modelsE.Respuesta;
import com.mycompany.revista.reports.ReportService;
import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDate;
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
@WebServlet("/exportReporte1")
public class Rep1Export extends HttpServlet {

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
        System.out.println("aqui 1");
        try {
            ReportService reportService = null;
            System.out.println("aqui2");
            
            response.setContentType("application/pdf");
            response.setHeader("Content-disposition", "attachment; filename=reporte.pdf");
            
            String report = request.getParameter("report");
            System.out.println("---"+request.getParameter("user"));
            reportService = new ReportService();
            String fechaI = request.getParameter("fechaI");
            String fechaF = request.getParameter("fechaF");
            System.out.println("aqui");
            reportService.ExportReportWithParams(response.getOutputStream(),LocalDate.parse(fechaI), LocalDate.parse(fechaF), request.getParameter("user"),"Rep1.jasper");
            System.out.println(response.getOutputStream());
            
        } catch (JRException ex) {
            System.out.println("error");
            response.getWriter().append(new RespuestaConverter(Respuesta.class).toJson(new Respuesta("no")));
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
            ReportService reportService = null;
            
            response.setContentType("application/pdf");
            response.setHeader("Content-disposition", "attachment; filename=reporte.pdf");
            
            String report = request.getParameter("report");
            System.out.println("---"+request.getParameter("user"));
            reportService = new ReportService();
            String nom_rev = request.getParameter("nom_rev");
            reportService.ExportReportWithParamsRep1(response.getOutputStream(),nom_rev, request.getParameter("user"),"Rep1ForRev.jasper");
        } catch (JRException ex) {
            response.getWriter().append(new RespuestaConverter(Respuesta.class).toJson(new Respuesta("no")));
        } catch (IOException ex){
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
