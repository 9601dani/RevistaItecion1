/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.revista.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import static com.mycompany.revista.Enum.ESTADO_ADM.getAdmin;
import static com.mycompany.revista.Enum.TIP_USUARIO.getTypeUse;
import com.mycompany.revista.clases.Administrador;
import com.mycompany.revista.converter.AdminConverter;
import com.mycompany.revista.dao.AdminDaoImpl;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author daniel
 */
@WebServlet("/getAdmins")
public class GetInfoAdmin extends HttpServlet {

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
        System.out.println("OBTENIENDO LA INFO DE LOS USUARIOS");
        ArrayList<Administrador> listA= new ArrayList<Administrador>();
        AdminConverter converter = new AdminConverter(Administrador.class);
        ResultSet result = new AdminDaoImpl().getAll();
        if (result != null) {
            try {
                while(result.next()){
                    Administrador userN = new Administrador(result.getString("nombre_usuario"), result.getString("password"), result.getString("nombre"), getAdmin(result.getString("estado")));
                    listA.add(userN);
                    System.out.println(listA);
                }
                response.getWriter().write(this.toJson(listA));
            } catch (SQLException ex) {
                System.out.println(ex);
            }
        } else {
            System.out.println("no hay info");
        }
    }

    public String toJson(ArrayList<Administrador> object) {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        String string = "[";
        for (Administrador data : object) {
            string += gson.toJson(data, Administrador.class) +",";
        }
        string = string.substring(0, string.length() - 1) + "]";
        System.out.println("------->\n"+string);
        return string;
    }


        /**
         * Returns a short description of the servlet.
         *
         * @return a String containing servlet description
         */
        @Override
        public String getServletInfo
        
            () {
        return "Short description";
        }// </editor-fold>

    }
