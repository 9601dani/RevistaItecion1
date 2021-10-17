/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.revista.controller;

import com.mycompany.revista.clases.Etiqueta;
import com.mycompany.revista.clases.Revista;
import com.mycompany.revista.converter.RevistaForUserConverter;
import com.mycompany.revista.dao.EtiquetaDaoImpl;
import com.mycompany.revista.dao.RevistaDaoImpl;
import static com.mycompany.revista.dao.RevistaDaoImpl.toJsonRev;
import com.mycompany.revista.modelsE.RevistaInfoForUser;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
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
@WebServlet("/getRevistasUser")
public class GetRevistasUser extends HttpServlet {


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
        System.out.println("VOY A MANDAR REVITSAS PARA EL USUARIO");
         ArrayList<Revista> listA= new ArrayList<Revista>();
        listA = new RevistaDaoImpl().listarTodos();
        if (listA != null) {
            System.out.println("mande el json "+listA.size());
             response.getWriter().write(toJsonRev(listA));
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
        try {
            System.out.println("VAMOS A MANDAR LA INFO");
            System.out.println(request.getParameter("id"));
            
            ResultSet datosRev= new RevistaDaoImpl().BuscarUnaRevista(Integer.parseInt(request.getParameter("id")));
            ArrayList<Etiqueta> et= new EtiquetaDaoImpl().getETForRev(Integer.parseInt(request.getParameter("id")));
            int cantidad= new RevistaDaoImpl().Cantidad_Likes(Integer.parseInt(request.getParameter("id")));
            if(datosRev.next()){
            RevistaInfoForUser nrev= new RevistaInfoForUser(datosRev.getString("descripcion"),datosRev.getString("nombre_categoria"),et,datosRev.getString("nombre_usuario"),cantidad);
            RevistaForUserConverter converter= new RevistaForUserConverter(RevistaInfoForUser.class);  
            response.getWriter().append(converter.toJson(nrev));
            }
            
            
            
            /*
            if (listA != null) {
            System.out.println("mande el json "+listA.size());
            response.getWriter().write(toJsonRev(listA));
            } else {
            System.out.println("no hay info");
            }*/
        } catch (SQLException ex) {
            
            System.out.println("error en GetRevistasUser :/");
            System.out.println(ex);
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
