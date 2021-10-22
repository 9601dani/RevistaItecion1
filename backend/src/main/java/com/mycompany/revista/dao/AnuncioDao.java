/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.mycompany.revista.dao;

import com.mycompany.revista.clases.Anuncio;
import java.math.BigDecimal;

/**
 *
 * @author daniel
 */
public interface AnuncioDao extends CRUD<Anuncio>{
    BigDecimal precioAnuncio(String tipo);
    Anuncio onlyOne();
    void changeApariciones(int id_anuncio, int apariciones);
    
}
