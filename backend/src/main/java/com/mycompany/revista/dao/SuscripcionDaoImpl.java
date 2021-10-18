/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.dao;

import static com.mycompany.revista.Enum.ESTADO_SUS.getMySus;
import static com.mycompany.revista.Enum.ME_GUSTA_SUSCRIPCION.getMyLike;
import com.mycompany.revista.clases.Recaudacion;
import com.mycompany.revista.clases.Suscripcion;
import com.mycompany.revista.conexion.Conexion;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author daniel
 */
public class SuscripcionDaoImpl implements SuscripcionDao{
private final String SELECTEXISTENCIA = "SELECT * FROM suscripcion WHERE id_revista=? AND nombre_usuario=?";
private final String INTO = "INSERT INTO suscripcion(valor_sus,fecha_inicial,fecha_final,me_gusta,estado_suscripcion,nombre_usuario,id_revista) VALUES (?,?,?,?,?,?,?)";
private final String INTORECAUDACION = "INSERT INTO recaudacion(nombre_revista, total_pagar,costo_con_descuento,fecha_pago,nombre_usuario,autor) VALUES (?,?,?,?,?,?)";
    public SuscripcionDaoImpl() {
    new Conexion();
    }



    @Override
    public String consultar(Suscripcion t) {
        ResultSet datosObtenidos = null;
        PreparedStatement query = null;
        try {
            query = Conexion.getInstancia().prepareStatement(SELECTEXISTENCIA);
            query.setInt(1,t.getId_revista());
            query.setString(2,t.getNombre_usuario());
            datosObtenidos = query.executeQuery();
            if (datosObtenidos != null && datosObtenidos.next()) {
                System.out.println("estoy retornando yes porque no es nulo");
                return "yes";
            } else {
                System.out.println("no");
                return "no";
            }
        } catch (SQLException ex) {
            System.out.println(ex);
        }
        
        return "no";
    }

    @Override
    public ArrayList<Suscripcion> listarTodos() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String registrar(Suscripcion t) {
    try{
            PreparedStatement query= Conexion.getInstancia().prepareStatement(INTO);
            query.setBigDecimal(1,t.getValor_sus());
            query.setString(2, t.getFecha_inicial());
            query.setString(3, t.getFecha_final());
            query.setString(4, getMyLike(t.getMe_gusta()));
            query.setString(5, getMySus(t.getEstado_suscripcion()));
            query.setString(6, t.getNombre_usuario());
            query.setInt(7, t.getId_revista());
            query.executeUpdate();
            return "yes";
        }catch(SQLException e){
            System.out.println(e);
            return "no";
        }    
    
    }

    @Override
    public String actualizar(Suscripcion t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void eliminar(Suscripcion t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String guardarRecaudacion(Recaudacion t) {
       try{
            PreparedStatement query= Conexion.getInstancia().prepareStatement(INTORECAUDACION);
            query.setString(1,t.getNombre_revista());
            query.setBigDecimal(2, t.getTotal_pagar());
            query.setBigDecimal(3, t.getCosto_con_descuento());
            query.setString(4, t.getFecha_pago());
            query.setString(5, t.getNombre_usuario());
            query.setString(6, t.getAutor());
            query.executeUpdate();
            return "yes";
        }catch(SQLException e){
            System.out.println(e);
            return "no";
        }    
    
    }
    
}
