/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.revista.clases;

import java.math.BigDecimal;
import java.util.ArrayList;

/**
 *
 * @author daniel
 */
public class AdminBeans {
    private int id_revista;
    private int totalApariciones;
    private BigDecimal totalGains;
    private String magazineName;
    private ArrayList<Revista> revistaList;
    private ArrayList<Comentario> listaComents;

    public AdminBeans(int id_revista, int totalApariciones) {
        this.id_revista = id_revista;
        this.totalApariciones=totalApariciones;
    }

    public AdminBeans(int id_revista, String magazineName) {
        this.id_revista = id_revista;
        this.magazineName = magazineName;
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

    public ArrayList<Revista> getRevistaList() {
        return revistaList;
    }

    public void setRevistaList(ArrayList<Revista> revistaList) {
        this.revistaList = revistaList;
    }

    public ArrayList<Comentario> getListaComents() {
        return listaComents;
    }

    public void setListaComents(ArrayList<Comentario> listaComents) {
        this.listaComents = listaComents;
    }
    
    
}
