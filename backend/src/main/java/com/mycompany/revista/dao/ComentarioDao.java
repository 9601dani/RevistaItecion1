/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.mycompany.revista.dao;

import com.mycompany.revista.clases.Comentario;
import com.mycompany.revista.clases.Tipo_anuncio;
import com.mycompany.revista.modelsE.ComentarioMostrar;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;

/**
 *
 * @author daniel
 */
public interface ComentarioDao extends CRUD<Comentario>{
    ArrayList<ComentarioMostrar> listarAlgunosForId(int id_revista);
    ArrayList<Tipo_anuncio> listTiposAnun();
    String updateCosto(String tipo, BigDecimal costo);
    ArrayList<Comentario> listComentarioDeRevistaPorFechas(int id_revista, String startDate,String endDate);
}
