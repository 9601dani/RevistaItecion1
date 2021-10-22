/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.dao;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import static com.mycompany.revista.Enum.ESTADO_ANUN.getAnun;
import com.mycompany.revista.clases.Anuncio;
import com.mycompany.revista.conexion.Conexion;
import java.math.BigDecimal;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author daniel
 */
public class AnuncioDaoImpl implements AnuncioDao{
    private final String INSERT="INSERT INTO anuncio(des_anuncio,texto,contenido,apariciones,total_pago,estado_anuncio,url,fecha_inicio,fecha_final,nombre_usuario,nombre_tipo) VALUES (?,?,?,?,?,?,?,?,?,?,?) ";
    private final String SELECTPRICE="SELECT (costo_dia) FROM tipo_anuncio WHERE nombre_tipo=?";
    private final String SELECTALL="SELECT * FROM anuncio";
    private final String ACTIVAR="UPDATE anuncio SET estado_anuncio='ACEPTADO' WHERE id_anuncio=?";
    private final String DESACTIVAR="UPDATE anuncio SET estado_anuncio='EN_ESPERA' WHERE id_anuncio=?";
    private final String CANCELARANUN = "UPDATE anuncio SET estado_anuncio='MOROSO' WHERE fecha_final<CURDATE()";
    //agregarl el where de estado anuncio = 'aceptado'
    private final String onlyOne="SELECT * FROM anuncio WHERE estado_anuncio='ACEPTADO' ORDER BY RAND() LIMIT 1;";
    private final String UPDATEAPARICION="UPDATE anuncio SET apariciones=? WHERE id_anuncio=?";
    private final String UPDATE="UPDATE anuncio SET des_anuncio=?, texto=?, url=? WHERE id_anuncio=?";
     private final String UPDATEIMG="UPDATE anuncio SET contenido=? WHERE id_anuncio=?";
    public AnuncioDaoImpl() {
    new Conexion();
    PreparedStatement query2;
        try {
            System.out.println("hice el cambio a moroso");
            query2 = Conexion.getInstancia().prepareStatement(CANCELARANUN);
            query2.executeUpdate();
        } catch (SQLException ex) {
            Logger.getLogger(AnuncioDaoImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
          
    }
    
    

    @Override
    public ArrayList<Anuncio> listarTodos() {
          ResultSet datosObtenidos = null;
        PreparedStatement query = null;
        ArrayList<Anuncio> listA = new ArrayList<Anuncio>();
        try {
            query = Conexion.getInstancia().prepareStatement(SELECTALL);
            datosObtenidos = query.executeQuery();
            if (datosObtenidos != null) {
                try {
                    while (datosObtenidos.next()) {
                    Anuncio n= new Anuncio(datosObtenidos.getInt("id_anuncio"), datosObtenidos.getString("des_anuncio"), datosObtenidos.getString("texto"), datosObtenidos.getString("contenido"), datosObtenidos.getInt("apariciones"), datosObtenidos.getBigDecimal("total_pago"), getAnun(datosObtenidos.getString("estado_anuncio")), datosObtenidos.getString("url"), datosObtenidos.getString("fecha_inicio"),datosObtenidos.getString("fecha_final"),datosObtenidos.getString("nombre_usuario"),datosObtenidos.getString("nombre_tipo"));
                    listA.add(n);
                    }
                    return listA;
                } catch (SQLException ex) {
                    System.out.println(ex);
                }
            } else {
                return null;
            }
        } catch (SQLException ex) {
            System.out.println(ex);
        }
        return null;
    
    }

    @Override
    public String registrar(Anuncio t) {
        try {
            PreparedStatement query = Conexion.getInstancia().prepareStatement(INSERT);
            query.setString(1, t.getDes_anuncio());
            query.setString(2, t.getTexto());
            query.setString(3, t.getContenido());
            query.setInt(4, t.getApariciones());
            query.setBigDecimal(5, t.getTotal_pago());
            query.setString(6, getAnun(t.getEstado_anuncio()));
            query.setString(7, t.getUrl());
            query.setString(8, t.getFecha_inicio());
            query.setString(9, t.getFecha_final());
            query.setString(10, t.getNombre_usuario());
            query.setString(11, t.getNombre_tipo());
            query.executeUpdate();
            return "yes";
        } catch (SQLException e) {
            System.out.println(e);
            return "no";
        }
    
    }

    @Override
    public String actualizar(Anuncio t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String eliminar(Anuncio t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public BigDecimal precioAnuncio(String tipo) {
        ResultSet datosObtenidos = null;
        PreparedStatement query = null;
        try {
            query = Conexion.getInstancia().prepareStatement(SELECTPRICE);
            query.setString(1, tipo);
            datosObtenidos = query.executeQuery();
            if (datosObtenidos != null && datosObtenidos.next()) {
               return  datosObtenidos.getBigDecimal("costo_dia");
            } else {
                return null;
            }
        } catch (SQLException ex) {
            System.out.println(ex);
        }

        
        return null;
    }

    @Override
    public Anuncio onlyOne() {
        ResultSet datosObtenidos = null;
        PreparedStatement query = null;
        try {
            query = Conexion.getInstancia().prepareStatement(onlyOne);
            datosObtenidos = query.executeQuery();
            if (datosObtenidos != null && datosObtenidos.next()) {
              Anuncio n= new Anuncio(datosObtenidos.getInt("id_anuncio"), datosObtenidos.getString("des_anuncio"), datosObtenidos.getString("texto"), datosObtenidos.getString("contenido"), datosObtenidos.getInt("apariciones"), datosObtenidos.getBigDecimal("total_pago"), getAnun(datosObtenidos.getString("estado_anuncio")), datosObtenidos.getString("url"), datosObtenidos.getString("fecha_inicio"),datosObtenidos.getString("fecha_final"),datosObtenidos.getString("nombre_usuario"),datosObtenidos.getString("nombre_tipo"));
              return n;
            } else {
                return null;
            }
        } catch (SQLException ex) {
            System.out.println(ex);
        }

        
        return null;
    
    }

    @Override
    public void changeApariciones(int id_anuncio, int apariciones) {
         try {
            PreparedStatement query = Conexion.getInstancia().prepareStatement(UPDATEAPARICION);
            query.setInt(2, id_anuncio);
            query.setInt(1, apariciones);
            query.executeUpdate();
        } catch (SQLException e) {
            System.out.println(e);
        }
    
    }
    
    public static String toJsonAnun(ArrayList<Anuncio> object) {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        String string = "[";
        for (Anuncio data : object) {
            string += gson.toJson(data, Anuncio.class) + ",";
        }
        string = string.substring(0, string.length() - 1) + "]";
        System.out.println(string);
        return string;
    }

    @Override
    public String activarAn(String id) {
        try {
          PreparedStatement  query = Conexion.getInstancia().prepareStatement(ACTIVAR);
            query.setString(1, id);
            query.executeUpdate();
            return "yes";
        } catch (SQLException ex) {
            System.out.println(ex);
        }
        return null;
    
    }

    @Override
    public String desactivarAn(String id) {
         try {
          PreparedStatement  query = Conexion.getInstancia().prepareStatement(DESACTIVAR);
            query.setString(1, id);
            query.executeUpdate();
            return "yes";
        } catch (SQLException ex) {
            System.out.println(ex);
        }
        return null;
    
    }

    @Override
    public String UpdateAnuncio(String id, String descripcion, String texto, String url) {
       try {
          PreparedStatement  query = Conexion.getInstancia().prepareStatement(UPDATE);
            query.setString(1, descripcion);
            query.setString(2, texto);
            query.setString(3, url);
            query.setString(4, id);
            query.executeUpdate();
            return "yes";
        } catch (SQLException ex) {
            System.out.println(ex);
            System.out.println("2");
        }
        return null;
    
    }

    @Override
    public String updateImg(String contenido, String id) {
     try {
          PreparedStatement  query = Conexion.getInstancia().prepareStatement(UPDATEIMG);
            query.setString(1, contenido);
            query.setString(2, id);
            query.executeUpdate();
            return "yes";
        } catch (SQLException ex) {
            System.out.println(ex);
        }
        return null;    
    
    }

    @Override
    public String updateVideo(String link, String id) {
         try {
          PreparedStatement  query = Conexion.getInstancia().prepareStatement(UPDATEIMG);
            query.setString(1, link);
            query.setString(2, id);
            query.executeUpdate();
            return "yes";
        } catch (SQLException ex) {
            System.out.println(ex);
        }
        return null;   
    
    }
    
}
