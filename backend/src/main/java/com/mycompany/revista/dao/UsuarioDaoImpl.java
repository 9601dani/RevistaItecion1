/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.dao;

import static com.mycompany.revista.Enum.TIP_USUARIO.getTypeUser;
import com.mycompany.revista.clases.Usuario;
import com.mycompany.revista.conexion.Conexion;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author daniel
 */
public class UsuarioDaoImpl extends Conexion implements UsuarioDao{
private final String AÑADIR_CLIENTE="INSERT INTO usuario (nombre_usuario, password, nombre,tipo_usuario) VALUES (?,?,?,?);";
    @Override
    public ArrayList<Usuario> listarTodos() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String registrar(Usuario t){
        try{
            System.out.println("llegue aqui");
             PreparedStatement query= this.connection.prepareStatement(AÑADIR_CLIENTE);
            query.setString(1,t.getNombre_usuario());
            query.setString(2, t.getPassword());
            query.setString(3, t.getNombre());
            query.setString(4, getTypeUser(t.getTipo_usuario()));
            query.executeUpdate();
            System.out.println("nadie");
            return "yes";
        }catch(SQLException e){
            System.out.println("error en guardar usuario");
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
    
}
