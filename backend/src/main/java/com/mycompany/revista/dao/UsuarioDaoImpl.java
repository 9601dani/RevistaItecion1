/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.dao;

import static com.mycompany.revista.Enum.TIP_USUARIO.getTypeUser;
import com.mycompany.revista.clases.Usuario;
import com.mycompany.revista.conexion.Conexion;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author daniel
 */
public class UsuarioDaoImpl extends Conexion implements UsuarioDao{
private final String AÑADIR_CLIENTE="INSERT INTO usuario (nombre_usuario, password, nombre,tipo_usuario) VALUES (?,?,?,?);";
private final String SELECTLOGIN="SELECT * FROM usuario WHERE nombre_usuario=?";    
    public UsuarioDaoImpl(){
        new Conexion();
    }

    @Override
    public ArrayList<Usuario> listarTodos() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    /**
     *
     * @param t
     * @return
     */
    @Override
    public String registrar(Usuario t){
        try{
            PreparedStatement query= Conexion.getInstancia().prepareStatement(AÑADIR_CLIENTE);
            query.setString(1,t.getNombre_usuario());
            query.setString(2, t.getPassword());
            query.setString(3, t.getNombre());
            query.setString(4, getTypeUser(t.getTipo_usuario()));
            query.executeUpdate();
            return "yes";
        }catch(SQLException e){
            System.out.println(e);
            return "no";
        }
         
    }

    @Override
    public void actualizar(Usuario t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void eliminar(Usuario t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public ResultSet consultarLogin(Usuario t) {
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
                    String tipo=datosObtenidos.getString("tipo_usuario");
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
    public ResultSet obtenerInfo(Usuario t) {
        ResultSet datosObtenidos = null;
        PreparedStatement query = null;
        try {
            
                query = Conexion.getInstancia().prepareStatement(SELECTLOGIN);
                System.out.println(t.getNombre_usuario()+" -------->");
                query.setString(1, t.getNombre_usuario());
                datosObtenidos = query.executeQuery();
            if (datosObtenidos!=null && datosObtenidos.next()) {
                return datosObtenidos;
            }else{
                System.out.println("mande nulo 1");
                return null;
            }
        } catch (SQLException ex) {
            System.out.println(ex);
        }
        System.out.println("mande nulo 2");
        return null;
    }
    
}
