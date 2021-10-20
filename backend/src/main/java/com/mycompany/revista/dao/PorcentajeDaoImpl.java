/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.dao;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mycompany.revista.clases.Porcentaje_soft;
import com.mycompany.revista.conexion.Conexion;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author daniel
 */
public class PorcentajeDaoImpl implements PorcentajeDao {
private final String SELECTALL = "SELECT * FROM porcentaje_soft";
private final String UPDATE = "UPDATE porcentaje_soft SET porcentaje=?,fecha_ultima_mod=?,nombre_usuario=? WHERE id_porcentaje=? ";
    public PorcentajeDaoImpl() {
        new Conexion();
    }

    @Override
    public ArrayList<Porcentaje_soft> listarTodos() {
       ResultSet datosObtenidos = null;
        PreparedStatement query = null;
        ArrayList<Porcentaje_soft> listA = new ArrayList<Porcentaje_soft>();
        try {
            query = Conexion.getInstancia().prepareStatement(SELECTALL);
            datosObtenidos = query.executeQuery();
            if (datosObtenidos != null) {
                try {
                    while (datosObtenidos.next()) {
                       Porcentaje_soft userN = new Porcentaje_soft(datosObtenidos.getInt("id_porcentaje"),datosObtenidos.getBigDecimal("porcentaje"),datosObtenidos.getString("fecha_ultima_mod"),datosObtenidos.getString("nombre_usuario"));
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

    @Override
    public String registrar(Porcentaje_soft t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String actualizar(Porcentaje_soft t) {
         try {
            PreparedStatement query = Conexion.getInstancia().prepareStatement(UPDATE);
            query.setBigDecimal(1, t.getPorcentaje());
            query.setString(2, t.getFecha_ultima_modificacion());
            query.setString(3, t.getNombre_usuario());
            query.setInt(4, t.getId_porcentaje());
            query.executeUpdate();
            return "yes";
        } catch (SQLException e) {
            System.out.println(e);
            return "no";
        }
    
    }

    @Override
    public String eliminar(Porcentaje_soft t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
 
    /**
     *
     * @param object
     * @return
     */
    public static String toJsonPO(ArrayList<Porcentaje_soft> object) {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        String string = "[";
        for (Porcentaje_soft data : object) {
            string += gson.toJson(data, Porcentaje_soft.class) + ",";
        }
        string = string.substring(0, string.length() - 1) + "]";
        return string;
    }
}
