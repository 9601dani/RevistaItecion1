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
@WebServlet("/saveAnuncioText")
public class SaveAnuncio extends HttpServlet {

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
        System.out.println("body:");
        System.out.println(body);
        Anuncio anuncio= new AnuncioConverter(Anuncio.class).fromJson(body);
        BigDecimal cantidad= new AnuncioDaoImpl().precioAnuncio(anuncio.getNombre_tipo());
        BigDecimal to= new BigDecimal(request.getParameter("dias"));
        BigDecimal total= to.multiply(cantidad);
        anuncio.setTotal_pago(total );
        
        String result= new AnuncioDaoImpl().registrar(anuncio);
        RespuestaConverter converter3= new RespuestaConverter(Respuesta.class);
        if(result.equals("yes")){
            response.getWriter().append(converter3.toJson(new Respuesta(total.toString())));
        }else{
            response.getWriter().append(converter3.toJson(new Respuesta("no")));
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
