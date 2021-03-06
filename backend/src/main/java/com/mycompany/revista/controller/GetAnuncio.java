/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.revista.controller;

import com.mycompany.revista.clases.Anuncio;
import com.mycompany.revista.converter.AnuncioConverter;
import com.mycompany.revista.dao.AnuncioDaoImpl;
import static com.mycompany.revista.dao.AnuncioDaoImpl.toJsonAnun;
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
@WebServlet("/getAnuncio")
public class GetAnuncio extends HttpServlet {

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
        Anuncio n= new AnuncioDaoImpl().onlyOne();
        
        if(n.getId_anuncio()!=0){
            new AnuncioDaoImpl().changeApariciones(n.getId_anuncio(), (n.getApariciones()+1));
            AnuncioConverter converter = new AnuncioConverter(Anuncio.class);
            response.getWriter().append(converter.toJson(n));
        }else{
            System.out.println("error ");
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
        ArrayList<Anuncio> listA= new ArrayList<Anuncio>();
        listA= new AnuncioDaoImpl().listarTodos();
        if(listA.size()>=0){
            response.getWriter().append(toJsonAnun(listA));
        }else{
            System.out.println("no hay anuncios");
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
