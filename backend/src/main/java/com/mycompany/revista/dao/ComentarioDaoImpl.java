/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.dao;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mycompany.revista.clases.Comentario;
import com.mycompany.revista.clases.Revista;
import com.mycompany.revista.clases.Tipo_anuncio;
import com.mycompany.revista.conexion.Conexion;
import com.mycompany.revista.modelsE.ComentarioMostrar;
import java.math.BigDecimal;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author daniel
 */
public class ComentarioDaoImpl implements ComentarioDao {

    private final String SAVEC = "INSERT INTO comentario(descripcion, fecha_comentario, id_revista, id_suscripcion) VALUES (?,?,?,?)";
    private final String SELECTCOMFORID = "SELECT c.id_comentario, c.descripcion, c.fecha_comentario, s.nombre_usuario,r.nombre_usuario FROM comentario as c INNER JOIN revista as r INNER JOIN suscripcion as s WHERE c.id_revista=? AND c.id_revista=r.id_revista AND c.id_suscripcion=s.id_suscripcion";
    private final String SELECTTIPO = "SELECT * FROM tipo_anuncio";
    private final String UPDATETIPO = "UPDATE tipo_anuncio SET costo_dia=? WHERE nombre_tipo=? ";
    private final String GETCOM="SELECT * FROM comentario WHERE id_revista=? AND fecha_comentario BETWEEN ? AND ? ORDER BY fecha_comentario DESC";

    public ComentarioDaoImpl() {
        new Conexion();
    }

    @Override
    public ArrayList<Comentario> listarTodos() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String registrar(Comentario t) {
        try {
            PreparedStatement query = Conexion.getInstancia().prepareStatement(SAVEC);
            query.setString(1, t.getDescripcion());
            query.setString(2, t.getFecha_comentario());
            query.setInt(3, t.getId_revista());
            query.setInt(4, t.getId_suscripcion());
            query.executeUpdate();
            return "yes";
        } catch (SQLException e) {
            System.out.println(e);
            return "no";
        }

    }

    @Override
    public String actualizar(Comentario t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String eliminar(Comentario t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public ArrayList<ComentarioMostrar> listarAlgunosForId(int id_revista) {
        ResultSet datosObtenidos = null;
        PreparedStatement query = null;
        ArrayList<ComentarioMostrar> listA = new ArrayList<ComentarioMostrar>();
        try {
            query = Conexion.getInstancia().prepareStatement(SELECTCOMFORID);
            query.setInt(1, id_revista);
            datosObtenidos = query.executeQuery();
            if (datosObtenidos != null) {
                try {
                    while (datosObtenidos.next()) {
                        ComentarioMostrar userN = new ComentarioMostrar(datosObtenidos.getInt("c.id_comentario"), datosObtenidos.getString("c.descripcion"), datosObtenidos.getString("c.fecha_comentario"), datosObtenidos.getString("s.nombre_usuario"), datosObtenidos.getString("r.nombre_usuario"));
                        listA.add(userN);
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

    public static String toJsonCom(ArrayList<ComentarioMostrar> object) {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        String string = "[";
        for (ComentarioMostrar data : object) {
            string += gson.toJson(data, ComentarioMostrar.class) + ",";
        }
        string = string.substring(0, string.length() - 1) + "]";
        return string;
    }

    @Override
    public ArrayList<Tipo_anuncio> listTiposAnun() {
        ResultSet datosObtenidos = null;
        PreparedStatement query = null;
        ArrayList<Tipo_anuncio> listA = new ArrayList<Tipo_anuncio>();
        try {
            query = Conexion.getInstancia().prepareStatement(SELECTTIPO);
            datosObtenidos = query.executeQuery();
            if (datosObtenidos != null) {
                try {
                    while (datosObtenidos.next()) {
                        Tipo_anuncio tip = new Tipo_anuncio(datosObtenidos.getString("nombre_tipo"), datosObtenidos.getBigDecimal("costo_dia"));
                        listA.add(tip);
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

    public static String toJsonTip(ArrayList<Tipo_anuncio> object) {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        String string = "[";
        for (Tipo_anuncio data : object) {
            string += gson.toJson(data, Tipo_anuncio.class) + ",";
        }
        string = string.substring(0, string.length() - 1) + "]";
        return string;
    }

    @Override
    public String updateCosto(String tipo, BigDecimal costo) {
        PreparedStatement query = null;
        try {
            query = Conexion.getInstancia().prepareStatement(UPDATETIPO);
            query.setBigDecimal(1, costo);
            query.setString(2, tipo);
            query.executeUpdate();
            return "yes";
        } catch (SQLException ex) {
            System.out.println(ex);
            return "no";
        }
    }

    @Override
    public ArrayList<Comentario> listComentarioDeRevistaPorFechas(int id_revista, String startDate, String endDate) {
        try {
            ArrayList<Comentario> list= new ArrayList<>();
            PreparedStatement query = Conexion.getInstancia().prepareStatement(GETCOM);
            query.setInt(1,id_revista);
            query.setString(2,startDate);
            query.setString(3, endDate);
            ResultSet datosObtenidos= query.executeQuery();
            while(datosObtenidos.next()){
                list.add(new Comentario(datosObtenidos.getInt("id_comentario"), datosObtenidos.getString("descripcion"), datosObtenidos.getString("fecha_comentario"), datosObtenidos.getInt("id_revista"), datosObtenidos.getInt("id_revista")));
            }
            
            return list;
        } catch (SQLException ex) {
            System.out.println(ex);
        }
        return null;
    }
}
