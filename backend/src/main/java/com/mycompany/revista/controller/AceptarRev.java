/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.revista.controller;

import static com.mycompany.revista.Enum.ESTADO_REV.getRev1;
import com.mycompany.revista.clases.Etiqueta;
import com.mycompany.revista.clases.Revista;
import com.mycompany.revista.converter.EtiquetaConverter;
import com.mycompany.revista.dao.RevistaDaoImpl;
import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author daniel
 */
@WebServlet("/aceptarRev")
public class AceptarRev extends HttpServlet {


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
        System.out.println("el admin esta aceptando una revista, es "+ request.getParameter("id"));
        Revista rev= new Revista(Integer.parseInt(request.getParameter("id")), request.getParameter("fecha_acep"),getRev1(request.getParameter("estadoRev")),new BigDecimal(request.getParameter("costo")), request.getParameter("fecha_mod"));
        RevistaDaoImpl revG= new RevistaDaoImpl();
         EtiquetaConverter converter = new EtiquetaConverter(Etiqueta.class);
        String respuesta= revG.AceptarRevista(rev);
         if (respuesta.equalsIgnoreCase("yes")) {
                response.getWriter().append(converter.toJson(new Etiqueta("yes")));
                System.out.println("se guardo");
            } else {
                System.out.println("no se guardo");
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
