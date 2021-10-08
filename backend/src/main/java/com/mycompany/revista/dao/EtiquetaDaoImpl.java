/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.dao;

import com.mycompany.revista.clases.Etiqueta;
import com.mycompany.revista.conexion.Conexion;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author daniel
 */
public class EtiquetaDaoImpl implements EtiquetaDao{
private final String SAVE = "INSERT INTO etiqueta VALUES (?)"; 
    public EtiquetaDaoImpl() {
        new Conexion();
    }
    
    

    @Override
    public ArrayList<Etiqueta> listarTodos() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String registrar(Etiqueta t) {
        try{
            PreparedStatement query= Conexion.getInstancia().prepareStatement(SAVE);
            query.setString(1,t.getNombre_etiqueta());
            query.executeUpdate();
            return "yes";
        }catch(SQLException e){
            System.out.println(e);
            return "no";
        }
    }

    @Override
    public String actualizar(Etiqueta t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void eliminar(Etiqueta t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
