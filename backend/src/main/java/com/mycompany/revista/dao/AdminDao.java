/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.mycompany.revista.dao;

import com.mycompany.revista.clases.Administrador;
import com.mycompany.revista.clases.Usuario;
import java.sql.ResultSet;

/**
 *
 * @author daniel
 */
public interface AdminDao extends CRUD<Administrador> {
        ResultSet consultarLogin(Administrador t);
        ResultSet obtenerInfo(Administrador t);
        ResultSet getAll();
        String desactivar(Administrador t);
}
