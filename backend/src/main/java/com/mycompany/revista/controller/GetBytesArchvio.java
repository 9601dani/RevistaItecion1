/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.revista.controller;

import com.mycompany.revista.converter.FinalFile2Converter;
import com.mycompany.revista.converter.FinalFileConverter;
import com.mycompany.revista.modelsE.FinalFile;
import com.mycompany.revista.modelsE.FinalFile2;
import java.io.BufferedReader;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author daniel
 */
@WebServlet("/getBytes")
public class GetBytesArchvio extends HttpServlet {


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
               System.out.println("jeje");
        BufferedReader reader = request.getReader();
        String body = "";
        String line = reader.readLine();
        while (line != null) {
            body = body + line;
            line = reader.readLine();
        }
        System.out.println("body:");
        System.out.println(body);
        FinalFileConverter converter= new FinalFileConverter(FinalFile.class);
        System.out.println("problema1");
        FinalFile et= converter.fromJson(body);
        System.out.println("problema2");
        System.out.println(et.getArchivo());
        FinalFile2Converter converter2= new FinalFile2Converter(FinalFile2.class);
        byte[] byt=et.getArchivo();
      /*  for(int i=0; i<byt.length;i++){
            System.out.println(byt[i]);
            
        }*/
        String j= new String(byt);
        System.out.println("*** "+j);
        response.getWriter().write(converter2.toJson(new FinalFile2(j)));
        
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
