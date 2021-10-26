/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.clases;

import com.mycompany.revista.clases.Comentario;
import com.mycompany.revista.clases.Recaudacion;
import com.mycompany.revista.clases.Suscripcion;
import com.mycompany.revista.clases.Usuario;
import java.math.BigDecimal;
import java.util.ArrayList;

/**
 *
 * @author daniel
 */
public class ABeans {
    private int id_revista;
    private BigDecimal totalGains;
    private int totalApariciones;
    private String magazineName;
    private ArrayList<Revista> revistaList;
    private ArrayList<Comentario> listaComents;
    private ArrayList<Suscripcion> listaSuscripcion;
    private ArrayList<Recaudacion> listaAutor;

    public ABeans(int id_revista, String magazineName) {
        this.id_revista = id_revista;
        this.magazineName = magazineName;
    }

    public ABeans(int id_revista, int totalApariciones) {
        this.id_revista = id_revista;
        this.totalApariciones = totalApariciones;
    }
    

    public int getTotalApariciones() {
        return totalApariciones;
    }

    public void setTotalApariciones(int totalApariciones) {
        this.totalApariciones = totalApariciones;
    }
    

    public int getId_revista() {
        return id_revista;
    }

    public void setId_revista(int id_revista) {
        this.id_revista = id_revista;
    }

    public BigDecimal getTotalGains() {
        return totalGains;
    }

    public void setTotalGains(BigDecimal totalGains) {
        this.totalGains = totalGains;
    }

    public String getMagazineName() {
        return magazineName;
    }

    public void setMagazineName(String magazineName) {
        this.magazineName = magazineName;
    }

    public ArrayList<Comentario> getListaComents() {
        return listaComents;
    }

    public void setListaComents(ArrayList<Comentario> listaComents) {
        this.listaComents = listaComents;
    }

    public ArrayList<Suscripcion> getListaSuscripcion() {
        return listaSuscripcion;
    }

    public void setListaSuscripcion(ArrayList<Suscripcion> listaSuscripcion) {
        this.listaSuscripcion = listaSuscripcion;
    }

    public ArrayList<Recaudacion> getListaAutor() {
        return listaAutor;
    }

    public void setListaAutor(ArrayList<Recaudacion> listaAutor) {
        this.listaAutor = listaAutor;
    }

    public ArrayList<Revista> getRevistaList() {
        return revistaList;
    }

    public void setRevistaList(ArrayList<Revista> revistaList) {
        this.revistaList = revistaList;
    }
    
    
    
    
}
