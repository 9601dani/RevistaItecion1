/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.mycompany.revista.dao;

import com.mycompany.revista.clases.ABeans;
import com.mycompany.revista.clases.AdminBeans;
import com.mycompany.revista.clases.Revista;
import com.mycompany.revista.clases.Suscripcion;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author daniel
 */
public interface RevistaDao extends CRUD<Revista>{
    ArrayList<Revista> listarAlgunos(String name);
    Revista listarRev(String id_revista);
    ArrayList<AdminBeans> listarMasComentada(String startDate, String endDate);
    ArrayList<ABeans> listarMasSuscrita(String startDate, String endDate);
    ArrayList<Revista> listarAlgunosForName(String name_revista);
    ArrayList<Revista> listarAlgunosForCategoria(String categoria);
    ArrayList<Revista> listarforSus(String name);
    /**
     *
     * @return
     */
    ArrayList<Revista> listarEnEspera();
    
    String AceptarRevista(Revista r);
    ResultSet BuscarUnaRevista(int id);
    int Cantidad_Likes(int id);
}
