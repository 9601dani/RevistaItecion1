/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.dao;

import static com.mycompany.revista.Enum.ESTADO_ADM.getAdmin;
import com.mycompany.revista.clases.Administrador;
import com.mycompany.revista.conexion.Conexion;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author daniel
 */
public class AdminDaoImpl implements AdminDao{
private final String SELECTLOGIN = "SELECT * FROM administrador WHERE nombre_usuario=?"; 
private final String SAVE = "INSERT INTO administrador VALUES (?,?,?,?)"; 
private final String SELECTALL = "SELECT * FROM administrador"; 
private final String UPDATE="UPDATE administrador SET password=?, nombre=?, estado=? WHERE nombre_usuario=?"; 
private final String DESACTIVATE ="UPDATE administrador SET estado=? WHERE nombre_usuario=?"; 
    
    public AdminDaoImpl(){
        new Conexion();
    }
    @Override
    public ArrayList listarTodos() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String registrar(Administrador t) {
        try{
            PreparedStatement query= Conexion.getInstancia().prepareStatement(SAVE);
            query.setString(1,t.getNombre_usuario());
            query.setString(2, t.getPassword());
            query.setString(3, t.getNombre());
            query.setString(4, getAdmin(t.getEstado()));
            query.executeUpdate();
            return "yes";
        }catch(SQLException e){
            System.out.println(e);
            return "no";
        }
    }

    @Override
    public String actualizar(Administrador t) {
      try{
          
            PreparedStatement query= Conexion.getInstancia().prepareStatement(UPDATE);
            query.setString(1,t.getPassword());
            query.setString(2, t.getNombre());
            query.setString(3, getAdmin(t.getEstado()));
            query.setString(4,t.getNombre_usuario());
            query.executeUpdate();
            return "yes";
        }catch(SQLException e){
            System.out.println(e+" buscame aqui");
            return "no";
        }   
    }

    @Override
    public void eliminar(Administrador t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public ResultSet consultarLogin(Administrador t) {
        ResultSet datosObtenidos = null;
        PreparedStatement query = null;
        try {
            query = Conexion.getInstancia().prepareStatement(SELECTLOGIN);
            System.out.println(t.getNombre_usuario());
            query.setString(1, t.getNombre_usuario());
            datosObtenidos = query.executeQuery();
            if (datosObtenidos!=null && datosObtenidos.next()) {
                    String u = datosObtenidos.getString("nombre_usuario");
                    String c = datosObtenidos.getString("password");
                    String tipo=datosObtenidos.getString("estado");
                    if (t.getNombre_usuario().equals(u) && t.getPassword().equals(c)) {
                        return datosObtenidos;
                    }
                }else{
                return null;
                }
        } catch (SQLException ex) {
            System.out.println(ex);
        }
        return null;
    }

    @Override
    public ResultSet obtenerInfo(Administrador t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public ResultSet getAll() {
        ResultSet datosObtenidos = null;
        try {
           PreparedStatement query = Conexion.getInstancia().prepareStatement(SELECTALL);
            datosObtenidos = query.executeQuery();
            return datosObtenidos;
        } catch (SQLException ex) {
            System.out.println(ex);
        }
        return null;
    }
    

    @Override
    public String desactivar(Administrador t) {
         try{
            PreparedStatement query= Conexion.getInstancia().prepareStatement(DESACTIVATE);
            query.setString(1, getAdmin(t.getEstado()));
            query.setString(2,t.getNombre_usuario());
            query.executeUpdate();
            return "yes";
        }catch(SQLException e){
            System.out.println(e+" buscame aqui");
            return "no";
        }   
    }
    
}
