/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.mycompany.revista.controller;

import static com.mycompany.revista.Enum.TIP_USUARIO.getTypeUse;
import com.mycompany.revista.clases.Usuario;
import com.mycompany.revista.conexion.Conexion;
import com.mycompany.revista.converter.UsConverter;
import com.mycompany.revista.dao.UsuarioDaoImpl;
import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Blob;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
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
@WebServlet("/infoUser")
public class GetInfoUser extends HttpServlet {

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
        UsConverter converter = new UsConverter(Usuario.class) {
        };
        Usuario usuario = converter.fromJson(body);
        ResultSet result = new UsuarioDaoImpl().obtenerInfo(usuario);
        if(result!=null){
                try {
                    Usuario userN= new Usuario(result.getString("nombre_usuario"),result.getString("password"),result.getString("nombre"), result.getString("des_personal"), this.verificarNull(result.getString("des_hobbies")),result.getString("foto"),getTypeUse(result.getString("tipo_usuario")));
                    response.getWriter().append(converter.toJson(userN));
                } catch (SQLException ex) {
                    System.out.println(ex);
                }
        }else {
        }
    }
    
    private String verificarNull(String dato){
        if(dato==null){
            return " ";
        }
        return dato;
        
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
