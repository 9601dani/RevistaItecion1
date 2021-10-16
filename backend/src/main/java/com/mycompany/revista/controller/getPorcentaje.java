/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.revista.controller;

import com.mycompany.revista.clases.Etiqueta;
import com.mycompany.revista.clases.Porcentaje_soft;
import com.mycompany.revista.converter.EtiquetaConverter;
import com.mycompany.revista.converter.PorcentajeConverter;
import com.mycompany.revista.dao.PorcentajeDaoImpl;
import static com.mycompany.revista.dao.PorcentajeDaoImpl.toJsonPO;
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
@WebServlet("/porcentajeSoft")
public class getPorcentaje extends HttpServlet {

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
        System.out.println("ENVIANDO EL PORCENTAJE DEL SOFTWARE");
        ArrayList<Porcentaje_soft> listA = new ArrayList<Porcentaje_soft>();
        listA = new PorcentajeDaoImpl().listarTodos();
        if (listA != null) {
            response.getWriter().write(toJsonPO(listA));
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
        System.out.println("VAMOS A ACUTALIZAR AQUI");
        BufferedReader reader = request.getReader();
        String body = "";
        String line = reader.readLine();
        while (line != null) {
            body = body + line;
            line = reader.readLine();
        }
        System.out.println("body:");
        System.out.println(body);
        EtiquetaConverter converter1= new EtiquetaConverter(Etiqueta.class);
        PorcentajeConverter converter= new PorcentajeConverter(Porcentaje_soft.class);
        
        Porcentaje_soft porcentaje= converter.fromJson(body);
        System.out.println(porcentaje.getFecha_ultima_modificacion());
        System.out.println(porcentaje.getPorcentaje());
        System.out.println(porcentaje.getNombre_usuario());
       System.out.println(porcentaje.getId_porcentaje());
        String result= new PorcentajeDaoImpl().actualizar(porcentaje);
        if (result.equalsIgnoreCase("yes")) {
            response.getWriter().append(converter1.toJson(new Etiqueta(result)));
            System.out.println("se guardo");
        } else {
            System.out.println("no se guardo");
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
