/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.mycompany.revista.dao;

import com.mycompany.revista.clases.Recaudacion;
import com.mycompany.revista.clases.Suscripcion;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;

/**
 *
 * @author daniel
 */
public interface SuscripcionDao extends CRUD<Suscripcion> {
    String consultar(Suscripcion t);
    ArrayList<Suscripcion> consultarRep(String t, String startDate, String endDate);
     ArrayList<Recaudacion> getRecaudaciones(String t);
      ArrayList<Recaudacion> getRecaudacionesWhitDate(String t,String startDate, String endDate);
    String guardarRecaudacion(Recaudacion t);
    Suscripcion getInfo(String name, int id);
    String darLike(int id,String n);
    String quitarLike(int id, String n);
    
}
