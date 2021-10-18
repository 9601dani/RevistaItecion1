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
    private final String SELECTFORCATEGORIA = "SELECT * FROM revista WHERE nombre_categoria=?";
    private final String SELECT = "SELECT * FROM revista WHERE id_revista=?";
    private final String SAVER = "INSERT INTO revista(nombre_revista,archivo,fecha_publicacion,descripcion,estado_revista,costo_suscripcion,me_gusta,comentario,suscripciones,nombre_categoria,nombre_usuario) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
    private final String SELECTESPERA = "SELECT * FROM revista WHERE estado_revista='EN_ESPERA'";
    private final String SELECTACEPTADA = "SELECT * FROM revista WHERE estado_revista='ACEPTADA'";
    private final String ACEPTARREV = "UPDATE revista SET fecha_aceptacion=?, estado_revista=?,costo_dia=?, fecha_mod_costo=? WHERE id_revista=?";
    private final String UPDATE = "UPDATE revista SET nombre_revista=?, descripcion=?,costo_suscripcion=?, me_gusta=?,comentario=?,suscripciones=? WHERE id_revista=?";
    private final String GETLIKES = "SELECT COUNT(s.me_gusta) as MG FROM revista as rv INNER JOIN suscripcion as s WHERE rv.id_revista=? AND rv.id_revista= s.id_revista;";
    public RevistaDaoImpl() {
        new Conexion();
    }

    @Override
    public ArrayList<Revista> listarTodos() {
        ResultSet datosObtenidos = null;
        PreparedStatement query = null;
        ArrayList<Revista> listA = new ArrayList<Revista>();
        try {
            query = Conexion.getInstancia().prepareStatement(SELECTACEPTADA);
            datosObtenidos = query.executeQuery();
            if (datosObtenidos != null) {
                try {
                    while (datosObtenidos.next()) {
                        Revista userN = new Revista(datosObtenidos.getInt("id_revista"), datosObtenidos.getString("nombre_revista"), datosObtenidos.getString("archivo"), datosObtenidos.getString("fecha_publicacion"), datosObtenidos.getString("descripcion"), datosObtenidos.getString("fecha_aceptacion"), getRev1(datosObtenidos.getString("estado_revista")), datosObtenidos.getBigDecimal("costo_dia"), datosObtenidos.getString("fecha_mod_costo"), datosObtenidos.getBigDecimal("costo_suscripcion"), getLike(datosObtenidos.getString("me_gusta")), getCom(datosObtenidos.getString("comentario")), getSus(datosObtenidos.getString("suscripciones")), datosObtenidos.getString("nombre_categoria"), datosObtenidos.getString("nombre_usuario"));
                        listA.add(userN);
                    }
                    System.out.println("retorne la lista");
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
    public String registrar(Revista t) {
        try {
            PreparedStatement query = Conexion.getInstancia().prepareStatement(SAVER);
            query.setString(1, t.getNombre_revista());
            query.setString(2, t.getArchivo());
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
        try {
            PreparedStatement query = Conexion.getInstancia().prepareStatement(UPDATE);
            System.out.println("---->" + t.getNombre_revista());
            query.setString(1, t.getNombre_revista());
            query.setString(2, t.getDescripcion());
            query.setBigDecimal(3, t.getCosto_suscripcion());
            query.setString(4, getLike(t.getMe_gusta()));
            query.setString(5, getCom(t.getComentario()));
            query.setString(6, getSus(t.getSuscripciones()));
            System.out.println("---->" + t.getId_revista());
            query.setInt(7, t.getId_revista());
            query.executeUpdate();
            return "yes";
        } catch (SQLException e) {
            System.out.println(e);
            System.out.println("aqui error");
            return "no";
        }

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
                        Revista userN = new Revista(datosObtenidos.getInt("id_revista"), datosObtenidos.getString("nombre_revista"), datosObtenidos.getString("archivo"), datosObtenidos.getString("fecha_publicacion"), datosObtenidos.getString("descripcion"), getRev1(datosObtenidos.getString("estado_revista")), datosObtenidos.getBigDecimal("costo_suscripcion"), getLike(datosObtenidos.getString("me_gusta")), getCom(datosObtenidos.getString("comentario")), getSus(datosObtenidos.getString("suscripciones")), datosObtenidos.getString("nombre_categoria"));
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

    @Override
    public ArrayList<Revista> listarEnEspera() {
        ResultSet datosObtenidos = null;
        PreparedStatement query = null;
        ArrayList<Revista> listA = new ArrayList<Revista>();
        try {
            query = Conexion.getInstancia().prepareStatement(SELECTESPERA);
            datosObtenidos = query.executeQuery();
            if (datosObtenidos != null) {
                try {
                    while (datosObtenidos.next()) {
                        Revista userN = new Revista(datosObtenidos.getInt("id_revista"), datosObtenidos.getString("nombre_revista"), datosObtenidos.getString("archivo"), datosObtenidos.getString("fecha_publicacion"), datosObtenidos.getString("descripcion"), datosObtenidos.getString("fecha_aceptacion"), getRev1(datosObtenidos.getString("estado_revista")), datosObtenidos.getBigDecimal("costo_dia"), datosObtenidos.getString("fecha_mod_costo"), datosObtenidos.getBigDecimal("costo_suscripcion"), getLike(datosObtenidos.getString("me_gusta")), getCom(datosObtenidos.getString("comentario")), getSus(datosObtenidos.getString("suscripciones")), datosObtenidos.getString("nombre_categoria"), datosObtenidos.getString("nombre_usuario"));
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
    public String AceptarRevista(Revista r) {
        try {
            PreparedStatement query = Conexion.getInstancia().prepareStatement(ACEPTARREV);
            query.setDate(1, r.getFecha_aceptacion());
            query.setString(2, getRev(r.getEstado_revista()));
            query.setBigDecimal(3, r.getCosto_dia());
            query.setDate(4, r.getFecha_mod_costo());
            query.setInt(5, r.getId_revista());
            query.executeUpdate();
            return "yes";
        } catch (SQLException e) {
            System.out.println(e);
            System.out.println("aqui error");
            return "no";
        }

    }

    @Override
    public ResultSet BuscarUnaRevista(int id) {
        ResultSet datosObtenidos = null;
        PreparedStatement query = null;
        try {
            query = Conexion.getInstancia().prepareStatement(SELECT);
            query.setInt(1, id);
            datosObtenidos = query.executeQuery();
            if (datosObtenidos != null) {
               return datosObtenidos;
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
    public int Cantidad_Likes(int id) {
       ResultSet datosObtenidos = null;
        PreparedStatement query = null;
        try {
            query = Conexion.getInstancia().prepareStatement(GETLIKES);
            query.setInt(1, id);
            datosObtenidos = query.executeQuery();
            if (datosObtenidos != null && datosObtenidos.next()) {
               return datosObtenidos.getInt("MG");
            } else {
                System.out.println("mande nulo 1");
                return 1;
            }
        } catch (SQLException ex) {
            System.out.println("error sql");
            System.out.println(ex);
            
        }
        return 1;
    }

    @Override
    public ArrayList<Revista> listarAlgunosForName(String name_revista) {
    ResultSet datosObtenidos = null;
        PreparedStatement query = null;
        ArrayList<Revista> listA = new ArrayList<Revista>();
        System.out.println(name_revista);
        try {
            query = Conexion.getInstancia().prepareStatement("SELECT * FROM revista WHERE nombre_revista like"+"'%"+name_revista+"%'");
            datosObtenidos = query.executeQuery();
            if (datosObtenidos != null) {
                try {
                    while (datosObtenidos.next()) {
                        Revista userN = new Revista(datosObtenidos.getInt("id_revista"), datosObtenidos.getString("nombre_revista"), datosObtenidos.getString("archivo"), datosObtenidos.getString("fecha_publicacion"), datosObtenidos.getString("descripcion"), getRev1(datosObtenidos.getString("estado_revista")), datosObtenidos.getBigDecimal("costo_suscripcion"), getLike(datosObtenidos.getString("me_gusta")), getCom(datosObtenidos.getString("comentario")), getSus(datosObtenidos.getString("suscripciones")), datosObtenidos.getString("nombre_categoria"));
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
    public ArrayList<Revista> listarAlgunosForCategoria(String categoria) {
    ResultSet datosObtenidos = null;
        PreparedStatement query = null;
        ArrayList<Revista> listA = new ArrayList<Revista>();
        System.out.println(categoria);
        try {
            query = Conexion.getInstancia().prepareStatement(SELECTFORCATEGORIA);
            query.setString(1, categoria);
            datosObtenidos = query.executeQuery();
            if (datosObtenidos != null) {
                try {
                    while (datosObtenidos.next()) {
                        Revista userN = new Revista(datosObtenidos.getInt("id_revista"), datosObtenidos.getString("nombre_revista"), datosObtenidos.getString("archivo"), datosObtenidos.getString("fecha_publicacion"), datosObtenidos.getString("descripcion"), getRev1(datosObtenidos.getString("estado_revista")), datosObtenidos.getBigDecimal("costo_suscripcion"), getLike(datosObtenidos.getString("me_gusta")), getCom(datosObtenidos.getString("comentario")), getSus(datosObtenidos.getString("suscripciones")), datosObtenidos.getString("nombre_categoria"));
                        listA.add(userN);
                    }
                    return listA;
                } catch (SQLException ex) {
                    
                    System.out.println(ex);
                    return null;
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
}
