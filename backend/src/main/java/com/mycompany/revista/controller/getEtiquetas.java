/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.revista.controller;

import com.mycompany.revista.clases.Etiqueta;
import com.mycompany.revista.clases.Etiqueta_autor;
import com.mycompany.revista.converter.EAutorConverter;
import com.mycompany.revista.converter.EtiquetaConverter;
import com.mycompany.revista.dao.EAutorDaoImpl;
import static com.mycompany.revista.dao.EAutorDaoImpl.toJsonE;
import com.mycompany.revista.dao.EtiquetaDaoImpl;
import static com.mycompany.revista.dao.EtiquetaDaoImpl.toJsonET;
import java.io.BufferedReader;
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
@WebServlet("/getEtiqueta")
public class getEtiquetas extends HttpServlet {

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
        ArrayList<Etiqueta> listA= new ArrayList<Etiqueta>();
        listA = new EtiquetaDaoImpl().listarTodos();
        if (listA != null) {
             response.getWriter().write(toJsonET(listA));
        } else {
            System.out.println("no hay info");
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
