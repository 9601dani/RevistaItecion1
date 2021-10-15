/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.mycompany.revista.dao;

import com.mycompany.revista.clases.Revista;
import java.util.ArrayList;

/**
 *
 * @author daniel
 */
public interface RevistaDao extends CRUD<Revista>{
    ArrayList<Revista> listarAlgunos(String name);

    /**
     *
     * @return
     */
    ArrayList<Revista> listarEnEspera();
    
    String AceptarRevista(Revista r);
}
