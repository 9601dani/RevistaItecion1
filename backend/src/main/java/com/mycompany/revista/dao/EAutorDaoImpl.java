/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.dao;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mycompany.revista.clases.Etiqueta_autor;
import com.mycompany.revista.conexion.Conexion;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author daniel
 */
public class EAutorDaoImpl implements EAutorDao {
    private final String SELECTALL = "SELECT * FROM etiqueta WHERE nombre_usuario=?";
    private final String AÑADIR_ETIQUETA = "INSERT INTO etiqueta_autor VALUES (?,?)";
    public EAutorDaoImpl() {
        new Conexion();
    }
    public ArrayList<Etiqueta_autor> listarTodo(Etiqueta_autor t) {
        ResultSet datosObtenidos = null;
        PreparedStatement query = null;
        ArrayList<Etiqueta_autor> listA = new ArrayList<Etiqueta_autor>();
        try {
            query = Conexion.getInstancia().prepareStatement(SELECTALL);
            query.setString(1, t.getNombre_usuario());
            datosObtenidos = query.executeQuery();
            if (datosObtenidos != null && datosObtenidos.next()) {
                try {
                    while (datosObtenidos.next()) {
                        Etiqueta_autor userN = new Etiqueta_autor(datosObtenidos.getString("nombre_etiqueta"), datosObtenidos.getString("nombre_usuario"));
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

    public static String toJsonE(ArrayList<Etiqueta_autor> object) {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        String string = "[";
        for (Etiqueta_autor data : object) {
            string += gson.toJson(data, Etiqueta_autor.class) + ",";
        }
        string = string.substring(0, string.length() - 1) + "]";
        System.out.println("------->\n" + string);
        return string;
    }

    @Override
    public String registrar(Etiqueta_autor t) {
        try{
            PreparedStatement query= Conexion.getInstancia().prepareStatement(AÑADIR_ETIQUETA);
            query.setString(1,t.getNombre_etiqueta());
            query.setString(2, t.getNombre_usuario());
            query.executeUpdate();
            return "yes";
        }catch(SQLException e){
            System.out.println(e);
            return "no";
        }
    }

    @Override
    public String actualizar(Etiqueta_autor t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String eliminar(Etiqueta_autor t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public ArrayList<Etiqueta_autor> listarTodos() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
