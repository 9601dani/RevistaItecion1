/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.conexion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author daniel
 */
public class conexion {
    
    private static conexion instancia;
    private static Connection connection=null;
    private final String USER="root";
    private final String URL="jdbc:mysql://localhost:3306/revista_I";
    private final String PASSWORD="Daniel.123";
    
    private conexion(){
        conectar();
    }
    public static conexion getInstancia(){
        if(instancia==null){
            instancia=new conexion();
        }
        return instancia;
    }
    
    public void conectar(){
         if(connection == null){
            try {
                 Class.forName("com.mysql.cj.jdbc.Driver");
                connection = DriverManager.getConnection(URL,USER,PASSWORD);
                System.out.println("Se Conecto");
            } catch (SQLException e) {
                System.err.println("error SQL");
            } catch (ClassNotFoundException ex) {
                 System.out.println("ClassNotFound Clase Connecion");
             }

        } else {
            System.out.println("Conexión aún vigente.");
        }
        
    }
    public void desconectar() {
        try {
            if (connection != null) {
                if (!connection.isClosed()) {
                    connection = null;
                    System.out.println("Desconectado a la base de Datos.");
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }
    
}
