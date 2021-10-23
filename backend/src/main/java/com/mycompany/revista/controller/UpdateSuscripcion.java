/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.revista.controller;

import com.mycompany.revista.clases.Suscripcion;
import com.mycompany.revista.converter.RespuestaConverter;
import com.mycompany.revista.converter.SuscripcionConverter;
import com.mycompany.revista.dao.SuscripcionDaoImpl;
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
@WebServlet("/updateSuscripcionFinal")
public class UpdateSuscripcion extends HttpServlet {


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
        SuscripcionConverter converter= new SuscripcionConverter(Suscripcion.class);
        Suscripcion suscrip= converter.fromJson(body);
        Suscripcion suscripcionPasada= new SuscripcionDaoImpl().getInfo(suscrip.getNombre_usuario(), suscrip.getId_revista());
        
        Suscripcion suscripf= new Suscripcion(suscrip.getId_suscripcion(),(suscrip.getValor_sus().add(suscripcionPasada.getValor_sus())),suscripcionPasada.getFecha_inicial(), suscrip.getFecha_final(), suscripcionPasada.getMe_gusta(), suscrip.getEstado_suscripcion(),suscripcionPasada.getNombre_usuario(),suscrip.getId_revista());
        String result= new SuscripcionDaoImpl().actualizar(suscripf);
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
