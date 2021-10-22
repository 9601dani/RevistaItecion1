/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.revista.controller;

import com.mycompany.revista.clases.Anuncio;
import com.mycompany.revista.converter.AnuncioConverter;
import com.mycompany.revista.converter.RespuestaConverter;
import com.mycompany.revista.dao.AnuncioDaoImpl;
import com.mycompany.revista.modelsE.Respuesta;
import java.io.BufferedReader;
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
@WebServlet("/updateAn")
public class UpdateAnuncio extends HttpServlet {


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
       //UPDATE DE ANUNCIOS
       
       String result= new AnuncioDaoImpl().UpdateAnuncio(request.getParameter("id"), request.getParameter("descripcion"), request.getParameter("texto"), request.getParameter("url"));
       RespuestaConverter converter = new RespuestaConverter(Respuesta.class);
       if(result.equalsIgnoreCase("yes")){
           response.getWriter().append(converter.toJson(new Respuesta("yes")));
       }else{
           response.getWriter().append(converter.toJson(new Respuesta("no")));
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
         BufferedReader reader = request.getReader();
        String body = "";
        String line = reader.readLine();
        while (line != null) {
            body = body + line;
            line = reader.readLine();
        }
        Anuncio anun= new AnuncioConverter(Anuncio.class).fromJson(body);
        String result= new AnuncioDaoImpl().updateImg(anun.getContenido(), request.getParameter("id"));
        if(result.equals("yes")){
            response.getWriter().append(new RespuestaConverter(Respuesta.class).toJson(new Respuesta("yes")));
        }else{
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
