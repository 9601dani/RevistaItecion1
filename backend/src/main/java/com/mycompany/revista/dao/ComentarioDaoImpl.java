/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.dao;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mycompany.revista.clases.Comentario;
import com.mycompany.revista.clases.Revista;
import com.mycompany.revista.conexion.Conexion;
import com.mycompany.revista.modelsE.ComentarioMostrar;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author daniel
 */
public class ComentarioDaoImpl implements ComentarioDao {

    private final String SAVEC = "INSERT INTO comentario(descripcion, fecha_comentario, id_revista, id_suscripcion) VALUES (?,?,?,?)";
    private final String SELECTCOMFORID = "SELECT c.id_comentario, c.descripcion, c.fecha_comentario, s.nombre_usuario,r.nombre_usuario FROM comentario as c INNER JOIN revista as r INNER JOIN suscripcion as s WHERE c.id_revista=? AND c.id_revista=r.id_revista AND c.id_suscripcion=s.id_suscripcion";

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
    public void eliminar(Comentario t) {
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
}
