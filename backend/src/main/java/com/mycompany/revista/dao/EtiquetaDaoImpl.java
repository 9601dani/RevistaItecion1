/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.dao;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mycompany.revista.clases.Categoria;
import com.mycompany.revista.clases.Etiqueta;
import com.mycompany.revista.clases.Etiqueta_autor;
import com.mycompany.revista.clases.Etiqueta_revista;
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
    private final String DELETE = "DELETE FROM  etiqueta WHERE nombre_etiqueta=?";
     private final String UPDATE = "UPDATE etiqueta SET nombre_etiqueta=? WHERE nombre_etiqueta=?";
    private final String SAVECATEGORIA = "INSERT INTO categoria VALUES (?)";
    private final String DELETECATEGORIA = "DELETE FROM categoria WHERE nombre_categoria=?";
    private final String UPDATECATEGORIA = "UPDATE categoria SET nombre_categoria=? WHERE nombre_categoria=?";
    private final String SELECTALL = "SELECT * FROM etiqueta";
    private final String SELECTETFORUSER = "SELECT * FROM etiqueta_autor WHERE nombre_usuario=?";
    private final String SELECTALLC = "SELECT * FROM categoria";
    private final String SAVEREV = "INSERT INTO etiqueta_revista VALUES (?,?)";
    private final String SELECTETFORREV = "SELECT * FROM etiqueta_revista WHERE id_revista=?";
    private final String DELETEETFORUSER = "DELETE FROM etiqueta_autor WHERE nombre_etiqueta=? AND nombre_usuario=?";
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
                    while (datosObtenidos.next()) {
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

    public String actualizar(Etiqueta t, String et_pas) {
       try {
            PreparedStatement query = Conexion.getInstancia().prepareStatement(UPDATE);
            query.setString(1, t.getNombre_etiqueta());
            query.setString(2, et_pas);
            query.executeUpdate();
            return "yes";
        } catch (SQLException e) {
            System.out.println(e);
            return "no";
        }
    
    }

    @Override
    public String eliminar(Etiqueta t) {
       
     try {
            PreparedStatement query = Conexion.getInstancia().prepareStatement(DELETE);
            query.setString(1, t.getNombre_etiqueta());
            query.executeUpdate();
            return "yes";
        } catch (SQLException e) {
            System.out.println(e);
            return "no";
        }
    }

    public static String toJsonET(ArrayList<Etiqueta> object) {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        String string = "[";
        for (Etiqueta data : object) {
            string += gson.toJson(data, Etiqueta.class) + ",";
        }
        string = string.substring(0, string.length() - 1) + "]";
        return string;
    }

    public static String toJsonCA(ArrayList<Categoria> object) {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        String string = "[";
        for (Categoria data : object) {
            string += gson.toJson(data, Categoria.class) + ",";
        }
        string = string.substring(0, string.length() - 1) + "]";
        return string;
    }

    @Override
    public String saveEtiquetaRev(Etiqueta_revista t) {
        try {
            PreparedStatement query = Conexion.getInstancia().prepareStatement(SAVEREV);
            query.setString(1, t.getNombre_etiqueta());
            query.setInt(2, t.getId_revista());
            query.executeUpdate();
            return "yes";
        } catch (SQLException e) {
            System.out.println(e);
            return "no";
        }

    }

    @Override
    public ArrayList<Etiqueta> getETForRev(int id) {
        ResultSet datosObtenidos = null;
        PreparedStatement query = null;
        ArrayList<Etiqueta> listA = new ArrayList<Etiqueta>();
        try {
            query = Conexion.getInstancia().prepareStatement(SELECTETFORREV);
            query.setInt(1, id);
            datosObtenidos = query.executeQuery();
            if (datosObtenidos != null) {
                try {
                    while (datosObtenidos.next()) {
                        Etiqueta userN = new Etiqueta(datosObtenidos.getString("nombre_etiqueta"));
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
    public ArrayList<Etiqueta> getETForUser(String user_name) {
        ResultSet datosObtenidos = null;
        PreparedStatement query = null;
        ArrayList<Etiqueta> listA = new ArrayList<Etiqueta>();
        try {
            query = Conexion.getInstancia().prepareStatement(SELECTETFORUSER);
            query.setString(1, user_name);
            datosObtenidos = query.executeQuery();
            if (datosObtenidos != null) {
                try {
                    while (datosObtenidos.next()) {
                        Etiqueta userN = new Etiqueta(datosObtenidos.getString("nombre_etiqueta"));
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
    public String deleteETForUser(Etiqueta_autor t) {
         try {
            PreparedStatement query = Conexion.getInstancia().prepareStatement(DELETEETFORUSER);
            query.setString(1, t.getNombre_etiqueta());
            query.setString(2,t.getNombre_usuario());
            query.executeUpdate();
            return "yes";
        } catch (SQLException e) {
            System.out.println(e);
            return "no";
        }
    }

    @Override
    public String saveCategoria(Categoria c) {
        try {
            PreparedStatement query = Conexion.getInstancia().prepareStatement(SAVECATEGORIA);
            query.setString(1, c.getNombre_categoria());
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
    public String deleteCategoria(Categoria c) {
        try {
            PreparedStatement query = Conexion.getInstancia().prepareStatement(DELETECATEGORIA);
            query.setString(1, c.getNombre_categoria());
            query.executeUpdate();
            return "yes";
        } catch (SQLException e) {
            System.out.println(e);
            return "no";
        }
    }

    @Override
    public String updateCategoria(String anterior, String nuevo) {
        try {
            PreparedStatement query = Conexion.getInstancia().prepareStatement(UPDATECATEGORIA);
            query.setString(1, nuevo);
            query.setString(2, anterior);
            query.executeUpdate();
            return "yes";
        } catch (SQLException e) {
            System.out.println(e);
            return "no";
        }
    
    }

}
