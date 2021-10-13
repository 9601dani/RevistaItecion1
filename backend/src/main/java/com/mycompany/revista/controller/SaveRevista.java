/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.revista.controller;

import com.mycompany.revista.clases.Revista;
import com.mycompany.revista.converter.RevistaConverter;
import com.mycompany.revista.dao.RevistaDaoImpl;
import java.io.BufferedReader;
import java.io.FileInputStream;
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
@WebServlet("/saveRevista")
public class SaveRevista extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("VAMOS A GUARDAR UNA REVISTA");
        BufferedReader reader = request.getReader();
        String body = "";
        String line = reader.readLine();
        while (line != null) {
            body = body + line;
            line = reader.readLine();
        }
        System.out.println("body:");
        System.out.println(body);
        RevistaConverter converter = new RevistaConverter(Revista.class);
        System.out.println("error1");
        Revista rev = converter.fromJson(body);
        System.out.println("aqui jejeje");
       String result = new RevistaDaoImpl().registrar(rev);
      System.out.println(result+" --------->");
       if (result.equalsIgnoreCase("yes")) {
           response.getWriter().append(converter.toJson(rev));
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
