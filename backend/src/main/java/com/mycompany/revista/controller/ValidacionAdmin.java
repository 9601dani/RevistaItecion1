/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.revista.controller;

import com.mycompany.revista.Enum.ESTADO_ADM;
import com.mycompany.revista.clases.Administrador;
import com.mycompany.revista.converter.AdminConverter;
import com.mycompany.revista.converter.UsConverter;
import com.mycompany.revista.dao.AdminDaoImpl;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author daniel
 */
@WebServlet("/loginAdmin")
public class ValidacionAdmin extends HttpServlet {
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
         System.out.println("METODO PARA VALIDAR ADMIN ");
        BufferedReader reader = request.getReader();
        String body = "";
        System.out.println(" pase por aqui");
        String line = reader.readLine();
        while (line != null) {
            body = body + line;
            line = reader.readLine();
        }
        AdminConverter converter = new AdminConverter(Administrador.class);
       Administrador admin = converter.fromJson(body);
        ResultSet result = new AdminDaoImpl().consultarLogin(admin);
        if(result!=null){
                try {
                    Administrador userA = new Administrador(result.getString("nombre_usuario"),result.getString("password"),result.getString("nombre"),ESTADO_ADM.getAdmin(result.getString("estado")));
                    if(userA.getEstado()==ESTADO_ADM.ACTIVO){
                        System.out.println("yes");
                        response.getWriter().append(converter.toJson(userA));
                    }    
                } catch (SQLException ex) {
                    System.out.println(ex);
                }
        }else {
                System.out.println("no se inicio");
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
