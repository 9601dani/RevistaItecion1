/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.revista.controller;

import com.mycompany.revista.converter.RespuestaConverter;
import com.mycompany.revista.dao.ComentarioDaoImpl;
import static com.mycompany.revista.dao.ComentarioDaoImpl.toJsonCom;
import com.mycompany.revista.modelsE.ComentarioMostrar;
import com.mycompany.revista.modelsE.Report2User;
import com.mycompany.revista.modelsE.Respuesta;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author daniel
 */
@WebServlet("/getComentarios")
public class GetComentarios extends HttpServlet {

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
       ArrayList<ComentarioMostrar> listA = new ArrayList<ComentarioMostrar>();
       
        listA = new ComentarioDaoImpl().listarAlgunosForId(Integer.parseInt(request.getParameter("id_revista")));
        if (listA != null) {
            response.getWriter().write(toJsonCom(listA));
        } else {
            System.out.println("no hay info");
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
       /* ESTA ES UNA PRUEBA PARA EL GET DE LOS COMENTARIOS DE LAS REVISTAS DEL AUTOR, REPORTE*/
       String fechaI= request.getParameter("fechaI");
       String fechaF= request.getParameter("fechaF");
       String autor= request.getParameter("autor");
       try {
            Report2User reportService = null;
            
            response.setContentType("application/pdf");
            response.setHeader("Content-disposition", "attachment; filename=reporte.pdf");
            
            String report = request.getParameter("report");
            System.out.println("---"+request.getParameter("user"));
            reportService = new Report2User();
            
            String result=  reportService.printMagazineGainsReportExport(fechaI,fechaF);
            response.getWriter().append(new RespuestaConverter(Respuesta.class).toJson(new Respuesta(result)));
            
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
