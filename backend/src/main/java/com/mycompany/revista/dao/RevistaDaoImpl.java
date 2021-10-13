/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.dao;

import static com.mycompany.revista.Enum.COMENTARIO_E.getCom;
import static com.mycompany.revista.Enum.ESTADO_REV.getRev;
import static com.mycompany.revista.Enum.ME_GUSTA_E.getLike;
import static com.mycompany.revista.Enum.SUSCRIP_E.getSus;
import com.mycompany.revista.clases.Revista;
import com.mycompany.revista.conexion.Conexion;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author daniel
 */
public class RevistaDaoImpl implements RevistaDao{
 private final String SAVE = "INSERT INTO revista(nombre_revista,archivo,fecha_publicacion,descripcion,estado_revista,"
         + "costo_suscripcion,me_gusta,comentario,suscripciones,nombre_categoria,nombre_usuario) VALUES (?,?,?,?,?,?,?,?,?,?,?)";

    public RevistaDaoImpl() {
        new Conexion();
    }
    
 
 @Override
    public ArrayList<Revista> listarTodos() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String registrar(Revista t) {
        try{
            PreparedStatement query= Conexion.getInstancia().prepareStatement(SAVE);
            query.setString(1,t.getNombre_revista());
            query.setBlob(2, t.getArchivo());
            query.setDate(3, (Date) t.getFecha_publicacion());
            query.setString(4, t.getDescripcion());
            query.setString(5, getRev(t.getEstado_revista()));
            query.setBigDecimal(6, t.getCosto_suscripcion());
            query.setString(7, getLike(t.getMe_gusta()));
            query.setString(8, getCom(t.getComentario()));
            query.setString(9, getSus(t.getSuscripciones()));
            query.setString(10, t.getNombre_categoria());
            query.setString(11,t.getNombre_usuario());
            query.executeUpdate();
            return "yes";
        }catch(SQLException e){
            System.out.println(e);
            return "no";
        }
    }

    @Override
    public String actualizar(Revista t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void eliminar(Revista t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
