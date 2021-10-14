/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.dao;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import static com.mycompany.revista.Enum.COMENTARIO_E.getCom;
import static com.mycompany.revista.Enum.ME_GUSTA_E.getLike;
import static com.mycompany.revista.Enum.SUSCRIP_E.getSus;
import com.mycompany.revista.clases.Revista;
import com.mycompany.revista.conexion.Conexion;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import static com.mycompany.revista.Enum.ESTADO_REV.getRev1;
import static com.mycompany.revista.Enum.ESTADO_REV.getRev;
import static com.mycompany.revista.Enum.ESTADO_REV.getRev1;
import java.sql.ResultSet;

/**
 *
 * @author daniel
 */
public class RevistaDaoImpl implements RevistaDao {
     private final String SELECTSPECIAL = "SELECT * FROM revista WHERE nombre_usuario=?";
    private final String SAVER = "INSERT INTO revista(nombre_revista,archivo,fecha_publicacion,descripcion,estado_revista,costo_suscripcion,me_gusta,comentario,suscripciones,nombre_categoria,nombre_usuario) VALUES (?,?,?,?,?,?,?,?,?,?,?)";

    public RevistaDaoImpl() {
        new Conexion();
    }

    @Override
    public ArrayList<Revista> listarTodos() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String registrar(Revista t) {
        try {
            PreparedStatement query = Conexion.getInstancia().prepareStatement(SAVER);
            query.setString(1, t.getNombre_revista());
            query.setBlob(2, t.getArchivo());
            query.setDate(3, t.getFecha_publicacion());
            query.setString(4, t.getDescripcion());
            query.setString(5, getRev(t.getEstado_revista()));
            query.setBigDecimal(6, t.getCosto_suscripcion());
            query.setString(7, getLike(t.getMe_gusta()));
            query.setString(8, getCom(t.getComentario()));
            query.setString(9, getSus(t.getSuscripciones()));
            query.setString(10, t.getNombre_categoria());
            query.setString(11, t.getNombre_usuario());
            query.executeUpdate();
            return "yes";
        } catch (SQLException e) {
            System.out.println(e);
            System.out.println("aqui error");
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

    @Override
    public ArrayList<Revista> listarAlgunos(String name) {
        ResultSet datosObtenidos = null;
        PreparedStatement query = null;
        ArrayList<Revista> listA = new ArrayList<Revista>();
        try {
            query = Conexion.getInstancia().prepareStatement(SELECTSPECIAL);
            query.setString(1, name);
            datosObtenidos = query.executeQuery();
            if (datosObtenidos != null) {
                try {
                    while (datosObtenidos.next()) {
                        Revista userN = new Revista(datosObtenidos.getInt("id_revista"),datosObtenidos.getString("nombre_revista"),datosObtenidos.getBinaryStream("archivo"), datosObtenidos.getString("fecha_publicacion"),datosObtenidos.getString("descripcion"),getRev1(datosObtenidos.getString("estado_revista")),datosObtenidos.getBigDecimal("costo_suscripcion"),getLike(datosObtenidos.getString("me_gusta")),getCom(datosObtenidos.getString("comentario")),getSus(datosObtenidos.getString("suscripciones")),datosObtenidos.getString("nombre_categoria"));
                        listA.add(userN);
                    }
                    return listA;
                } catch (SQLException ex) {
                    System.out.println(ex);
                }
            } else {
                System.out.println("mande nulo 1");
                return null;
            }
        } catch (SQLException ex) {
            System.out.println(ex);
        }
        System.out.println("mande nulo 2");
        return null;

    }

    public static String toJsonRev(ArrayList<Revista> object) {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        String string = "[";
        for (Revista data : object) {
            string += gson.toJson(data, Revista.class) + ",";
        }
        string = string.substring(0, string.length() - 1) + "]";
        return string;
    }
}
