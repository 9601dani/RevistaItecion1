/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.revista.controller;

import com.mycompany.revista.clases.Categoria;
import com.mycompany.revista.converter.RespuestaConverter;
import com.mycompany.revista.dao.EtiquetaDaoImpl;
import com.mycompany.revista.modelsE.Respuesta;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author daniel
 */
@WebServlet("/cambiosCategoria")
public class DeleteCategoria extends HttpServlet {

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
       String result= new EtiquetaDaoImpl().deleteCategoria(new Categoria(request.getParameter("categoria")));
       if(result.equals("yes")){
           response.getWriter().append(new RespuestaConverter(Respuesta.class).toJson(new Respuesta(request.getParameter("categoria"))));
       }else{
           response.getWriter().append(new RespuestaConverter(Respuesta.class).toJson(new Respuesta(request.getParameter("categoria"))));
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
        System.out.println(request.getParameter("categoria"));
        System.out.println(request.getParameter("categoriaN"));
        String result= new EtiquetaDaoImpl().updateCategoria(request.getParameter("categoria"),request.getParameter("categoriaN"));
       if(result.equals("yes")){
           response.getWriter().append(new RespuestaConverter(Respuesta.class).toJson(new Respuesta(request.getParameter("categoriaN"))));
       }else{
           response.getWriter().append(new RespuestaConverter(Respuesta.class).toJson(new Respuesta(request.getParameter("categoriaN"))));
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
