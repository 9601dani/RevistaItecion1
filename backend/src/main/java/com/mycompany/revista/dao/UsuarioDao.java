/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.dao;

import com.mycompany.revista.clases.Usuario;
import java.sql.ResultSet;

/**
 *
 * @author daniel
 */
public interface UsuarioDao extends CRUD<Usuario> {
        ResultSet consultarLogin(Usuario t);
        ResultSet obtenerInfo(Usuario t);
}
