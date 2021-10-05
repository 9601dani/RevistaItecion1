/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.clases;

import java.util.Date;

/**
 *
 * @author daniel
 */
public class Anunciante {
    private int id_anunciante;
    private Date nombre_anunciante;
    private String caracteristica_anun;

    //CONSTRUCTOR COMPLETO
    public Anunciante(int id_anunciante, Date nombre_anunciante, String caracteristica_anun) {
        this.id_anunciante = id_anunciante;
        this.nombre_anunciante = nombre_anunciante;
        this.caracteristica_anun = caracteristica_anun;
    }
    //CONSTRUCTOR SEMI

    public Anunciante(Date nombre_anunciante, String caracteristica_anun) {
        this.nombre_anunciante = nombre_anunciante;
        this.caracteristica_anun = caracteristica_anun;
    }

    public int getId_anunciante() {
        return id_anunciante;
    }

    public void setId_anunciante(int id_anunciante) {
        this.id_anunciante = id_anunciante;
    }

    public Date getNombre_anunciante() {
        return nombre_anunciante;
    }

    public void setNombre_anunciante(Date nombre_anunciante) {
        this.nombre_anunciante = nombre_anunciante;
    }

    public String getCaracteristica_anun() {
        return caracteristica_anun;
    }

    public void setCaracteristica_anun(String caracteristica_anun) {
        this.caracteristica_anun = caracteristica_anun;
    }
    

    
}
