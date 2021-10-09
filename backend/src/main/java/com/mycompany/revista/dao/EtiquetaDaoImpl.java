/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.dao;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mycompany.revista.clases.Categoria;
import com.mycompany.revista.clases.Etiqueta;
import com.mycompany.revista.conexion.Conexion;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author daniel
 */
public class EtiquetaDaoImpl implements EtiquetaDao {

    private final String SAVE = "INSERT INTO etiqueta VALUES (?)";
    private final String SELECTALL = "SELECT * FROM etiqueta";
    private final String SELECTALLC = "SELECT * FROM categoria";

    public EtiquetaDaoImpl() {
        new Conexion();
    }

    @Override
    public ArrayList<Etiqueta> listarTodos() {
        ResultSet datosObtenidos = null;
        PreparedStatement query = null;
        ArrayList<Etiqueta> listA = new ArrayList<Etiqueta>();
        try {
            query = Conexion.getInstancia().prepareStatement(SELECTALL);
            datosObtenidos = query.executeQuery();
            if (datosObtenidos != null) {
                try {
                    while (datosObtenidos.next()) {
                        Etiqueta userN = new Etiqueta(datosObtenidos.getString("nombre_etiqueta"));
                        listA.add(userN);
                        System.out.println(listA);
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

    public ArrayList<Categoria> listarTodosE() {
        ResultSet datosObtenidos = null;
        PreparedStatement query = null;
        ArrayList<Categoria> listA = new ArrayList<Categoria>();
        try {
            query = Conexion.getInstancia().prepareStatement(SELECTALLC);
            datosObtenidos = query.executeQuery();
            if (datosObtenidos != null) {
                try {
                    while(datosObtenidos.next()) {
                        Categoria userN = new Categoria(datosObtenidos.getString("nombre_categoria"));
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
    public String registrar(Etiqueta t) {
        try {
            PreparedStatement query = Conexion.getInstancia().prepareStatement(SAVE);
            query.setString(1, t.getNombre_etiqueta());
            query.executeUpdate();
            return "yes";
        } catch (SQLException e) {
            System.out.println(e);
            return "no";
        }
    }

    @Override
    public String actualizar(Etiqueta t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void eliminar(Etiqueta t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    public static String toJsonET(ArrayList<Etiqueta> object) {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        String string = "[";
        for (Etiqueta data : object) {
            string += gson.toJson(data, Etiqueta.class) + ",";
        }
        string = string.substring(0, string.length() - 1) + "]";
        System.out.println("------->\n" + string);
        return string;
    }

    public static String toJsonCA(ArrayList<Categoria> object) {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        System.out.println("prueba1");
        String string = "[";
        for (Categoria data : object) {
            string += gson.toJson(data, Categoria.class) + ",";
        }
        System.out.println("++  "+ string);
        string = string.substring(0, string.length() - 1) + "]";
        System.out.println("------->\n" + string);
        return string;
    }

}
